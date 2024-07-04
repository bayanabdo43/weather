const day = document.querySelector(".day");
const date = document.querySelector(".date");
const city = document.querySelector(".city"); 
const temp = document.querySelector(".temp"); 
const tempp = document.querySelector(".tempp"); 
const humidity = document.querySelector(".humidity"); 
const wind = document.querySelector(".wind"); 
const dir = document.querySelector(".dir"); 
const custom = document.querySelector(".custom"); 
const twoDay = document.querySelector(".card-two .day");
const twoTemp = document.querySelector(".card-two .temp");
const twoTempp = document.querySelector(".card-two .tempp");
const twoCustom = document.querySelector(".card-two .custom");
const threeDay = document.querySelector(".card-three .day");
const threeTemp = document.querySelector(".card-three .temp");
const threeTempp = document.querySelector(".card-three .tempp");
const threeCustom = document.querySelector(".card-three .custom");
const searchBox = document.querySelector(".inputSearch");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weatherImg");
const twoWeatherImg = document.querySelector(".card-two .weatherImg");
const threeWeatherImg = document.querySelector(".card-three .weatherImg");
const li = document.querySelector("nav ul li");
let weather = {};

async function checkWeather (city){
   let res = await fetch("https://api.weatherapi.com/v1/forecast.json?key=07131acc1e684ef3aa3194649240207&q="+city+"&days=3")
   let data = await res.json();
   weather = {...data};
//    getTextStat();
   cardOneStat()
   cardTwoStat()
   cardThreeStat()
   display(weather);   
}
function cardOneStat(){
    if(weather.current.condition.text == "Partly cloudy"){
        weatherImg.src = "img/partlyCloudy.png"
    }else if(weather.current.condition.text == "Moderate rain" || "Light rain"){
        weatherImg.src = "img/moderateRain.png"
    }else if(weather.current.condition.text== "Sunny"){
        weatherImg.src = "img/113.png"
    }else if(weather.current.condition.text== "Patchy rain nearby"){
        weatherImg.src = "img/Patchy-rain-nearby.png"
    }else if(weather.current.condition.text== "Fog"){
        weatherImg.src = "img/Fog.png"
    }else if(weather.current.condition.text== "Cloudy"){
        weatherImg.src = "img/Overcast.png"
    }else if(weather.current.condition.text== "Clear"){
        weatherImg.src = "img/mo.png"
    }else if(weather.current.condition.text== "Heavy rain"){
        weatherImg.src = "img/Heavy rain.png"
    }
}
function cardTwoStat(){
    if(weather.forecast.forecastday[1].day.condition.text == "Partly cloudy"){
        twoWeatherImg.src = "img/partlyCloudy.png"
    }else if(weather.forecast.forecastday[1].day.condition.text == "Moderate rain" || "Light rain"){
        twoWeatherImg.src = "img/moderateRain.png"
    }else if(weather.forecast.forecastday[1].day.condition.text == "Sunny"){
        twoWeatherImg.src = "img/113.png"
    }else if(weather.forecast.forecastday[1].day.condition.text == "Patchy rain nearby"){
        twoWeatherImg.src = "img/Patchy-rain-nearby.png"
    }else if(weather.forecast.forecastday[1].day.condition.text == "Fog"){
        twoWeatherImg.src = "img/Fog.png"
    }else if(weather.forecast.forecastday[1].day.condition.text == "Cloudy"){
        twoWeatherImg.src = "img/Overcast.png"
    }else if(weather.forecast.forecastday[1].day.condition.text == "Clear"){
        twoWeatherImg.src = "img/mo.png"
    }else if(weather.forecast.forecastday[1].day.condition.text == "Heavy rain"){
        twoWeatherImg.src = "img/Heavy rain.png"
    }
}
function cardThreeStat(){
    if(weather.forecast.forecastday[2].day.condition.text == "Partly cloudy"){
        threeWeatherImg.src = "img/partlyCloudy.png"
    }else if(weather.forecast.forecastday[2].day.condition.text == "Moderate rain" || "Light rain"){
        threeWeatherImg.src = "img/moderateRain.png"
    }else if(weather.forecast.forecastday[2].day.condition.text == "Sunny"){
        threeWeatherImg.src = "img/113.png"
    }else if(weather.forecast.forecastday[2].day.condition.text == "Patchy rain nearby"){
        threeWeatherImg.src = "img/Patchy-rain-nearby.png"
    }else if(weather.forecast.forecastday[2].day.condition.text == "Fog"){
        threeWeatherImg.src = "img/Fog.png"
    }else if(weather.forecast.forecastday[2].day.condition.text == "Cloudy"){
        threeWeatherImg.src = "img/Overcast.png"
    }else if(weather.forecast.forecastday[2].day.condition.text == "Clear"){
        threeWeatherImg.src = "img/mo.png"
    }else if(weather.forecast.forecastday[2].day.condition.text == "Heavy rain"){
        threeWeatherImg.src = "img/Heavy rain.png"
    }
}
// function getTextStat(){
//     for (var i = 0; i < weatherImg.length ; i++) {
//         if(weather.forecast.forecastday[i].day.condition.text == "Partly cloudy"){
//             weatherImg.src = "img/partlyCloudy.png"
//         }else if(weather.forecast.forecastday[i].day.condition.text == "Moderate rain" || "Light rain"){
//             weatherImg.src = "img/moderateRain.png"
//         }else if(weather.forecast.forecastday[i].day.condition.text== "Sunny"){
//             weatherImg.src = "img/113.png"
//         }else if(weather.forecast.forecastday[i].day.condition.text== "Patchy rain nearby"){
//             weatherImg.src = "img/Patchy-rain-nearby.png"
//         }else if(weather.forecast.forecastday[i].day.condition.text== "Fog"){
//             weatherImg.src = "img/Fog.png"
//         }else if(weather.forecast.forecastday[i].day.condition.text== "Cloudy"){
//             weatherImg.src = "img/Overcast.png"
//         }else if(weather.forecast.forecastday[i].day.condition.text== "Clear"){
//             weatherImg.src = "img/mo.png"
//         }else if(weather.forecast.forecastday[i].day.condition.text== "Heavy rain"){
//             weatherImg.src = "img/Heavy rain.png"
//         }
//    }
// }

function display(weather){
    day.textContent = String(new window.Date()).slice(0,4);
    date.textContent = String(new window.Date()).slice(3, 10);
    city.textContent = weather.location.name;
    temp.textContent = Math.round(weather.current.temp_c);
    tempp.textContent = weather.current.temp_f;
    humidity.textContent = weather.current.humidity;
    wind.textContent = weather.current.wind_kph;
    dir.textContent = weather.current.wind_dir;
    custom.textContent = weather.current.condition.text;
    twoDay.textContent = weather.forecast.forecastday[1].date;
    twoTemp.textContent = Math.round(weather.forecast.forecastday[1].day.maxtemp_c);
    twoTempp.textContent = Math.round(weather.forecast.forecastday[1].day.maxtemp_f);
    twoCustom.textContent = weather.forecast.forecastday[1].day.condition.text;
    threeDay.textContent = weather.forecast.forecastday[2].date;
    threeTemp.textContent = Math.round(weather.forecast.forecastday[2].day.maxtemp_c);
    threeTempp.textContent = Math.round(weather.forecast.forecastday[2].day.maxtemp_f);
    threeCustom.textContent = weather.forecast.forecastday[2].day.condition.text;
}


searchBtn.addEventListener("click", function(){
    checkWeather(searchBox.value)
    cardOneStat()
    cardTwoStat()
    cardThreeStat()
    searchBox.value=""
})
// searchBox.addEventListener("keydown", function(){
//     checkWeather(searchBox.value)
// })
