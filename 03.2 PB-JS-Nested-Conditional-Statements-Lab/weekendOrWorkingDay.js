function weekendOrWorkingDay(input) {
    //let day = input[0];
    // if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
    //     console.log(`Working day`);
    // } else if (day === "Saturday" || day === "Sunday") {
    //     console.log(`Weekend`);
    // } else {
    //     console.log(`Error`)
    // }
    let day = input[0];

    switch (day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
    }
}
weekendOrWorkingDay(["Monday"])