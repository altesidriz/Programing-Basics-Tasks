function lunchBreak(input) {
    let nameSerial = input[0];
    let episodeLenght = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchBreak = breakTime * 1/8;
    let restBreak = breakTime * 1/4;
    let usedTime = breakTime - (lunchBreak + restBreak);

    if (usedTime <= episodeLenght) {
        let diff = episodeLenght - usedTime;
        console.log(`You have enough time to watch ${nameSerial} and left with ${diff} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameSerial}, you need ${diff} more minutes.`);
    }
}
lunchBreak(["Teen Wolf","48","60"])
