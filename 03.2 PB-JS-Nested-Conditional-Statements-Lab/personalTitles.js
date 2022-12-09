function personalTitles(input) {
    let age = Number(input.shift());
    let gender = input.shift();
    let tittle = "";

    if (age >= 16 && gender === "m") {
        tittle = "Mr.";
    } else if (age >= 0 && age < 16 && gender === "m") {
        tittle = "Master";
    }
    if (age >= 16 && gender === "f") {
        tittle = "Ms.";
    } else if (age >= 0 && age < 16 && gender === "f") {
        tittle = "Miss";
    }
    console.log(tittle);

    //     let age = Number(input[0]);
    //     let sex = input[1];
    //     let tittle = "";

    //     switch (sex) {
    //         case "m":
    //             if (age >= 16) {
    //                 tittle = "Mr.";
    //             } else if (age >= 0 && age < 16) {
    //                 tittle = "Master"
    //             }
    //             console.log(tittle);
    //         break;
    //         case "f":
    //             if (age >= 16) {
    //                 tittle = "Ms.";
    //             } else if (age >= 0 && age < 16) {
    //                 tittle = "Miss"
    //             }
    //             console.log(tittle);
    //         break;
    // }
}
personalTitles(["20", "f"])