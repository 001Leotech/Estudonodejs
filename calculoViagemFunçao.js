
const viagem = {
    distanciaEmKM: 100,
    distanciaEmKM2: 150,
    valorCombustivel1: 3.99,
    valorCombustivel2: 4.99,
    consumoPorKm: 10
}


function calcularCombustivel(tipoCombustivel) {
    if (tipoCombustivel === 'etanol') {
        console.log(((viagem.distanciaEmKM / viagem.consumoPorKm) * viagem.valorCombustivel1).toFixed(2))

    } else {
        console.log(((viagem.distanciaEmKM / viagem.consumoPorKm) * viagem.valorCombustivel2).toFixed(2))
    }

};

calcularCombustivel('gasolina');