const fetch = require("node-fetch")

let locationJSONPath = "./Location/homeLocation.json";
let apiKeysJSONPath = "./APIKeys.json"

console.log(locationJSONPath);

const locationJSONData = require(locationJSONPath);
const apiKeysJSON = require(apiKeysJSONPath);

console.log(locationJSONData);

//console.log("lat: ", locationJSONData.lat);
//console.log("lon: ", locationJSONData.lon);

var openWeatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + locationJSONData.lat + "&lon=" + locationJSONData.lon + "&appid=" + apiKeysJSON.openWeather;

//console.log(openWeatherURL);
async function getWeatherJSON(url) {
    let response = await fetch(url);
    console.log(response);
    return response;
}

console.log(getWeatherJSON(openWeatherURL));

/* OpenWeather API Call
https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
*/