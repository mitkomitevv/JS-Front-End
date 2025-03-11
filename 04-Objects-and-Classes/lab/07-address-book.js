function solve(arr) {
    let addresses = {};

    for (let line of arr) {
        let [name, address] = line.split(':')
        addresses[name] = address
    }

    let sorted = Object.entries(addresses).sort((a, b) => a[0].localeCompare(b[0]))

    for (let [name, address] of sorted) {
        console.log(`${name} -> ${address}`)
    }
}
