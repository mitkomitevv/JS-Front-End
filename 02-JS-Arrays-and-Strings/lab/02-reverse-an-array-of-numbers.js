function solve(num, arr) {
    // newArr = arr.slice(0, num).reverse()
    // console.log(newArr.join(' '))

    let newArr = [];

    for (i = 0; i < num; i++) {
        newArr.push(arr[i])
    }
    console.log(newArr.reverse().join(' '))
}
