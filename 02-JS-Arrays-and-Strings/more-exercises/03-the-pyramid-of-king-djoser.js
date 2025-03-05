function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let count = 0;

    while (true) {
        count++;

        if (base == 1 || base == 2) {
            gold += (base ** 2) * increment;
            break;
        } else if (count % 5 == 0) {
            lapis += ((base - 1) * 4) * increment;
        } else {
            marble += ((base - 1) * 4) * increment;
        }

        stone += ((base - 2) ** 2) * increment;
        base -= 2
    }

    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(count * increment)}`)
}
