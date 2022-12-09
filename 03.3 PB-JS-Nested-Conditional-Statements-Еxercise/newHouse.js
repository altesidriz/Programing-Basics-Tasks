function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    let result = 0;

    switch (flowerType) {
        case 'Roses':
            price = 5;
            if (flowerCount > 80) {
                price = price * 0.9;
            }
            break;
        case 'Dahlias':
            price = 3.80;
            if (flowerCount > 90) {
                price = price * 0.85;
            }
            break;
        case 'Tulips':
            price = 2.80;
            if (flowerCount > 80) {
                price = price * 0.85;
            }
            break;
        case 'Narcissus':
            price = 3;
            if (flowerCount < 120) {
                price = price * 1.15;
            }
            break;
        case 'Gladiolus':
            price = 2.50;
            if (flowerCount < 80) {
                price = price * 1.2;
            }
            break;
    }
    result = price * flowerCount;
    let diff = Math.abs(budget - result);

    if (budget >= result) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }

}
newHouse(["Narcissus",
"119",
"360"])

