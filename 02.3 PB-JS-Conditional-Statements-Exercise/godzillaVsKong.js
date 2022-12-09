function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statistics = Number(input[1]);
    let clothesPrice = Number(input[2]);
    let decor = budget * 0.1;

    if (statistics > 150) {
        clothesPrice = clothesPrice * 0.9;
    }

    let neededMoney = clothesPrice * statistics + decor;
    let diff = Math.abs(budget - neededMoney);

    if (neededMoney > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else if (neededMoney <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["20000", "120", "55.5"])
godzillaVsKong(["15437.62", "186", "57.99"])
godzillaVsKong(["9587.88", "222", "55.68"])
