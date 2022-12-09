function cake(input) {
   let lenghtCake = Number(input[0]);
   let widthCake = Number(input[1]);
   let sizeOfCake = lenghtCake * widthCake;
   let index = 2;
   let command = input[index];
   index++;

   let piecesLeft = 0;
   let ifHaveCake = true;

   while (command !== "STOP") {
      let currentPieces = Number(command);
      sizeOfCake -= currentPieces;
      piecesLeft = Math.abs(sizeOfCake);

      if (sizeOfCake < 0) {
         console.log(`No more cake left! You need ${piecesLeft} pieces more.`);
         ifHaveCake = false;
         break;
      }
      command = input[index];
      index++;
   }
   if (ifHaveCake) {
      console.log(`${piecesLeft} pieces are left.`);
   }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

