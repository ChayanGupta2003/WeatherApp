
const apikey= "c87920ccb6151b55efbe4f90a11e62b1";
const apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon= document.querySelector(".weatherIcon");
async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"&degc";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "Km/hr";

    if(data.weather[0].main=="Clouds"){
        weathericon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src = "images/Rain.png";
    }
    else if(data.weather[0].main=="Haze"){
        weathericon.src = "images/Haze.png";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src = "images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src = "images/mist.png";
    }
    else if(data.weather[0].main=="Snow"){
        weathericon.src = "images/snow.png";
    }
document.querySelector(".weather").style.display="block";
}
    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })