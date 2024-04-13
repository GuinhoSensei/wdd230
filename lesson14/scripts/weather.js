window.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'deec6a3c399e4cb60e5ccaf8aa746390';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=${apiKey}&units=metric`;

    const weatherInfo = document.querySelector('.weather-info');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const weatherDescription = data.weather[0].description;
            const weatherIcon = data.weather[0].icon;

            weatherInfo.innerHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Weather: ${weatherDescription}</p>
                <img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather icon">
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error.message);
            weatherInfo.innerHTML = '<p>Failed to fetch weather data</p>';
        });
});
