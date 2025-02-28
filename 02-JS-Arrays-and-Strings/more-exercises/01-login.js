function solve(arr) {
    let username = arr[0];
    let pass;

    for (let i = 1; i < arr.length; i++) {
        revPass = arr[i].split('').reverse().join('')

        if (username == revPass && i != 0) {
            console.log(`User ${username} logged in.`);
            break;
        } else if (i == 4) {
            console.log(`User ${username} blocked!`)
            break;
        }

        console.log("Incorrect password. Try again.")
    }
}

solve(['sunny','rainy','cloudy','sunny','not sunny'])