function workingHours(args) {
    let hour = Number(args.shift());
    let day = args.shift();

    if (hour >= 10 && hour <= 18) {
        if (day != "Sunday") {
            console.log("open");
        } else if (day === "Sunday") {
            console.log("closed");
        }
    } else {
        console.log("closed");
    }
}
workingHours(["15","Sgtrfty"])