function tennisRanklist(input) {
    let index = 0;
    let countTournament = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;

    let points = 0;
    let totalPoints = startPoints;
    let avgPoint = 0;
    let winCount = 0;
    let winPrecentage = 0;

    for (let i = 1; i <= countTournament; i++) {
        let typeOfWin = input[index];
        index++;
        if (typeOfWin === 'W') {
            winCount++;
            winPrecentage = (winCount/countTournament)*100;
            points = 2000;
            totalPoints += points;
            avgPoint += points
        } else if (typeOfWin === 'F') {
            points = 1200;
            totalPoints += points;
            avgPoint += points
        } else if (typeOfWin === 'SF') {
            points = 720;
            totalPoints += points;
            avgPoint += points
        }
    }
    let avg = avgPoint/countTournament;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(avg)} `);
    console.log(winPrecentage.toFixed(2)+"%");
}
tennisRanklist(["7","1200","SF","F","W","F","W","SF","W"])
