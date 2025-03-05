function solve(num1, num2, num3) {
    function sum() {
        return num1 + num2
    }

    function subtract() {
        console.log(sum() - num3)
    }
    return subtract()
}
