const url = "https://api.openweathermap.org/data/2.5/forecast?q=carlsbad&units=imperial&appid=e23e17622b0c04f29d9582bd29cfb3ec";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayWeather(data) {
    const weather = document.querySelector(".weather");

    const weatherTop = document.createElement("div");

    const temp = document.createElement("h2");
    const conditon = document.createElement("h3");
    const humid = document.createElement("h3");
    const icon = document.createElement("img");
    const futureIcon1 = document.createElement("img");
    const futureIcon2 = document.createElement("img");
    const futureIcon3 = document.createElement("img");

    const weatherBottom = document.createElement("div");

    // 3 day forecast
    const forecast = document.createElement("div");

    const forecastTitle = document.createElement("h2");

    const forecastOne = document.createElement("h3");
    const forecastTwo = document.createElement("h3");
    const forecastThree = document.createElement("h3");

    const iconSrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    const iconSrcTom = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
    const iconSrc2nd = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
    const iconSrc3rd = `https://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png`;

    temp.innerHTML = `Temperature: ${data.list[0].main.temp} &#8457;`;
    conditon.innerHTML = `${(data.list[0].weather[0].description).toUpperCase()}`;
    humid.textContent = `Humidity: ${data.list[0].main.humidity}%`;
    
    icon.setAttribute("src", iconSrc);
    icon.setAttribute("alt", "current weather");
    futureIcon1.setAttribute("src", iconSrcTom);
    futureIcon1.setAttribute("alt", "tomorrow's weather");
    futureIcon2.setAttribute("src", iconSrc2nd);
    futureIcon2.setAttribute("alt", "two days from now weather");
    futureIcon3.setAttribute("src", iconSrc3rd);
    futureIcon3.setAttribute("alt", "three days from now weather");

    forecastTitle.textContent = "3 Day Forecast:";

    forecastOne.innerHTML = `${data.list[8].main.temp} &#8457;`;
    forecastTwo.innerHTML = `${data.list[16].main.temp} &#8457;`;
    forecastThree.innerHTML = `${data.list[24].main.temp} &#8457;`;

    forecast.setAttribute("class", "forecast");

    forecastOne.appendChild(futureIcon1);
    forecastTwo.appendChild(futureIcon2);
    forecastThree.appendChild(futureIcon3);

    weatherTop.appendChild(temp);
    weatherTop.appendChild(icon);
    weatherTop.appendChild(conditon);
    weatherTop.appendChild(humid);

    forecast.appendChild(forecastOne);
    forecast.appendChild(forecastTwo);
    forecast.appendChild(forecastThree);

    weatherBottom.appendChild(forecastTitle);
    weatherBottom.appendChild(forecast);

    weatherTop.setAttribute("class","weather-top");
    weatherBottom.setAttribute("class","weather-bottom");

    weather.appendChild(weatherTop);
    weather.appendChild(weatherBottom);
}
