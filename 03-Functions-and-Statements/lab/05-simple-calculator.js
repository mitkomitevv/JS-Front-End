function solve(num1, num2, operator) {
    const operationsMap = {
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b,
    }

    // const operations = {
    //     'multiply': num1 * num2,
    //     'divide': num1 / num2,
    //     'add': num1 + num2,
    //     'subtract': num1 - num2
    // }

    console.log(operationsMap[operator](num1, num2))
    // console.log(operations[operator])
}
