function oscars(input) {
    let index = 0;
    let nameActor = input[index];
    index++
    let academyPoints = Number(input[index]);
    index++
    let numberOfVoters = Number(input[index]);
    index++;
    let points = academyPoints;

    for (let i = 1; i <= numberOfVoters; i++) {
        let nameOfVoter = input[index];
        index++;
        let pointsFromVoter = Number(input[index]);
        index++;
        points += nameOfVoter.length * pointsFromVoter / 2;
        if (points >= 1250.5) {
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }
    let diff = Math.abs(points - 1250.5);
    if (points < 1250.5) {
        console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

