function solve(nums) {
    for (let num of nums) {
        let numToString = num.toString()

        console.log(numToString == numToString.split('').reverse().join(''));
    }
}
