function sumNumbers(input) {
    let num1 = Number(input[0]);
    let index = 1;
    let sum = 0;

    while (sum < num1) {
        let numCount = Number(input[index]);
        sum += numCount
        index++;
    }
    console.log(sum);
}
sumNumbers(["100",
    "10",
    "20",
    "30",
    "40",
    "10"])