function solve(num) {
    let firstChar = String(num)[0];
    let flag = true;
    let sum = 0;

    for (let char of String(num)) {
        if (char != firstChar) {
            flag = false
        }
        sum += Number(char)
    }
    console.log(flag)
    console.log(sum)
}
