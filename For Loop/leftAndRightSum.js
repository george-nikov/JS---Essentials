function sum (input) {

    let total = 0;
    let first = 0;
    let second = 0;
    let n = Number(input[0]);

    for (let index = 1; index <= (input.length-1); index++) {
        current = Number(input[index]);
        total += current;
        if (index == n) {
            first = total;
        }
        second = total - first;
    }
    if (first - second == 0) {
        console.log(`Yes, sum = ${first}`);
    }
    else {
        console.log(`No, diff = ${Math.abs(first - second)}`);
    }
    
}
sum(['2'
,'10'
,'90'
,'60'
,'40'])
