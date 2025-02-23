function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let brokeHelmet = 0;
    let brokeSword = 0;
    let brokeShield = 0;
    let brokeArmor = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            brokeHelmet += 1;
        }

        if (i % 3 == 0) {
            brokeSword += 1;
        }

        if (i % 2 == 0 && i % 3 == 0) {
            brokeShield += 1;

            if (brokeShield % 2 === 0) {
                brokeArmor += 1;
            }
        }
    }
    expenses = brokeHelmet * helmetPrice + brokeSword * swordPrice + brokeShield * shieldPrice + brokeArmor * armorPrice

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

gladiatorExpenses(
    23,
    12.50,
    21.50,
    40,
    200
)