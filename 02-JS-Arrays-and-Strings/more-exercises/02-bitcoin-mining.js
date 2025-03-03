function solve(arr) {
    const goldPrice = 67.51;
    const bitcoinPrice = 11949.16;

    let totalMoney = 0;
    let bitcoins = 0;
    let boughtOnDay;

    for ([day, grams] of arr.entries()) {
        if ((day + 1) % 3 == 0) {
            grams *= 0.7;
        }

        totalMoney += grams * goldPrice;

        while (totalMoney >= bitcoinPrice) {
            bitcoins += 1;
            totalMoney -= bitcoinPrice;
            if (bitcoins == 1) {
                boughtOnDay = day + 1;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins) {
        console.log(`Day of the first purchased bitcoin: ${boughtOnDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}
