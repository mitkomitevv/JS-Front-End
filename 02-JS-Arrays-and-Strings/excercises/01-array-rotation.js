function rotateArray(arr, num) {
    let newArr = [];

    num = num % arr.length;
    newArr = arr.slice(num).concat(arr.slice(0, num));

    console.log(newArr.join(' '));
}