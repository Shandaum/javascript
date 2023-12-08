/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;
*/

let precoGasolina = 3.50;
let KmPorLitro = 6;
let DistanciaKm = 978;


let gastoTotal = (DistanciaKm / KmPorLitro) * precoGasolina;


console.log(gastoTotal.toFixed(2));//toFixed transforma em texto, o número 2 são as casas decimais