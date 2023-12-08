let numero = 611;

let numeroPar = (numero % 2) === 0;
/*
% operador para resto
== compara os valores
=== compara os valores e o tipo de variável
! operador de negação
nome variável booleana geralmente começa com is, isNumeroPar
*/

if (numero === 0) {
    console.log('Número inválido');
}else if (numeroPar) {
    console.log('É par!');
}else{
    console.log('É impar!');
}

