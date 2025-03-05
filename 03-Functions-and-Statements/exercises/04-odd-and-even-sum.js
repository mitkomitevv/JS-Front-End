function solve(num) {
    let evenSum = 0;
    let oddSum = 0;

    for (let char of num.toString()) {
        let n = Number(char)

        if (n == 0) {
            continue;
        } else if (n % 2 == 0) {
            evenSum += n;
        } else {
            oddSum += n;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
