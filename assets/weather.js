const buttonGet = document.querySelector(".container-input__button");
const inputSity = document.querySelector(".container-input__input");
const genWeather = document.querySelector(".gen-weather");
const errorSign = document.querySelector(".error-sign");

buttonGet.addEventListener("click", async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputSity.value}&appid=b13f4a4f7cd591a462a291818031dee7`);
    if (!response.ok) {
        errorSign.style.display = 'inline-block';
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }else {
        errorSign.style.display = 'none';
      }
    const data = await response.json();
    const genDataWeather = {
        temperature: () => Math.round(data.main.temp - 273.15), 
        weather: data.weather[0].description,
        icon: data.weather[0].icon,
    }
    genWeather.insertAdjacentHTML('beforeend', `
    <div class="gen-weather__desc">
        <div class="gen-weather__sign gen-weather__sign--temperature">${genDataWeather.temperature()} F&deg</div>
        <div class="gen-weather__sign gen-weather__sign--weather">${genDataWeather.weather} <img class="gen-weather__sign-img" src="http://openweathermap.org/img/w/${genDataWeather.icon}.png" alt="icon weather"></div>
    </div>
    `)
})

