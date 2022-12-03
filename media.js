

// Média menor que 5 = reprovado
// Média entre 5 e 7 = recuperação
//Média acima de 7 = passou de semestre


const nota1 = 6;
const nota2 = 8;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Reprovado com nota', media.toFixed(2));
  }  else if (media >= 5, media <= 7) {
    console.log('Recuperação com nota ', media.toFixed(2));
} else {
    console.log('Aprovaado com nota ', media.toFixed(2));
}