function steps(input) {
    let index = 0;
    let totalSteps = 0;

    while(totalSteps <= 10000){

        if(input[index] === 'Going home'){
            totalSteps += Number(input[index + 1]);
            break;
        }

        totalSteps += Number(input[index]);

        if(index === input.length - 1){
           break;
        }

        index++;

        
    }

    let diff = Math.abs(10000 - totalSteps);

    if(totalSteps >= 10000){
        console.log(`Goal reached! Good job!\n${diff} steps over the goal!`)
    }else{
        console.log(`${diff} more steps to reach goal.`)
    }
}
steps(["1215",
"2350",
"8000",
"3000",
"28",
"42"])



