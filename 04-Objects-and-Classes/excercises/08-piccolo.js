function solve(arr) {
    let cars = []

    for (let c of arr) {
        let [command, carPlate] = c.split(', ');

        if (command === 'IN' && !cars.includes(carPlate)) {
            cars.push(carPlate);
        } else if (command === 'OUT' && cars.includes(carPlate)) {
            cars.splice(cars.indexOf(carPlate), 1);
        }

    }

    if (cars.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        console.log(cars.sort((a, b) => a.localeCompare(b)).join('\n'));
    }
}
