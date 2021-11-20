//1 Užduotis
function multiply(num1, num2) {
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        console.log("Įveskite skaičių.")
    }
    else{
        console.log(num1 * num2)
    }
}
multiply(4,8)
//2 Užduotis
const selectedNumber = 10;
switch (selectedNumber) {
    case 1:
        console.log('Skaičius žemas');
        break;
    case 2:
        console.log('Skaičius žemas');
        break;
    case 3:
        console.log('Skaičius žemas');
        break;
    case 4:
        console.log('Skaičius žemas');
        break;
    case 5:
        console.log('Skaičius vidutinis');
        break;
    case 6:
        console.log('Skaičius vidutinis');
        break;
    case 7:
        console.log('Skaičius aukščiau vidurkio');
        break;
    case 8:
        console.log('Skaičius aukštas');
        break;
    case 9:
        console.log('Skaičius aukštas');
        break;
    case 10:
        console.log('Skaičius aukštas');
        break;
}

if(selectedNumber <= 4){
    console.log('Skaičius žemas');
}else if(selectedNumber >= 5 && selectedNumber < 7){
    console.log('Skačius vidutinis');
}else if(selectedNumber === 7){
    console.log('skaičius aukščiau vidurkio');
}else {
    console.log('Skaičius aukštas')
}