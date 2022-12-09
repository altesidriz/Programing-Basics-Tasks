function examPreparation(input) {
    let index = 0;
    let countNegativeGrade = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let currentNegaticeGrade = 0;
    let sumGrade = 0;
    let countProblems = 0;
    let lastName = ""; 
    let isNeedBreak = false;


    while (command !== "Enough") {
        let problemName = command;
        let grade = Number(input[index]);
        index++;

        lastName = problemName;
        countProblems++;
        sumGrade += grade;

        if (grade <= 4) {
            currentNegaticeGrade++;
        }
        if (currentNegaticeGrade === countNegativeGrade) {
            console.log(`You need a break, ${countNegativeGrade} poor grades.`);
            isNeedBreak = true;
            break;
        }

        command = input[index];
        index++;
    }

    if(!isNeedBreak){
    let avg = sumGrade/countProblems;
    console.log(`Average score: ${avg.toFixed(2)}`);
    console.log(`Number of problems: ${countProblems}`);
    console.log(`Last problem: ${lastName}`);
    }
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
