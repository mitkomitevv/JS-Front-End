function solve(list) {
    let chemicals = list.slice(1, Number(list[0]) + 1);
    let commands = list.slice(Number(list[0]) + 1);

    let chemObj = {};
    chemicals.forEach(item => {
        let [chem, quantity] = item.split(' # ');
        chemObj[chem] = [Number(quantity)];
    });

    for (let command of commands) {
        if (command === 'End') {
            break;
        }

        let chems = command.split(' # ');

        if (chems[0] === 'Mix') {
            let [_, chem1, chem2, quantity] = chems;
            quantity = Number(quantity);

            if (Number(chemObj[chem1][0]) >= quantity && Number(chemObj[chem2][0]) >= quantity) {
                chemObj[chem1][0] -= quantity;
                chemObj[chem2][0] -= quantity;
                console.log(`${chem1} and ${chem2} have been mixed. ${quantity} units of each were used.`);
            } else {
                console.log(`Insufficient quantity of ${chem1}/${chem2} to mix.`);
            }
        } else if (chems[0] === 'Replenish') {
            let [_, chem, quantity] = chems;
            quantity = Number(quantity);

            if (!chemObj[chem]) {
                console.log(`The Chemical ${chem} is not available in the lab.`);
            } else if (Number(chemObj[chem][0]) + quantity > 500) {
                let increasedBy = 500 - chemObj[chem][0];
                chemObj[chem][0] = 500;
                console.log(`${chem} quantity increased by ${increasedBy} units, reaching maximum capacity of 500 units!`);
            } else {
                chemObj[chem][0] += quantity;
                console.log(`${chem} quantity increased by ${quantity} units!`);
            }
        } else {
            let [_, chem, formula] = chems;

            if (!chemObj[chem]) {
                console.log(`The Chemical ${chem} is not available in the lab.`);
            } else {
                chemObj[chem].push(formula);
                console.log(`${chem} has been assigned the formula ${formula}.`);
            }
        }
    }

    for (let chem in chemObj) {
        if (chemObj[chem].length === 1) {
            console.log(`Chemical: ${chem}, Quantity: ${chemObj[chem][0]}`);
        } else {
            console.log(`Chemical: ${chem}, Quantity: ${chemObj[chem][0]}, Formula: ${chemObj[chem][1]}`);
        }
    }
}
