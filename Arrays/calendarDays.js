function dayOfWeek (input){

    let day = Number(input);
    let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    
    if (input >= 1 && input <= 7) {
        console.log(days[day-1]);
    }
    else {
        console.log('Invalid day!');
    }

}
dayOfWeek(['1'])
