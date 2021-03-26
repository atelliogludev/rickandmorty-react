import { apiDetail } from "..";

export async function getDetailData(id) {
  return await fetch(apiDetail(id))
    .then((response) => response.json())
    .then((data) => {
      data.characterIds = data.characters.map((item) => item.split("/").pop());
      return data;
    });
}
