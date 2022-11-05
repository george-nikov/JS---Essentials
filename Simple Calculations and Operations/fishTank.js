function fishTank (input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let capacity = length * width * height;
    let totalLitres = capacity * 0.001;
    let percentage = percent * 0.01;

    let finalLitres = totalLitres * (1-percentage);

    console.log(finalLitres.toFixed(3))
}
fishTank(['85','75','47','17'])
