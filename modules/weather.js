const location = document.getElementById('input-location');
const button = document.getElementById('weather-button');
const weatherDisplay = document.getElementById('weather-display');
const weatherIcon = document.getElementById('weather-icon');

async function weatherAPI() {
    const city = location.value;
    const apiKey = '778d16a4badc48ffa9310409240708';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    
    try {
        const response = await fetch(apiUrl);
        if(!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json()
        weatherDisplay.innerHTML = `${data.current.heatindex_c} °C
                                   ${data.current.condition.text} `
                                   
        weatherIcon.innerHTML = `<img src="${data.current.condition.icon}">`
    }
    catch (error) {
        console.error(error)
        if(error.message === '400') {
            weatherDisplay.innerHTML = "<p class='warning'>Invalid input</p>"
        } else {
            weatherDisplay.innerHTML = "<p class='warning'>An error occured. Please try again later.</p>"
        }
    }
}

function weatherMain() {
    button.addEventListener('click', weatherAPI) 
}

export default weatherMain