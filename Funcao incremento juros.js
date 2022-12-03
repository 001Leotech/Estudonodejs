


function calculoJuros(valor, juros){
    const valorMaisJuros = ((juros / 100) * valor);
    return valor + valorMaisJuros
}

console.log(calculoJuros(280, 27));