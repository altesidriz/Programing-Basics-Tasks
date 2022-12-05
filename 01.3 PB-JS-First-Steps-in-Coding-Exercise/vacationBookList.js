function depsositClaculator(input) {
    let pageInBook = Number(input[0]);
    let pagePerHour = Number(input[1]);
    let daysGiven = Number(input[2]);

    let hourNeeded = pageInBook / pagePerHour;
    let hourNeededForDays = hourNeeded / daysGiven;

    console.log(hourNeededForDays);
}

depsositClaculator(["212", "20", "2"]);
depsositClaculator(["432", "15", "4"]);
depsositClaculator(["600", "20", "7"]);