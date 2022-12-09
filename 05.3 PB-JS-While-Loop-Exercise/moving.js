function moving(input) {
    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let height = Number(input[2]);
    let index = 3;
    let command = input[index];
    index++;

    let sizeOfApartment = width * lenght * height;
    let sumBoxes = 0;
    let isHaveSpace = false;
    let diff = 0;

    while (command !== "Done") {
        let amounOfBoxes = Number(command);
        sumBoxes += amounOfBoxes;

        if (sumBoxes > sizeOfApartment) {
            diff = sumBoxes - sizeOfApartment;
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            isHaveSpace = true;
            break;
        }
        command = input[index];
        index++;
    }
    diff = Math.abs(sumBoxes - sizeOfApartment);
    if (!isHaveSpace) {
        console.log(`${diff} Cubic meters left.`);
    }
}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

