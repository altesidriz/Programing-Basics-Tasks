function cinema(input) {
    let type = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);
    let money = 0.00;

    switch (type) {
        case 'Premiere':
            money = row * column * 12;
            break;
        case 'Normal':
            money = row * column * 7.5;
            break;
        case 'Discount':
            money = row * column * 5;
            break;
        default:
            break;
    } console.log(`${money.toFixed(2)} leva`);
}
cinema (["Discount",
"12",
"30"])

