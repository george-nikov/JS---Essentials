function reverseString (input) {

let current;
let s = '';
    for (let index = input.length-1; index >= 0; index--) {
        current = input[index];
        s+= current + ' ';  
    }
    
    console.log(`${s}`);
}
reverseString(['a', 'b', 'c', 'd', 'e'])
