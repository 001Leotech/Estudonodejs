
//  IMC EM ADULTOS CONDIÇÃO:

// - ABAIXO DE 18.5 = ABAIXO DO PESO;
// - ENTRE 18.5 E 25 = PESO NORMAL;
// - ENTRE 25 E 30 = ACIMA DO PESO;
// - ENTRE 30 E 40 = OBESO;
// - ACIMA DE 40 = OBESIDADE GRAVE;


const peso = 73
const altura = 1.73

const imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log('ABAIXO DO PESO! IMC:', imc.toFixed(2));

 } else if (imc >= 18.5 && imc < 25) {
   console.log('PESO IDEAL! IMC:', imc.toFixed(2));

 } else if (imc >= 25 && imc < 30) {
   console.log('ACIMA DO PESO! IMC:', imc.toFixed(2));
   
 } else if (imc >= 30 && imc < 40) {
   console.log('OBESIDADE! IMC:', imc.toFixed(2));

 } else 
   console.log('OBESIDADE MORBIDA! IMC:', imc.toFixed(2));
