function evenOdd (input) {

    let sumEven = 0;
    let sumOdd = 0;

    for (let index = 0; index <= input.length-1; index++) {
        current = Number(input[index]);
        if (current % 2 == 0) {
            sumEven += current;
        }
        else if (current % 2 !== 0) {
            sumOdd += current;
        }
    }
    let result = sumEven - sumOdd;

    console.log(result);
}
evenOdd(['1','2','3','4','5','6'])
