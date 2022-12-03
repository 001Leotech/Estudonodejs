class pessoa {
    nome;
    idade;
    telefone;
    endereco;
    anodeNascimento;

    constructor (nome, idade, telefone, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
        this.endereco = endereco;
        this.anodeNascimento = 2022 - idade;                                                  
    }

    descrever() {
        console.log(`nome do cliente: ${this.nome} /  idade do cliente: ${this.idade}  /  telefone do cliente: ${this.telefone}  / 
        endereço do client: ${this.endereco}  /  ano de nascimento do cliente: ${this.anodeNascimento}`);
    }
}

const leonardo = new pessoa('leonardo', 24, 11945486552, 'rua seis, 39, sitio são francisco GRU-SP');
const aninha = new pessoa('aninha', 30, 11975452213, 'rua da arara, 1500, GRU-SP');

leonardo.descrever();
console.log(leonardo);
aninha.descrever();
console.log(aninha);


function compararIdade(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}
compararIdade(leonardo, aninha)