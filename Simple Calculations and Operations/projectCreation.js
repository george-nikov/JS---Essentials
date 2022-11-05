function projectCreation (input) {

let name = input[0];
let projectsCount = input[1];

let hoursNeeded = projectsCount * 3;
console.log(`The architect ${name} will need ${hoursNeeded} hours to complete ${projectsCount} project/s.`)

}
projectCreation(['George','4'])
