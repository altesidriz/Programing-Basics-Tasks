function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachine  = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let currentMoney = 10;
    let toyCounter = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += currentMoney;
            currentMoney += 10;
            money --;
        } else {
          toyCounter++;
        }
    }
    money += toyCounter * toyPrice;
    let diff = Math.abs(money - washingMachine);
    if (money >= washingMachine){
        console.log(`Yes! ${diff.toFixed(2)}`);
    }else{
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily(["10",
"170.00",
"6"])
