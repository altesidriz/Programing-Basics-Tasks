function skiTrip(input) {
    let day = Number(input[0]) - 1;
    let type = input[1];
    let rating = input[2];

    let roomPrice = 18.00;
    let apartPrice = 25.00;
    let presidentPrice = 35.00;
    let total = 0.00;

    switch (type) {
        case 'room for one person':
            total = roomPrice * day;
            break;
        case 'apartment':
            total = apartPrice * day;
            if (day < 10) {
                total = total - total * 0.30;
            } else if (day >= 10 && day < 15) {
                total = total - total * 0.35;
            } else {
                total = total - total * 0.5;
            }
            break;
        case 'president apartment':
            total = presidentPrice * day;
            if (day < 10) {
                total = total - total * 0.10;
            } else if (day >= 10 && day < 15) {
                total = total - total * 0.15;
            } else {
                total = total - total * 0.2;
            }
            break;
    }
    if (rating === 'positive') {
        total = total + total * 0.25;
    } else if (rating === 'negative') {
        total = total - total * 0.1
    }
    console.log(total.toFixed(2));
}
skiTrip(["2",
    "apartment",
    "positive"])


