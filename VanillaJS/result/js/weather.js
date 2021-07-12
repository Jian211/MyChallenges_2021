const API_KEY = "5a5e5dc879b0fbacdaf831fae3d75afa";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector(".weather span:first-child");
        const weather = document.querySelector(".weather span:last-child");

        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    })
}

function onGeoErr() {
    alert("i don't know where you are")
}

navigator.geolocation.getCurrentPosition( onGeoOk , onGeoErr );