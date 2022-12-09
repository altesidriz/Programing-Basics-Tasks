function accountBalance (input){
    let total = 0;
    let index = 0;

    while (true){
        let data = input[index];
        if(data === "NoMoreMoney"){
            break;
        }

        let currentIncrease = Number(data);
        if(currentIncrease < 0) {
            console.log("Invalid operation!");
            break;
        }

        total += currentIncrease
        console.log(`Increase: ${currentIncrease.toFixed(2)}`);
        index++;
    }

    console.log(`Total: ${total.toFixed(2)}`);
}