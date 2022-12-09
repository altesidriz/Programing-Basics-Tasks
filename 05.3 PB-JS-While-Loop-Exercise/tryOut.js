function walking(input) {
    let index = 0;

    let stepCounter = 0;

    while (input[index] !== "Going home") {
        stepCounter += Number(input[index]);
        index++;
    }

    index++;
    stepCounter += Number(input[index]);
    let diff = Math.abs(stepCounter - 10000);

    if (diff >= 0) {
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }
}
walking(["1500",
"3000",
"250",
"1548"])
