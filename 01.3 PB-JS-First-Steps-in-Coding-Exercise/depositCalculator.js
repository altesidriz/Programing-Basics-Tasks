function depositCalculator(input){
    let deposit = Number(input[0]);
    let depositForMonth = Number(input[1]);
    let yearInterest = Number (input[2]);
    //Изчисляваме натрупаната лихва: 200 * 0.057 (5.7%) = 11.40
    let sumInterest = (yearInterest/100)*deposit;
    //Изчисляваме лихвата за 1 месец: 11.40 лв. / 12 месеца = 0.95 лв.
    let monthInterest = sumInterest/12;
    //Общата сума е: 200 лв. + 3 * 0.95 лв. = 202.85 лв.
    let finalSum = deposit + depositForMonth * monthInterest;
    
    console.log(finalSum);
    }
    
    depositCalculator(["200","3 ","5.7"]);
    depositCalculator(["2350","6","7"]);