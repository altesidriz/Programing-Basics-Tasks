function maxNumber(input) {
    let amount = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;

    while(amount !== "Stop"){
        let number = Number(amount);
        if(number > max){
            max = number;
        }
        amount = input[index];
        index++;
    }
    console.log(max);
}
maxNumber(["23","10","5","Stop"])