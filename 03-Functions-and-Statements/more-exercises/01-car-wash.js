function solve(arr) {
    let carWashLevel = 0
    let washMap = {
        'soap': (a) => a + 10,
        'water': (a) => a * 1.20,
        'vacuum cleaner': (a) => a * 1.25,
        'mud': (a) => a * 0.90 
    }

    for (let cmd of arr) {
        carWashLevel = washMap[cmd](carWashLevel)
    }

    console.log(`The car is ${carWashLevel.toFixed(2)}% clean.`)
}
