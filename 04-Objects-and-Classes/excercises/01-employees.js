function solve(arr) {
    let people = [];

    for (let name of arr) {
        people.push({ name: name, number: name.length });
    }

    for (let person of people) {
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
    }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )