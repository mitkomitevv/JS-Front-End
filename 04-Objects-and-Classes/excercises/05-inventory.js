function solve(arr) {
    let heroes = [];

    for (line of arr) {
        let [name, level, items] = line.split(' / ')
        heroes.push({name: name, level: level, items: items})
    }

    heroes.sort((a, b) => Number(a.level) - Number(b.level));

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`)
    }
}
