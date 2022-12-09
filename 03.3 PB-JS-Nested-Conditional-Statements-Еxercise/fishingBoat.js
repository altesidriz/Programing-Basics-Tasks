function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherMan = input[2];
    let price = 0.00;

    switch (season) {
        case 'Spring':
            price = 3000;
            if (fisherMan <= 6) {
                price = price * 0.9;
            } else if (fisherMan >= 7 && fisherMan <= 11) {
                price = price * 0.85;
            } else {
                price = price * 0.75;
            } break;
        case 'Summer':
        case 'Autumn':
            price = 4200;
            if (fisherMan <= 6) {
                price = price * 0.9;
            } else if (fisherMan >= 7 && fisherMan <= 11) {
                price = price * 0.85;
            } else {
                price = price * 0.75;
            } break;
        case 'Winter':
            price = 2600;
            if (fisherMan <= 6) {
                price = price * 0.9;
            } else if (fisherMan >= 7 && fisherMan <= 11) {
                price = price * 0.85;
            } else {
                price = price * 0.75;
            } break;
    }
    if (season !== 'Autumn' && fisherMan % 2 == 0) {
        price = price * 0.95
    }
    let diff = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}
fishingBoat(["2000",
"Winter",
"13"])


