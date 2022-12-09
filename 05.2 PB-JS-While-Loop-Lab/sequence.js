function sequence(input) {
    let number = Number(input[0]);
    let sequence = 1;

    while (sequence <= number) {
        console.log(sequence);
        sequence *=2;
        sequence++;
    }
}
sequence(["31"])