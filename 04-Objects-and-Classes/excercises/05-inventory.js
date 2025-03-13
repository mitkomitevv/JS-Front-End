function solve(arr) {
    let heroes = [];

    for (line of arr) {
        let [name, level, items] = line.split(' / ')
        heroes.push({name: name, level: level, items: items})
    }

    for (let hero of heroes.sort((a, b) => Number(a.level) - Number(b.level))) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`)
    }
}
