
const gasolina = 5.79;
const etanol = 3.65;
const gastoMedioPorKm = 10;
const distanciaEmKM = 100;
const tipoCombustivel = 'gasolina';

const litrosConsumidos = distanciaEmKM / gastoMedioPorKm;

if (tipoCombustivel === 'etanol') {
    const valorGasto = litrosConsumidos * etanol;
     console.log(valorGasto);   
}
    else if (tipoCombustivel === 'gasolina') {
        const valorGasto = litrosConsumidos * gasolina;
        console.log(valorGasto);
    }
