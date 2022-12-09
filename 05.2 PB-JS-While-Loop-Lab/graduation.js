function graduation(input) {
    let name = input[0];
    let grades = 1;
    let sum = 0;
    let excluded = 0;
    let index = 0;
    let ifPass = false;

    while (grades <= 12) {
        index++;
        let grade = Number(input[index]);
        if (grade < 4.00) {
            excluded++;
            if (excluded > 1) {
                console.log(`${name} has been excluded at ${grades} grade`);
                ifPass = true;
                break;
            }
            continue;
        }
        sum += grade;
        grades++;
    }
    if (!ifPass) {
        let avarage = sum / 12;
        console.log(`${name} graduated. Average grade: ${avarage.toFixed(2)}`);
    }
}
graduation(["Gosho",
    "5",
    "6",
    "5",
    "6",
    "5",
    "2",
    "2",
    "6",
    "5", "5", "5", "5"])
