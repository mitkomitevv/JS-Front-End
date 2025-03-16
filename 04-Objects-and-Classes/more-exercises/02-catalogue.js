function solve (arr) {
    arr.sort((a, b) => a.localeCompare(b))

    let currentLetter = '';
    for (let item of arr) {
        let firstLetter = item[0];
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            console.log(firstLetter);
        }
        console.log(`  ${item.split(' : ').join(': ')}`);
    }
}
