function solve(number) {
    let arr = number.toString().split('');
    let sumArray = arr => {
        return arr.reduce((sum, value) => Number(sum) + Number(value));
    }

    while (true) {
        if (sumArray(arr) / arr.length < 5) {
            arr.push(9)
        } else {
            return arr.join('');
        }
    }
}
