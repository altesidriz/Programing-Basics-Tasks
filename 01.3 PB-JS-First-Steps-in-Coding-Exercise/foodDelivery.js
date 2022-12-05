function foodDelivery(input) {
    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let veganMenuCount = Number(input[2]);

    let chickenMenu = chickenMenuCount * 10.35;
    let fishMenu = fishMenuCount * 12.40;
    let veganMenu = veganMenuCount * 8.15;
    let menuPrice = chickenMenu + fishMenu + veganMenu;
    let desertAndDelivery = menuPrice * 0.2 + 2.5;
    let chingChing = menuPrice + desertAndDelivery;

    console.log(chingChing);
}
foodDelivery(["2","4","3"]);
foodDelivery(["9","2","6"]);