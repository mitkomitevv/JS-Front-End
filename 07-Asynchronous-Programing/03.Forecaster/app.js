function attachEvents() {
    let url = `http://localhost:3030/jsonstore/forecaster/`;
    let location = document.getElementById('location');
    console.log(location)
    document.getElementById('submit').addEventListener('click', getWeather);

    let forecast = document.getElementById('forecast');
    let currentWeather = document.getElementById('current');
    let upcomingWeather = document.getElementById('upcoming');

    let weatherMap = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    }

    async function getWeather() {
        let data;

        try {
            let weather = await fetch(url + 'locations');
            data = await weather.json();
        } catch {
            return;
        }

        for (let loc of data) {
            forecast.style.display = 'block';

            if (loc.name === location.value) {
                let locationCode = loc.code;

                try {
                    const [todayResponse, upcomingResponse] = await Promise.all([
                        fetch(url + 'today/' + locationCode),
                        fetch(url + 'upcoming/' + locationCode)
                    ]);

                    let todayData = await todayResponse.json();
                    let upcomingData = await upcomingResponse.json();

                    let todayDiv = document.createElement('div');
                    todayDiv.className = 'forecasts';
                    todayDiv.innerHTML =
                        `<span class="condition symbol">${weatherMap[todayData.forecast.condition]}</span>
                            <span class="condition">
                                <span class="forecast-data">${todayData.name}</span>
                                <span class="forecast-data">${todayData.forecast.low}${weatherMap['Degrees']}/${todayData.forecast.high}${weatherMap['Degrees']}</span>
                                <span class="forecast-data">${todayData.forecast.condition}</span>
                            </span>`;
                    currentWeather.appendChild(todayDiv);

                    let upcomingDiv = document.createElement('div');
                    upcomingDiv.className = 'forecast-info';

                    for (let dayForecast of upcomingData.forecast) {
                        let span = document.createElement('span');
                        span.className = 'upcoming';
                        span.innerHTML =
                            `<span class="symbol">${weatherMap[dayForecast.condition]}</span>
                             <span class="forecast-data">${dayForecast.low}${weatherMap['Degrees']}/${dayForecast.high}${weatherMap['Degrees']}</span>
                             <span class="forecast-data">${dayForecast.condition}</span>`;
                        upcomingDiv.appendChild(span)
                    }

                    upcomingWeather.appendChild(upcomingDiv)
                } catch {
                    forecast.textContent = 'Error';
                    return;
                }
            }
        }
    }
}

attachEvents();