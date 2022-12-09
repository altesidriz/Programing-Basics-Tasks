function sumSeconds(input) {
    let firstFinish = Number(input[0]);
    let secondFinish = Number(input[1]);
    let thirdFinish = Number(input[2]);

    let sumSecond = firstFinish + secondFinish + thirdFinish;
    let minutes = Math.floor(sumSecond / 60);
    let seconds = sumSecond % 60;

    if (seconds < 10) {
        console.log(minutes + ":0" + seconds);
    } else {
        console.log(minutes + ":" + seconds);
    }
}
sumSeconds(["14", "12", "10"]);
sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);