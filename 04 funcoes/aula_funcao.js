function escrevaMeuNome(nome) {
  console.log("Meu nome é " + nome);
}

function verificarIdade(idade){
    if (idade >= 18){
        return "Maior de idade!";
    } else{
        return "Menor de idade!";
    }
}



(function () {
    let nome = 'Alexandre';
    escrevaMeuNome(nome);
    escrevaMeuNome('Veras');
    let idade = 26
    console.log(verificarIdade(idade));
    console.log(verificarIdade(13));
})();
