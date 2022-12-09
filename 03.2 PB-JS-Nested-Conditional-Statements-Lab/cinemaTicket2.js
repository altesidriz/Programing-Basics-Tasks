function cinemaTicket2(args) {
    let day = args.shift();
    let price = 0;

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Friday':
            price = 12;
            break;
        case 'Wednesday':
        case 'Thursday':
            price = 14;
            break;
        default:
            price = 16;
    }

    console.log(price)
}
cinemaTicket2(['Friday'])