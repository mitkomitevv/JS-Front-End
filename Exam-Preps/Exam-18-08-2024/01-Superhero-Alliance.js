function solve(arr) {
    let n = arr.shift();
    let superHeroes = new Map();

    for (let i = 0; i < n; i++){
        let [name, superPower, energy] = arr.shift().split('-');
        superHeroes.set(name, {superPower: superPower.split(','), energy: Number(energy)});
    }

    while (arr[0] !== 'Evil Defeated!') {
        let tokens = arr.shift().split(' * ');
        let cmd = tokens[0];
        let name = tokens[1];

        switch (cmd) {
            case 'Use Power':
                let power = tokens[2];
                let energy = Number(tokens[3]);

                if (superHeroes.get(name).superPower.includes(power) && superHeroes.get(name).energy >= energy) {
                    superHeroes.get(name).energy -= energy;
                    console.log(`${name} has used ${power} and now has ${superHeroes.get(name).energy} energy!`);
                } else {
                    console.log(`${name} is unable to use ${power} or lacks energy!`);
                }
                break;

            case 'Train':
                let trainingEnergy = Number(tokens[2]);

                if (superHeroes.get(name).energy === 100) {
                    console.log(`${name} is already at full energy!`);
                } else {
                    let gainedEnergy = Math.min(100 - superHeroes.get(name).energy, trainingEnergy);
                    superHeroes.get(name).energy += gainedEnergy;
                    console.log(`${name} has trained and gained ${gainedEnergy} energy!`);
                }
                break;

            case 'Learn':
                let newPower = tokens[2];

                if (superHeroes.get(name).superPower.includes(newPower)) {
                    console.log(`${name} already knows ${newPower}.`);
                } else {
                    superHeroes.get(name).superPower.push(newPower);
                    console.log(`${name} has learned ${newPower}!`);
                }
                break
        }
    }

    for (let [name, data] of superHeroes) {
        console.log(`Superhero: ${name}\n- Superpowers: ${data.superPower.join(', ')}\n- Energy: ${data.energy}`);
    }
}
