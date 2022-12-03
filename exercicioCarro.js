class carro {
    marca;
    cor;
    gastoMedioDeComb;

        constructor (marca, cor, gastoMedioDeComb){
            this.marca = marca;
            this.cor = cor;
            this.gastoMedioDeComb = gastoMedioDeComb;
        }
       

    descrever() {
        console.log(`marca do carro ${this.marca},  cor do carro ${this.cor}, gasto médio com Litro ${this.gastoMedioDeComb}`);
    }
}

const prisma = new carro('chevrolet', 'branco', 12);
const uno = new carro('fiat', 'preto', 10);

console.log(prisma);
prisma.descrever()
console.log(uno);
uno.descrever()

function compararConsumo(c1, c2){
        if (c1.gastoMedioDeComb < c2.gastoMedioDeComb){
        console.log(`${c1.marca} é mais economico que ${c2.marca}`);
        } else if (c2.gastoMedioDeComb < c1.gastoMedioDeComb){
            console.log(`${c2.marca} é mais economico que ${c1.marca}`);
        } else {
            console.log(`os dois carros tem o mesmo consumo`);
        }

        }

    compararConsumo(prisma, uno)    

function calculoPercurso(distanciaKM, carro, precodoCombustivel){
    console.log("O gasto médio é: ");
    console.log(((distanciaKM / carro.gastoMedioDeComb) * precodoCombustivel).toFixed(2));

}
        
calculoPercurso(200, prisma, 3.99)
