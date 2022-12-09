function multiplicationTable() {
    for (let x = 1; x <= 10; x++){
        for (let y = 1; y <= 10; y++){
            let plur = x*y;
            console.log(`${x} * ${y} = ${plur}`);
        }
    }
}
multiplicationTable()