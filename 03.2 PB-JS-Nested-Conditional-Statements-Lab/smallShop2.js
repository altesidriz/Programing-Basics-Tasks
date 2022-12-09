function smallShop2(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let price = 0.00;

    switch (city) {
        case "Sofia":
            if (product === 'coffee') {
                price = 0.50
            } else if (product === 'water') {
                price = 0.80
            } else if (product === 'beer') {
                price = 1.20
            } else if (product === 'sweets') {
                price = 1.45
            } else if (product === 'peanuts') {
                price = 1.60
            }
            break;
        case "Plovdiv":
            if (product === 'coffee') {
                price = 0.40
            } else if (product === 'water') {
                price = 0.70
            } else if (product === 'beer') {
                price = 1.15
            } else if (product === 'sweets') {
                price = 1.30
            } else if (product === 'peanuts') {
                price = 1.50
            }
            break;
        case "Varna":
            if (product === 'coffee') {
                price = 0.45
            } else if (product === 'water') {
                price = 0.70
            } else if (product === 'beer') {
                price = 1.10
            } else if (product === 'sweets') {
                price = 1.35
            } else if (product === 'peanuts') {
                price = 1.55
            }
            break;
    }
    console.log(price * quantity)
}
smallShop2(['coffee', 'Varna', '2'])
smallShop2(['peanuts', 'Plovdiv', '1'])
smallShop2(['beer', 'Sofia', '2'])
smallShop2(['water', 'Plovdiv', '2'])
smallShop2(['sweets', 'Sofia', '2.23'])