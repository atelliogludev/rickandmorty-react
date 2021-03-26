export const apiUrl = "https://rickandmortyapi.com/api";

export const apiHome = (pageNumber) =>
  pageNumber !== undefined
    ? `${apiUrl}/episode?page=${pageNumber}`
    : `${apiUrl}/episode`;

export const apiDetail = (id) => `${apiUrl}/episode/${id}`;   


export const apiCharacterDetails = (id) => `${apiUrl}/character/${id}`;

export const apiMultipleCharacters = (characterIds) => {
  let query = characterIds.join(",");
  return `${apiUrl}/character/${query}`
};