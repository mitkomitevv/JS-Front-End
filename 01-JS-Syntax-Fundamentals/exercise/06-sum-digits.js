function sumDigits(num) {
    let sum = 0;

    // asString = String(num)
    // for (let i = 0; i < asString.length; i++) {
    //     sum += Number(asString[i])
    // }
    
    for (let n of String(num)) {
        sum += Number(n)
    }
    console.log(sum)
}
