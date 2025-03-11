function solve(json) {
    let person = JSON.parse(json);

    for (let key in person) {
        console.log(`${key}: ${person[key]}`)
    }
}
