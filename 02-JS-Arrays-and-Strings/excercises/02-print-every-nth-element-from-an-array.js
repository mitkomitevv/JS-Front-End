function solve(arr, num) {
    let result = [];

    for (i = 0; i < arr.length; i++) {
        if (i % num == 0) {
            result.push(arr[i])
        }
    }

    return result
}
