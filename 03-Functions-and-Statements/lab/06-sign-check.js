function solve(...args) {
    let count = 0

    for (let num of args) {
        if (num.toString()[0] === '-') {
            count++;
        }
    }
    console.log(count % 2 == 0 ? 'Positive' : 'Negative')
}
