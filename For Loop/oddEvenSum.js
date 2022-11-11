function oddEvenSum (input) {

    let total = 0;
    let even = 0;
    let odd = 0;
    let n = Number(input[0]);

    for (let index = 1; index <= (input.length-1); index++) {
        current = Number(input[index]);
        total += current;
        if (index % 2 == 0) {
            even += current;
        }
        else if (index % 2 !==0) {
            odd += current;
        }
    }
    if (even - odd == 0) {
        console.log(`Yes`);
        console.log(`Sum = ${even}`);
    }
    else {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(even - odd)}`);
    }
    
}
oddEvenSum(['4'
,'10'
,'50'
,'60'
,'20'])
