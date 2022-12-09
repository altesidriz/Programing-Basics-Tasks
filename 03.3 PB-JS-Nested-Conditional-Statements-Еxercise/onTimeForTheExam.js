function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let examTime = examHour * 60 + examMin;
    let arrivalTime = arrivalHour * 60 + arrivalMin;
    let onTime = Math.abs(arrivalTime - examTime);
    if (arrivalTime > examTime) {
        console.log('Late');
        let diff = arrivalTime - examTime;
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (h == 0 && m < 60) {
            console.log(`${m} minutes after the start`);
        } else if (m < 10) {
            console.log(`${h}:0${m} hours after the start`);
        } else {
            console.log(`${h}:${m} hours after the start`);
        }
    } else if (arrivalTime == examTime || onTime <= 30) {
        if (onTime == 0) {
            console.log('On time');
        }else{
            console.log('On time');
            console.log(`${onTime} minutes before the start`);
        }
    } else if (arrivalTime < examTime || onTime >30) {
        console.log('Early');
        let diff = Math.abs(arrivalTime - examTime);
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (h == 0 && m < 60) {
            console.log(`${m} minutes before the start`);
        } else if (m < 10) {
            console.log(`${h}:0${m} hours before the start`);
        } else {
            console.log(`${h}:${m} hours before the start`);
        }
    }
}
onTimeForTheExam(["9",
    "00",
    "8",
    "30"])


