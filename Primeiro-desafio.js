/*
Faça um programa para calcular o gasto de combustivel de uma viagem.

Você terá 3 variáveis. Sendo elas:
  1 - Preço do combustivel;
  2 - Gasto médio de combustivel do carro por KM;
  3 - Distancia em KM da viagem;

Imprima no console o valor gasto de combustivel para realizar esta viagem.
*/

const PrecoDoComb = 5.25;
const KMporLitros = 10;
let DistanciaEmKM = 360;

const LitrosGastos = DistanciaEmKM / KMporLitros;
const DinheiroGasto = LitrosGastos * PrecoDoComb;

console.log("foi gasto: ", DinheiroGasto.toFixed(2));

