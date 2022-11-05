function petShop (input) {

let dogsCount = Number(input[0]);
let othersCount = Number(input[1]);

let sum = (dogsCount * 2.50) + (othersCount * 4);
console.log(`${sum.toFixed(2)} lv.`);
}
petShop(['5','4'])
