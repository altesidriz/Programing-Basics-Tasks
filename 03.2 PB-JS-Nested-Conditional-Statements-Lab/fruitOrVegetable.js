function fruitOrVegetable(input) {
    let fruit = input[0];
    let vegetable = input[1];

    switch (fruit) {//:  banana, apple, kiwi, cherry, lemon и grapes
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
            console.log('fruit');
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');        
    }
}
fruitOrVegetable(["lemon"])