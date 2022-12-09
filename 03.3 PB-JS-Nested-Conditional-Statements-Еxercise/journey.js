function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = '';
    let place = '';

    if (budget <= 100) {
        destination = 'Bulgaria';
        switch (season) {
            case 'summer':
                place = 'Camp';
                budget = budget * 0.3;
                break;
            case 'winter':
                place = 'Hotel';
                budget = budget * 0.7;
                break;
        }

    } else if (budget > 100 && budget <= 1000){
        destination = 'Balkans';
        switch (season) {
            case 'summer':
                place = 'Camp';
                budget = budget * 0.4;
                break;
            case 'winter':
                place = 'Hotel';
                budget = budget * 0.8;
                break;
        }
    }else{
        destination = 'Europe';
        budget = budget * 0.9;
        place = 'Hotel'
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budget.toFixed(2)}`);
}
journey(["1500", "summer"])