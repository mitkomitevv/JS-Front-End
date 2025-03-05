function solve(num) {
    let counter = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            counter += i;
        }
    }

    if (num === counter) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
