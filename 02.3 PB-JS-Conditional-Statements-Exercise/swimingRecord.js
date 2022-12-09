function swimingRecord(input) {

    let recordInSeconds = Number(input[0]);
    let distance = Number(input[1]);
    let secondsForOneMeter = Number(input[2]);

    let timeForSwiming = distance * secondsForOneMeter;
    let distanceWithDelay = Math.floor(distance / 15) * 12.5;
    let totalSecond = timeForSwiming + distanceWithDelay;

    if (totalSecond >= recordInSeconds) {
        diff = totalSecond - recordInSeconds;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    } else if (recordInSeconds > totalSecond) {
        console.log(`Yes, he succeeded! The new world record is ${totalSecond.toFixed(2)} seconds.`);
    }
}
swimingRecord(["55555.67", "3017", "5.03"]);
swimingRecord(["10464","1500","20"]);