document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '0626900a1615a05ddd1d74b628d14e2b'; //api key of your own
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    async function getWeatherData(city) {
        try {
            const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    function updateWeatherUI(weatherData) {
        locationElement.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
        temperatureElement.textContent = `${weatherData.main.temp} °C`;
        descriptionElement.textContent = weatherData.weather[0].description;
    }

    async function getAndDisplayWeather(city) {
        const weatherData = await getWeatherData(city);
        if (weatherData) {
            updateWeatherUI(weatherData);
        }
    }

    const defaultCity = 'Dehradun'; // Replace with the default city you want to display
    getAndDisplayWeather(defaultCity);
});
