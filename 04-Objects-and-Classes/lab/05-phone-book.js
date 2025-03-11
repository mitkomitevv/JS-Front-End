function solve(arr) {
    let phonebook = {};

    for (let line of arr) {
        let [name, phone] = line.split(' ');
        phonebook[name] = phone;
    }

    for (let name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }
}
