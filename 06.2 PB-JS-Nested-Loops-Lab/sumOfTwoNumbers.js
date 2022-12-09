function sumOfTwoNumbers(input) {
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isFound = false;

    for (let x = numberOne; x <= numberTwo; x++) {
        for (let y = numberOne; y <= numberTwo; y++) {
            counter++;
            let combinationSum = x + y;

            if (combinationSum === magicNumber) {
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["88",
    "888",
    "2000"])




