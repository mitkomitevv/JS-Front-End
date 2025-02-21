function vacationPlanner(numDays, typePeople, day) {
    let totalPrice = 0;
    let pricePerDay = 0;

    switch (day) {
        case 'Friday':
            switch (typePeople) {
                case 'Students': pricePerDay = 8.45; break;
                case 'Business': pricePerDay = 10.90; break;
                case 'Regular': pricePerDay = 15; break;
            }
            break;
        case 'Saturday':
            switch (typePeople) {
                case 'Students': pricePerDay = 9.80; break;
                case 'Business': pricePerDay = 15.60; break;
                case 'Regular': pricePerDay = 20; break;
            }
            break;
        case 'Sunday':
            switch (typePeople) {
                case 'Students': pricePerDay = 10.46; break;
                case 'Business': pricePerDay = 16; break;
                case 'Regular': pricePerDay = 22.5; break;
            }
    }

    totalPrice = pricePerDay * numDays

    if (typePeople === 'Students' && numDays >= 30) {
        totalPrice *= 0.85;
    } else if (typePeople === 'Business' && numDays >= 100) {
        totalPrice = (numDays - 10) * pricePerDay;
    } else if (typePeople === 'Regular' && numDays >= 10 && numDays <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}