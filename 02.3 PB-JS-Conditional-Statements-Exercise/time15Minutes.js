function time15Minutes(input) {
    let h = Number(input[0]);
    let m = Number(input[1]);
    let time = h * 60 + m + 15;

    let hours = Math.floor(time / 60);
    let minutes = time % 60;

    if (hours === 24) {
        hours = 0;
        console.log(`${hours}:${minutes}`);
    }
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}
time15Minutes(["1", "46"])
time15Minutes(["0", "01"])
time15Minutes(["23", "59"])
time15Minutes(["11", "08"])
time15Minutes(["12", "49"])