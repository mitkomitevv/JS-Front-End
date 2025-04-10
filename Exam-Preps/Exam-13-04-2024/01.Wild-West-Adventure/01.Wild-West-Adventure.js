function solve(arr) {
    let n = Number(arr.shift());
    let posse = new Map;

    for (let i = 0; i < n; i++) {
        let [name, hp, bullets] = arr.shift().split(' ');
        posse.set(name, { hp: Number(hp), bullets: Number(bullets) });
    }

    while (arr[0] !== 'Ride Off Into Sunset') {
        let tokens = arr.shift().split(' - ');
        let action = tokens[0];
        let name = tokens[1];

        switch (action) {
            case 'FireShot':
                let target = tokens[2];

                if (posse.get(name).bullets > 0) {
                    posse.get(name).bullets -= 1;
                    console.log(`${name} has successfully hit ${target} and now has ${posse.get(name).bullets} bullets!`);
                } else {
                    console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
                }
                break;

            case 'TakeHit':
                let damage = Number(tokens[2]);
                let attacker = tokens[3];

                if (posse.get(name).hp - damage > 0) {
                    posse.get(name).hp -= damage;
                    console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${posse.get(name).hp} HP!`)
                } else {
                    console.log(`${name} was gunned down by ${attacker}!`)
                    posse.delete(name);
                }
                break;

            case 'Reload':
                if (posse.get(name).bullets < 6) {
                    let reloadedBullets = 6 - posse.get(name).bullets;
                    posse.get(name).bullets = 6;
                    console.log(`${name} reloaded ${reloadedBullets} bullets!`)
                } else {
                    console.log(`${name}'s pistol is fully loaded!`)
                }
                break;

            case 'PatchUp':
                let amount = Number(tokens[2]);

                if (posse.get(name).hp === 100) {
                    console.log(`${name} is in full health!`);
                } else {
                    let amountHealed = 0;

                    if (posse.get(name).hp + amount > 100) {
                        amountHealed = 100 - posse.get(name).hp;
                        posse.get(name).hp = 100
                        console.log(`${name} patched up and recovered ${amountHealed} HP!`);
                    } else {
                        posse.get(name).hp += amount;
                        console.log(`${name} patched up and recovered ${amount} HP!`);
                    }
                }
                break;
        }
    }

    for (let [name, data] of posse) {
        console.log(`${name}\n HP: ${data.hp}\n Bullets: ${data.bullets}`)
    }
}
