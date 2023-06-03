function fizzBuzzNaive(number) {
    if (number % 5 == 0) {
        if (number % 3 == 0) {
            return "FizzBuzz";
        } else {
            return "Buzz";
        }
    } else if (number % 3 == 0) {
        return "Fizz";
    } else {
        return number;
    }
}

function fizzBuzzStringConcat(number) {
    let resultString = "";
    if (number % 3 == 0) {
        resultString += "Fizz";
    }
    if (number % 5 == 0) {
        resultString += "Buzz";
    }

    if (resultString.length == 0) {
        return number;
    } else {
        return resultString;
    }
}

function fizzBuzzSwitchCase(number) {
    let resultCase = 0
    if (number % 3 == 0) {
        resultCase += 1;
    }
    if (number % 5 == 0) {
        resultCase += 2;
    }
    switch (resultCase) {
        case 1:
            return "Fizz";
        case 2:
            return "Buzz";
        case 3:
            return "FizzBuzz";
        default:
            return number;
    }
}