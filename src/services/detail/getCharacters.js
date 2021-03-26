import { apiMultipleCharacters } from "..";

export default async function getCharacters(characterIds) {
  return await fetch(apiMultipleCharacters(characterIds))
    .then((response) => response.json())
    .then((data) =>
      data.map((item) => {
        item.planet = item.origin.name;
        return item;
      })
    );
}
