const city = document.getElementById("city");
const temp = document.getElementById("temp");
const btn = document.getElementById("btn");
const description = document.getElementById("description");

function getWeather(event) {
    event.preventDefault();
    const APIKey = '98740f4ebc0d63bc0f8ba70090e5a091';
    const value = city.value;
    console.log(value);
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${APIKey}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        temp.innerHTML = data.main.temp + '°C'
        description.innerHTML = data.weather[0].main
      })
      .catch((error) => {
        console.log(error);
      })
    }

