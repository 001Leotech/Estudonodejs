const entradas = [5, 14, 152, 78, 97];
let i = 0



function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}


function print (texto) {
    console.log(texto);
}


module.exports = { gets, print };