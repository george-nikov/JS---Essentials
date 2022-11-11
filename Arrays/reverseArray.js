function reverseArray (input) {

    let n = Number(input[0]);
    let index = 1;
    let current = input[index];
    let s = '';
    
    for (let index = (n-1); index >= 0; index--) {
        ok = current[index];
        s+= ok + ' ';
    }
    console.log(s);
}
reverseArray([4,[-1,20,99,5]])
