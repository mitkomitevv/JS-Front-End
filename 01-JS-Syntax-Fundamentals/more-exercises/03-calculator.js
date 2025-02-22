function calculate(num1, operator, num2) {
    let result;

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '/': result = num1 / num2; break;
        case '*': result = num1 * num2; break;
    }
    console.log(result.toFixed(2))

    // let operators = {
    //     '+': (num1, num2) => num1 + num2,
    //     '-': (num1, num2) => num1 - num2,
    //     '/': (num1, num2) => num1 / num2,
    //     '*': (num1, num2) => num1 * num2
    // }

    // console.log(operators[operator](num1, num2).toFixed(2))
}
