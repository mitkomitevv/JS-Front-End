function solve(num1, num2) {
    function factorial(num) {
        return (num > 1) ? factorial(num - 1) * num : 1;
    }

    console.log((factorial(num1) / factorial(num2)).toFixed(2));
}
