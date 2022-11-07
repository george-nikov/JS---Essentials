function toysShop (input) {

let cost = Number(input[0]);

let puzzlesCount = Number(input[1]);
let dollsCount = Number(input[2]);
let bearsCount = Number(input[3]);
let minionsCount = Number(input[4]);
let trucksCount = Number(input[5]);

let totalCount = puzzlesCount + dollsCount + bearsCount + minionsCount +  trucksCount;

let total = (puzzlesCount * 2.60) + (dollsCount * 3) + (bearsCount * 4.10) + (minionsCount * 8.20) + (trucksCount * 2);

if (totalCount >= 50){
    total = total - (total * 0.25);
}
total = total - (total * 0.10);

let left = total - cost;

if (total >= cost) {
console.log(`Yes! ${left.toFixed(2)} lv left.`)
}
else{
console.log(`Not enough money! ${Math.abs(left).toFixed(2)} lv needed.`)
}

}
toysShop(['40.8',
'20',
'25',
'30',
'50',
'10'])
