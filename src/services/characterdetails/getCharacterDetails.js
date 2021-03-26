import { apiCharacterDetails } from "..";


export async function getCharacterDetails(id) {
  return await fetch(apiCharacterDetails(id))
    .then((response) => response.json())
    
    
}
