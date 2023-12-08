/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;
*/

let precoEtanol = 4.75;
let precoGasolina = 3.5;
let tipoCombustivel = "etanol";
let KmPorLitro = 6;
let DistanciaKm = 978;

let gastoTotal;

if (tipoCombustivel === "etanol") {
  gastoTotal = (DistanciaKm / KmPorLitro) * precoEtanol;
} else {
  gastoTotal = (DistanciaKm / KmPorLitro) * precoGasolina;
}

console.log(gastoTotal.toFixed(2));
