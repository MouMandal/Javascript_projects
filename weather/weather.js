const apiKey = "56e036b3baf17597fefbf93c6a941d39";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
  
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        const data = await response.json();
        // console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "clouds.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "drizzle.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "rain.png";
        }
        else if (data.weather[0].main == "Snows") {
            weathericon.src = "snow.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "mist.png";
        }
        else {
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
        

   }
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

/*Another way*/
// async function checkWeather() {
//     const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=56e036b3baf17597fefbf93c6a941d39&units=metric");
//     const data = await response.json();
//     console.log(data);

    
// }
// checkWeather();