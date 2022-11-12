function sumEven (input) {

    let sum = 0;

    for (let index = 0; index <= input.length; index++) {
        current = Number(input[index]);
        if (current % 2 == 0) {
            sum += current;
        }
    }
console.log(sum);
}
sumEven(['1','2','3','4','5','6'])
