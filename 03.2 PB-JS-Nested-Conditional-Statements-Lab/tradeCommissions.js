function tradeCommissions(input) {
    let city = input[0];
    let sell = Number(input[1]);

    if (sell < 0) {
        console.log('error');
    } else {
        switch (city) {
            case "Sofia":
                if (sell >= 0 && sell <= 500) {
                    sell = sell * 0.05;
                } else if (sell > 500 && sell <= 1000) {
                    sell = sell * 0.07;
                } else if (sell > 1000 && sell <= 10000) {
                    sell = sell * 0.08;
                } else {
                    sell = sell * 0.12;
                }
                console.log(sell.toFixed(2));
                break;

            case "Varna":
                if (sell >= 0 && sell <= 500) {
                    sell = sell * 0.045;
                } else if (sell > 500 && sell <= 1000) {
                    sell = sell * 0.075;
                } else if (sell > 1000 && sell <= 10000) {
                    sell = sell * 0.10;
                } else {
                    sell = sell * 0.13;
                }
                console.log(sell.toFixed(2));
                break;

            case "Plovdiv":
                if (sell >= 0 && sell <= 500) {
                    sell = sell * 0.055;
                } else if (sell > 500 && sell <= 1000) {
                    sell = sell * 0.08;
                } else if (sell > 1000 && sell <= 10000) {
                    sell = sell * 0.12;
                } else {
                    sell = sell * 0.145;
                }
                console.log(sell.toFixed(2));
                break;

            default:
                console.log('error')
                break;
        }
    }
}
tradeCommissions(["kaspi", "-499.99"])