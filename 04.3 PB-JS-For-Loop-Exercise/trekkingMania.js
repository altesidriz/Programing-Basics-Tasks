function trekkingMania(input) {
    index = 0;
    let groupClimbers = Number(input[index]);
    index++;

    let totalParticipants = 0;
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;

    for (i = 0; i < groupClimbers; i++) {
        let numberOfParticipants = Number(input[index]);
        index++;

        if (numberOfParticipants <= 5) {
            totalParticipants += numberOfParticipants;
            group1 += numberOfParticipants;
        } else if (numberOfParticipants >= 6 && numberOfParticipants <= 12) {
            totalParticipants += numberOfParticipants;
            group2 += numberOfParticipants;
        } else if (numberOfParticipants >= 13 && numberOfParticipants <= 25) {
            totalParticipants += numberOfParticipants;
            group3 += numberOfParticipants;
        } else if (numberOfParticipants >= 26 && numberOfParticipants <= 40) {
            totalParticipants += numberOfParticipants;
            group4 += numberOfParticipants
        } else {
            totalParticipants += numberOfParticipants;
            group5 += numberOfParticipants;
        }
    }

    let prec1 = group1 / totalParticipants * 100;
    let prec2 = group2 / totalParticipants * 100;
    let prec3 = group3 / totalParticipants * 100;
    let prec4 = group4 / totalParticipants * 100;
    let prec5 = group5 / totalParticipants * 100;

    console.log(`${prec1.toFixed(2)}%\n${prec2.toFixed(2)}%\n${prec3.toFixed(2)}%\n${prec4.toFixed(2)}%\n${prec5.toFixed(2)}%`);

}
trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])

