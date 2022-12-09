function vacation(input) {
    index = 0;
    let moneyNeed = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;
    let spendCounter = 0;
    let dayCounter = 0;
    let isPossibleSave = true;

    while(moneyNeed > money){
        let action = input[index];
        index++;
        let tempMoney = Number(input[index]);
        index++
        dayCounter++;
        if(action === "save"){
            money += tempMoney;
            spendCounter = 0;
        }else{
            money -= tempMoney;
            spendCounter++;
            if(money <0){
                money = 0;
            }
        }
        if (spendCounter === 5){
            console.log(`You can't save the money.\n${dayCounter}`);
            isPossibleSave = false;
            break;
        }
    }
    if(isPossibleSave){
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
