function validatePassword(password) {
    let isValid = true;
    let errors = [];

    if (password.length < 6 || password.length > 10) {
        isValid = false;
        errors.push("Password must be between 6 and 10 characters");
    }

    for (let char of password) {
        let charCode = char.charCodeAt(0);

        if (!(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
            isValid = false;
            errors.push("Password must consist only of letters and digits");
            break;
        }
    }

    let digitCount = 0;
    for (let char of password) {
        let charCode = char.charCodeAt(0);
        if (charCode >= 48 && charCode <= 57) {
            digitCount++;
        }
    }

    if (digitCount < 2) {
        isValid = false;
        errors.push("Password must have at least 2 digits");
    }


    if (isValid) {
        console.log("Password is valid");
    } else {
        console.log(errors.join('\n'))
    }
}

validatePassword('Pa$s$s')