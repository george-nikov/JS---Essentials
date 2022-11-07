function evenPowers(input) {
    
    let n = input[0];
    let num = 1;

    for (let i = n/2; i <=n; i++) {
        console.log(num);
        num = num * 2 * 2;
    }
}
evenPowers(['10'])
