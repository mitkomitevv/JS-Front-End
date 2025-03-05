function solve(nums) {
    for (let num of nums) {
        let numToString = num.toString()

        if (numToString == numToString.split('').reverse().join('')) {
            console.log(true);
        } else {
            console.log(false)
        }
    }
}

solve([32,2,232,1010])