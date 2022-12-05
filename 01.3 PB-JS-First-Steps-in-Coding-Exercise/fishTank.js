function fishTank(input) {

    let lenght = (Number(input[0])) * 0.1;
    let width = (Number(input[1])) * 0.1;
    let depth = (Number(input[2])) * 0.1;
    let unbusySpace = (100 - (Number(input[3]))) / 100;
    let capacityAquarium = lenght * width * depth; //0.0045
    let waterNeeded = capacityAquarium * unbusySpace;
    //let waterNeeded = capacityAquarium * (83%);

    console.log(waterNeeded); 

}

fishTank(["85", "75", "47", "17"])
fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
)