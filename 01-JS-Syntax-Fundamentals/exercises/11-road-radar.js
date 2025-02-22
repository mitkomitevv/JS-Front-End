function roadRadar(speed, area) {
    let speeding = 0;
    let zone;
    let status;

    switch (area) {
        case 'motorway': zone = 130; break;
        case 'interstate': zone = 90; break;
        case 'city': zone = 50; break;
        case 'residential': zone = 20; break;
    }

    speeding = speed - zone;

    if (speeding <= 0) {
        console.log(`Driving ${speed} km/h in a ${zone} zone`);
    } else if (speeding <= 20) {
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${zone} - speeding`)
    } else if (speeding <= 40) {
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${zone} - excessive speeding`)
    } else {
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${zone} - reckless driving`)
    }
}
