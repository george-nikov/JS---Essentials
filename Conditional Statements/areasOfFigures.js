function areasOfFigures (input) {

    let type = input[0];
   
    let area = 0;

    if (type == 'square'){
        let side = input[1];
        area = side * side;
    }
    else if (type == 'rectangle') {
        let a = input[1];
        let b = input[2];
        area = a * b;
    }
    else if (type == 'circle') {
        let radius = input[1];
        area = (Math.PI * (radius**2))
    }
    else if (type == 'triangle') {
        let side = input[1];
        let h = input[2];
        area = (side * h) / 2;
    }

console.log(area.toFixed(3));

}
areasOfFigures(['triangle','4.5','20'])
