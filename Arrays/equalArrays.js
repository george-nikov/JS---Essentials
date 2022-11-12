function equalArrays (input1, input2) {

    let flag;
    let sum = 0;
    let counter = 0;

    for (let index1 = 0; index1 <= input1.length-1; index1++) {
        current1 = Number(input1[index1]);
        sum += current1;
    }

    for (let index2 = 0; index2 <= input2.length-1; index2++) {
        current2 = Number(input2[index2]);
        
    }
    for (let index3 = 0; index3 <= (input1.length-1); index3++) {
        current1 = Number(input1[index3]);
        current2 = Number(input2[index3]);
        counter ++;
        if (current1 !== current2) {
            flag = false;
            break;
        }
        else {
            flag = true;
        }
    }
    if (flag) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
    else{
        console.log(`Arrays are not identical. Found difference at ${counter-1} index`);
    }
}
equalArrays(['1'], ['10'])
