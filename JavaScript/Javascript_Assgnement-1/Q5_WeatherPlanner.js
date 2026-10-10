

let temperature = 25;
let isRaiining = false;
let windspeed = 10;

if(isRaining){
    console.log("It's raining. Please carry an umbrella.");
} else if(temperature > 35){
    console.log("It's hot outside. Stay hydrated and wear light clothing.");
} else if(temperature < 15 && windSpeed > 20){
    console.log("It's cold and windy. Dress warmly and be cautious of strong winds.");
} else{
    console.log("The weather is moderate. Enjoy your day!");
}