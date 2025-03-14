const input = require('readline-sync');

let password;
let isValid = false;

while (!isValid) {
    password = input.question("Please enter your password: ");

    isValid = true;

    if (password.length < 8) {
        console.log("Your password must be at least 8 characters long.");

        isValid = false;
    }

    let hasUpperCase = false;
    let hasNumber = false;

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') hasUpperCase = true;
        if (char >= '0' && char <= '9') hasNumber = true;
    }

    if (!hasUpperCase) {
        console.log("Password must contain at least one uppercase letter.");

        isValid = false;
    }

    if (!hasNumber) {
        console.log("Password must contain at least one number.");

        isValid = false;
    }

    if(isValid) {
        console.log("Your password is valid");
    }
}