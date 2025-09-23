
const searchbox=document.querySelector('.first input');
const searchbtn=document.querySelector('.first button');
const weatherimg=document.querySelector('.weather-icon')


const apikey="&appid=e38d366a1c13c8e6f2acd385397470de"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
async function checkweather(city) {
    const response=await fetch(apiurl+city+apikey);
    var data=await response.json();
    document.getElementsByClassName('city')[0].innerHTML=data.name;
    document.getElementsByClassName('temp')[0].innerHTML=data.main.temp+` °C`;
    document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
    document.querySelector('.windspeed').innerHTML=data.wind.speed+'km/h';
    if(data.weather[0].main=="Clouds"){
        weatherimg.src="./images/clouds.png"
    }
   else if(data.weather[1].main=="Clear"){
    weatherimg.src="./images/clear.png"
   }
   else if(data.weather[1].main=="Rain"){
    weatherimg.src="./images/rain.png"
   }
   else if(data.weather[1].main=="Drizzle"){
    weatherimg.src="./images/drizzle.png"
   }
   else if(data.weather[1].main=="Mist"){
    weatherimg.src="./images/mist.png"
   }

}
searchbtn.addEventListener("click",()=>{
    

    checkweather( encodeURIComponent(searchbox.value.trim()))
})

