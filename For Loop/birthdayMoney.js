function birthdayMoney (input) {

    let age = Number(input[0]);
    let machinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toyCounter = 0; 
    let total = 0;
    let counter = 0;
    
    let sum = 0; 

    for (let index = 1; index <= age; index++) {
        
        if (index % 2 == 0) {
            sum += 10;
            total += sum;
            counter ++;
        }
        else{
            toyCounter ++;
        }
    }

    let toysMoney = toyCounter * toyPrice;
    let brother = counter * 1;

    let final = total + toysMoney - brother;

    if (final >= machinePrice) {
        console.log(`Yes! ${(final - machinePrice).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(machinePrice - final).toFixed(2)}`)
    }
}
birthdayMoney(['10'
,'170.00'
,'6'])
