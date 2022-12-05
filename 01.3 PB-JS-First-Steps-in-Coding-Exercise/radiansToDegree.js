function converter(input){
    let radian = (input[0]);
    let degree = (radian * 180) / Math.PI;

    console.log(degree);
}

converter(["3.1416"]); 
