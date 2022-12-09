function numberDividedToNine(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let res = "";

    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
            res += `${i}\n`;
        }
    }
    console.log("The sum: " + sum);
    console.log(res);
}
numberDividedToNine(["100", "200"])