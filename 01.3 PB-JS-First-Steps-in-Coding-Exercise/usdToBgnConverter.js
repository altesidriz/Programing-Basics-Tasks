function usdToBgn(input){
    let usd = 1.79549;
    let bgn = usd * Number(input[0]);
    console.log(bgn);
}

usdToBgn(["22"]);
usdToBgn(["100"]);
usdToBgn(["12.5"]);