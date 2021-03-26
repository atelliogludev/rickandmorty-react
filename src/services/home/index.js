import { apiHome } from "..";

export async function getHomeData(pageNumber){
    return await fetch(apiHome(pageNumber))
    .then(response=>response.json())
     
}