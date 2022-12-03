function escreverNome(nome) {
    return nome;
}


function verificarIdade(idade) {
    if (idade >= 18){
       return 'maior'
    } else {
        return 'menor'
    }

}



console.log(escreverNome('leo é ') + verificarIdade(19)); 