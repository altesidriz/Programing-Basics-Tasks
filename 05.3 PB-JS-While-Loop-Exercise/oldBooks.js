function oldBooks(input) {
    let bookName = input[0];
    index = 1;

    let bookIsFound = false;
    let nextBookName = input[index];

    while(bookName !== "NoMoreBoks"){
     if(nextBookName===bookName){
         bookIsFound = true;
         break;
     }
     index++
     nextBookName = input[index];
    }
    if(bookIsFound === false){
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    }else{
        console.log(`You checked ${index - 1} books and found it.`);
    }
}
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])
