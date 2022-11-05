function yardGreening (input) {

    let squareMetres = Number(input[0]);

    let sum = squareMetres * 7.61;
    let discout = sum * 0.18;
    let total = sum - discout;
    
    console.log(`The final price is: ${total.toFixed(2)} lv.`);
    console.log(`The discount is: ${discout.toFixed(2)} lv.`);
}
yardGreening(['540'])
