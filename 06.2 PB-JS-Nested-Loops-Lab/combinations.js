function combinations(input) {
    let n = Number(input[0]);
    let counter = 0;

    for (let x = 0; x <= n; x++) {
        for (let y = 0; y <= n; y++) {
            for (let z = 0; z <= n; z++) {
                let sumCombination = x + y + z;
                if (sumCombination === n) {
                    counter++;
                    continue;
                }
            }
        }
    }
    console.log(counter);
}
combinations(["5"])