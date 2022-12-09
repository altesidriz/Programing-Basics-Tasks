function minNumber(input) {
    let amount = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;

    while(amount !== "Stop"){
        let number = Number(amount);
        if(number < min){
            min = number;
        }
        amount = input[index];
        index++;
    }
    console.log(min);
}
minNumber(["-10",
"20",
"-30",
"Stop"])
