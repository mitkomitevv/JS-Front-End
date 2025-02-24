function calculateSpice(startingYield) {
    let days = 0;
    let spices = 0;
    let yeild = startingYield;

    while (yeild >= 100) {
        days += 1;
        spices += yeild - 26;
        yeild -= 10;
    }
    console.log(days)
    if (spices >= 26) {
        console.log(spices - 26);
    } else {
        console.log(0)
    }
}