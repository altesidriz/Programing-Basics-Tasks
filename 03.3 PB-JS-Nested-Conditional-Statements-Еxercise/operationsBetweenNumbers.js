function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let opr = input[2];
    let result = 0;

    switch (opr) {
        case '+':
            result = n1 + n2;
            if (result % 2 == 0) {
                console.log(`${n1} ${opr} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${opr} ${n2} = ${result} - odd`);
            }
            break;
        case '-':
            result = n1 - n2;
            if (result % 2 == 0) {
                console.log(`${n1} ${opr} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${opr} ${n2} = ${result} - odd`);
            }
            break;
        case '*':
            result = n1 * n2;
            if (result % 2 == 0) {
                console.log(`${n1} ${opr} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${opr} ${n2} = ${result} - odd`);
            }
            break;
        case '/':
            result = n1 / n2;
            if (n2 != 0) {
                console.log(`${n1} ${opr} ${n2} = ${result.toFixed(2)}`);
            } else {
                console.log(`Cannot divide ${n1} by zero`);
            }
            break;
        case '%':
            result = n1 % n2;
            if (n2 != 0) {
                console.log(`${n1} ${opr} ${n2} = ${result}`);
            } else {
                console.log(`Cannot divide ${n1} by zero`);
            }
            break;
    }
}
operationsBetweenNumbers(['1','2','*'])