function solve(obj) {
    let city = Object.entries(obj)

    for (let [key, value] of city) {
        console.log(`${key} -> ${value}`);
    }
}

