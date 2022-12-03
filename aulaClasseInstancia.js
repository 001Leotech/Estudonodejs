class pessoa {
    nome;
    peso;
    altura;


    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    descreva(){
        console.log(`nome: ${this.nome}, peso: ${this.peso}, altura: ${this.altura}`);
    }

    calcularImc(){
        return this.peso / (Math.pow(this.altura, 2));
    }
    
    classificarImc(){
        const imc = this.calcularImc()
        if (imc < 18.5) {
            
            return ('ABAIXO DO PESO! IMC:' + imc.toFixed(2));
        } else if (imc >= 18.5 && imc < 25) {
          return ('PESO IDEAL! IMC:' + imc.toFixed(2));
        
         } else if (imc >= 25 && imc < 30) {
           return ('ACIMA DO PESO! IMC:' + imc.toFixed(2));
           
         } else if (imc >= 30 && imc < 40) {
           return ('OBESIDADE! IMC:' + imc.toFixed(2));
        
         } else {
           return ('OBESIDADE MORBIDA! IMC:' + imc.toFixed(2));
         }
    }
}
    
const leo = new pessoa(`Leonardo`, 73, 1.73);
const tamires = new pessoa(`Tamires da Silva de Jesus`, 56, 1.53);
leo.descreva();
console.log(leo);
console.log(leo.classificarImc());
console.log(tamires);
tamires.descreva();
console.log(tamires.classificarImc());


