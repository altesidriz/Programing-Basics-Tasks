function repainting(input) {
    let nylon = Number(input[0]) + 2;
    let paint = Number(input[1]) + (Number(input[1]) * 0.1);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let priceNylon = nylon * 1.5;
    let pricePaint = paint * 14.50;
    let priceThinner = thinner * 5.00;

    let materialsCost = priceNylon + pricePaint + priceThinner + 0.4;
    let hourPayment = materialsCost * 0.3;
    let paymentCraftsman = hours * hourPayment;
    let moneyNeeded = paymentCraftsman + materialsCost;

    console.log(moneyNeeded);

}
repainting(["10", "11", "4", "8"]);
repainting(["5", "10", "10", "1"]);