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
        console.log(`marca do carro ${this.marca},  cor do carro ${this.cor}, gasto médio por km ${this.gastoMedioDeComb}`);
    }

    calculoPercurso(distanciaKM, precodoCombustivel){
        return(((distanciaKM / this.gastoMedioDeComb) * precodoCombustivel).toFixed(2));
    
    }
}

const prisma = new carro('chevrolet', 'branco', 12);
const uno = new carro('fiat', 'preto', 10);
console.log(calculoPercurso(200, 3.99));

prisma.descrever()
console.log(uno);

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

 
        

