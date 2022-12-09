function workingHours(args) {
    let hour = Number(args.shift());
    let day = args.shift();

    day === 'Sunday' ? console.log('closed') :
        (hour >= 10 && hour <= 18 ? console.log('open') : console.log('closed'))

    // if(day === 'Sunday'){
    //     console.log('closed');
    // }else{
    //     if () {
    //         console.log('open');
    //     }else{
    //         console.log('closed');
    //     }
    // }
}
workingHours(["19", "Wednesday"])