// Crie um programa que dado um número imprima a sua tabuada
(function () {
  const numero = 4;

  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " X " + i + " = " + resultado);
  }
})();
