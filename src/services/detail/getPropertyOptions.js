export default function getPropertyOptions(characters){
//    const propertyNames = ["species", "gender", "type", "status", "planet"];
    const properties = { species: [], gender: [], type: [], status:[], planet:[] }

    Object.keys(properties).forEach(property => {
        let allItems = characters.map((item) => item[property]);
        allItems = allItems.filter((item,index) => allItems.indexOf(item) === index)
        properties[property] = allItems
    })
    return properties;
}