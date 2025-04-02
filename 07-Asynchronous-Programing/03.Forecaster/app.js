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
                    let currLocation = await fetch(url + 'today/' + locationCode);
                    let currData = await currLocation.json();

                    let div = document.createElement('div');
                    div.className = 'forecasts';
                    div.innerHTML =
                        `<span class="condition symbol">${weatherMap[currData.forecast.condition]}</span>
                            <span class="condition">
                                <span class="forecast-data">${currData.name}</span>
                                <span class="forecast-data">${currData.forecast.low}${weatherMap['Degrees']}/${currData.forecast.high}${weatherMap['Degrees']}</span>
                                <span class="forecast-data">${currData.forecast.condition}</span>
                            </span>`;
                    currentWeather.appendChild(div);
                } catch {
                    return;
                }

                try {
                    let currLocation = await fetch(url + 'upcoming/' + locationCode);
                    let currData = await currLocation.json();

                    let div = document.createElement('div');
                    div.className = 'forecast-info';

                    for (let dayForecast of currData.forecast) {
                        let span = document.createElement('span');
                        span.className = 'upcoming';
                        span.innerHTML =
                            `<span class="symbol">${weatherMap[dayForecast.condition]}</span>
                             <span class="forecast-data">${dayForecast.low}${weatherMap['Degrees']}/${dayForecast.high}${weatherMap['Degrees']}</span>
                             <span class="forecast-data">${dayForecast.condition}</span>`;
                        div.appendChild(span)
                    }

                    upcomingWeather.appendChild(div)
                } catch {
                    return;
                }
            }
        }
    }
}

attachEvents();