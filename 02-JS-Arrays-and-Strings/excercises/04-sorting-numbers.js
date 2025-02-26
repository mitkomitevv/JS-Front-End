function solve(arr) {
    let newArr = [];
    arr.sort((a, b) => a - b);
    
    while (arr.length > 0) {
        newArr.push(arr.shift(), arr.pop());
    }
    
    return newArr
}
