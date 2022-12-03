// -1- À vista debito = 10 % de desconto; 
// -2- À vista dinheiro ou pix = 15 % de desconto;
// -3- Em duas vezes = preço normal;
// -4- Acima de duas vezes  = 10 % de juros

const formaDePagamento = '3';
const produto = 29;

if (formaDePagamento === '1') {
    console.log(produto - (produto * 0.1));
} else if (formaDePagamento === '2') {
    console.log(produto - (produto * 0.15));
} else if (formaDePagamento === '3') {
    console.log(produto);
} else if ( formaDePagamento === '4') {
    console.log(produto + (produto  * 0.1));
}
