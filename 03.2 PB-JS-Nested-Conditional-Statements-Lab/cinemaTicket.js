function cinemaTicket(args) {
    const day = args.shift();
    let price = 0;

    if (day === "Saturday" || day === "Sunday") {
        price = 16;
    } else if (day === "Wednesday" || day === "Thursday") {
        price = 14;
    } else {
        price = 12;
    }
    console.log(price);
}
cinemaTicket(['Thursday'])