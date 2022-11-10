function sumOfNumbers (input) {

    let num = Number(input[0]);
    let current = 0;
    let sum = 0;

    for (let index = 1; index < input.length; index++) {
        current = Number(input[index]);
        sum += current;
    }
    console.log(sum);
}
sumOfNumbers(['2','10','20'])
