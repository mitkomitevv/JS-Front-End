function solve(num1, num2) {
    function factorial1(num) {
        return (num > 1) ? factorial1(num - 1) * num : 1;
    }
    
    function factorial2(num) {
        return (num > 1) ? factorial2(num - 1) * num : 1;
    }

    console.log((factorial1(num1) / factorial2(num2)).toFixed(2));
}
 