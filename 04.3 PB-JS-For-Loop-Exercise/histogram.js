function histogram(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 0 ; i < n ; i++){
        let number = Number(input[index]);
        index++;
      if(number < 200){
          p1Counter ++;
      }else if(number >= 200 && number < 400){
          p2Counter++;
      }else if (number >= 400 && number < 600){
          p3Counter++;
      }else if(number >= 600 && number < 800){
          p4Counter++;
      }else{
          p5Counter++;
      }
    }
    p1 = p1Counter/n*100;
    p2 = p2Counter/n*100;
    p3 = p3Counter/n*100;
    p4 = p4Counter/n*100;
    p5 = p5Counter/n*100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
histogram(["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"])
