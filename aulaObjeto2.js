const pessoa = {
    nome: 'leo',
    idade: 24,
    signo: 'aquario',

    descrever: function () {
        console.log(`meu nome é ${this.nome}, minha idade é ${this.idade}, e meu signo é ${this.signo}` );
    }
};

pessoa.descrever();
    
