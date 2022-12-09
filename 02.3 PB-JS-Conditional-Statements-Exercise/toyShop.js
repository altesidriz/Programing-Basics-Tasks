function toyShop(input) {

    let excursionPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let puzzlePrice = 2.60;
    let dollPrice = 3.00;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2.00;

    let totalCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
    let totalPrice = puzzlePrice * puzzleCount + dollPrice * dollCount + bearPrice * bearCount
        + minionPrice * minionCount + truckPrice * truckCount;

    if (totalCount >= 50) {
        totalPrice = totalPrice - totalPrice * 0.25;
    }
    totalPrice = totalPrice - totalPrice * 0.10;

    if (excursionPrice <= totalPrice) {
        diff = Math.abs(totalPrice - excursionPrice);
        console.log('Yes!' + ' ' + diff.toFixed(2) + ' ' + 'lv left.');
    } else if (totalPrice < excursionPrice) {
        diff = Math.abs(totalPrice - excursionPrice);
        console.log("Not enough money!" + " " + diff.toFixed(2) + " " + "lv needed.")
    }

}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"])
