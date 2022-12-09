function areaOfFigures(input) {
    let figure = input[0];
    let result = 0;

    if (figure === "square") {
        let side = Number(input[1]);
        result = side * side;
    } else if (figure === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        result = sideA * sideB;
    } else if (figure === "circle") {
        let radius = Number(input[1]);
        result = Math.PI * Math.pow(radius, 2);
    } else if (figure === "triangle") {
        let sideA = Number(input[1]);
        let heightToA = Number(input[2]);
        result = (sideA * heightToA) / 2;
    }
    console.log(result.toFixed(3));
}
areaOfFigures((["square", "5"]))