function hotelRoom(input) {
    let month = input[0];
    let overnight = Number(input[1]);
    let apartPrice = 0;
    let studioPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            apartPrice = 65;
            studioPrice = 50;
            break;
        case 'June':
        case 'September':
            apartPrice = 68.70;
            studioPrice = 75.20;
            break;
        case 'July':
        case 'August':
            apartPrice = 77;
            studioPrice = 76;
            break;
    }

    let totalA = apartPrice * overnight;
    let totalS = studioPrice * overnight;

    if (overnight > 14) {
        totalA = totalA - totalA * 0.1;
        switch (month) {
            case 'May':
            case 'October':
                totalS = totalS - totalS * 0.3;
                break;
            case 'June':
            case 'September':
                totalS = totalS - totalS * 0.2;
                break;
        }
    } else if (overnight > 7) {
        switch (month) {
            case 'May':
            case 'October':
                totalS = totalS - totalS * 0.05;
        }
    }
    console.log(`Apartment: ${totalA.toFixed(2)} lv.`);
    console.log(`Studio: ${totalS.toFixed(2)} lv.`);
}
hotelRoom(["June", "5"])