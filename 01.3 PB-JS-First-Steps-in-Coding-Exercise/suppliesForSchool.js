// suppliesForSchool
function suppliesForSchool(input) {
    let pencil = Number(input[0]);
    let marker = Number(input[1]);
    let aceton = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let sumPencil = 5.80 * pencil;
    let sumMarker = 7.20 * marker;
    let sumAceton = 1.20 * aceton;
    let finalSum = sumPencil + sumMarker + sumAceton;
    let discountForSale = finalSum * discount;
    let price = finalSum - discountForSale;

    console.log(price);
}
suppliesForSchool(["2", "3", "4", "25"]);
suppliesForSchool(["4", "2", "5", "13"]);