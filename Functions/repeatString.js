function repeatString (input) {

    let text = input[0];
    let n = Number(input[1]);

    let result = '';

    for (let index = 0; index < n; index++) {
        result += text;
    }
    console.log(result);
}
repeatString(['String','2'])
