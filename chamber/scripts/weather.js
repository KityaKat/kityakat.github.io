const url = "https://api.openweathermap.org/data/2.5/forecast?q=cypress&units=imperial&appid=e23e17622b0c04f29d9582bd29cfb3ec";

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
