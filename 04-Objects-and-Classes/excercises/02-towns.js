function solve(arr) {
    for (let town of arr) {
        let [city, latitude, longitude] = town.split(' | ');

        console.log({ town: city, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2)} )
    }
}
