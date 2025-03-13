function solve(arrJSON) {
    let result = {};

    for (let line of arrJSON) {
        let obj = JSON.parse(line);
        result[Object.keys(obj)[0]] = Object.values(obj)[0];
    }

    for (let [key, value] of Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(`Term: ${key} => Definition: ${value}`);
    }
}
