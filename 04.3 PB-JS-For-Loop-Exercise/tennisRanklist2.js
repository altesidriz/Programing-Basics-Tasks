function tennisRanklist(input) {
    let index = 0;
    let count = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let points = 0;
    let countWin = 0;

    for (let i = 0; i < count; i++) {
        let result = input[index];
        index++;

        switch (result) {
            case 'W':
                points += 2000;
                countWin++;
                break;
            case 'F':
                points += 1200;
                break;
            case 'SF':
                points += 720;
                break;
        }
    }
    let totalPoints = points+startPoints;
    let avgPoints =Math.floor(points/count);
    let winPrecentage = countWin/count*100;
    
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${avgPoints} `);
    console.log(winPrecentage.toFixed(2)+"%");
}
tennisRanklist (["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
