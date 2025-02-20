function printSum(num1, num2) {
    let totalSum = 0;
    let result = '';
    for (let i = num1; i <= num2; i++) {
        result += i + ' '
        totalSum += i;
    }
    console.log(result.trim())
    console.log('Sum:', totalSum);
}
