function basketballEquipment(input) {

    let yearTax = Number(input[0]);

    let basketShoes = yearTax - yearTax * 0.4;
    let basketClothes = basketShoes - basketShoes * 0.2;
    let basketball = basketClothes / 4;
    let basketAccesories = basketball / 5;

    let moneyJessiNeed = yearTax + basketShoes + basketClothes + basketball + basketAccesories;

    console.log(moneyJessiNeed);

}
basketballEquipment(["550"])