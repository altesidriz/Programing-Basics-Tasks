function accountBalance(input){
    let index = 0;
    let balance = 0;
    
    while(input[index] !== "NoMoreMoney"){
        let money = Number(input[index]);
        balance += money
        console.log(`Increase: ${money.toFixed(2)}`);
        
        index++;
        
        if(input[index] < 0 ) {
            console.log('Invalid operation!');
            break;
        }        
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}
accountBalance(["120",
"45.55",
"-150", "15", "26"])
