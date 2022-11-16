function repeatString (input) {

    let text = input[0];
    let num = Number(input[1]);

    let result = '';

    for (let index = 0; index < num; index++) {
        result += text;
    }
    console.log(result);
}
repeatString(['String','2'])
