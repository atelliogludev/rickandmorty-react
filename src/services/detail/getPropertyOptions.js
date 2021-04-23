export default function getPropertyOptions(characters){
//    const propertyNames = ["species", "gender", "type", "status", "planet"];
    const properties = { species: [], gender: [], type: [], status:[], planet:[] }

    Object.keys(properties).forEach(property => {
        //Get all values from characters
        let allItems = characters.map((item) => item[property]);
        //Get Unique Values
        allItems = allItems.filter((item,index) => allItems.indexOf(item) === index)
        //Set Properties' value of current key
        properties[property] = allItems
    })
    return properties;
}