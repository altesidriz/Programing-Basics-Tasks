function coins(input) {
    let moneyInLv = Number(input[0]);
    let money = Math.floor(moneyInLv * 100);
    let coinsCounter = 0;

    while (money > 0) {
        if (money >= 200) {
            money -= 200;
            coinsCounter++;
        } else if (money >= 100) {
            money -= 100;
            coinsCounter++;
        } else if (money >= 50) {
            money -= 50;
            coinsCounter++;
        } else if (money >= 20) {
            money -= 20;
            coinsCounter++;
        } else if (money >= 10) {
            money -= 10;
            coinsCounter++;
        } else if (money >= 5) {
            money -= 5;
            coinsCounter++;
        } else if (money >= 2) {
            money -= 2;
            coinsCounter++;
        } else {
            money -= 1;
            coinsCounter++;
        }
    }
    console.log(coinsCounter);
}
coins(["0.56"])