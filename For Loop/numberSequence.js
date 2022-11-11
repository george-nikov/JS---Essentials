function numberSequence (input) {

    let index = 0;
    let max = 0;
    let min = Number(input[0]);
    let current = input[index];

    for (let index = 0; index < input.length; index++) {
        current = Number(input[index]);

    if (max < current) {
        max = current;
    }
    if (current < min) {
        min = current;
    }
    }   

    console.log(`Max number: ${max}`);
    console.log(`Min number: ${min}`);
}
numberSequence(['0'
,'4'
,'20'
,'304'
,'1'
,'50'])
