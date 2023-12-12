/*
 Crie uma classe para representar carros.
 Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.
 Crie um método que dado a quantidade de kilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedioKm;

  constructor(marca, cor, gastoMedioKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioKm = gastoMedioKm;
  }

  calcularViagem(distanciaKm, precoCombustivel) {
    return distanciaKm * this.gastoMedioKm * precoCombustivel;
  }
}

(function () {
  const mercedez = new Carro("mercedez", "prata", 1 / 10);
  const uno = new Carro("fiat", "preto", 1 / 12);

  console.log(uno.calcularViagem(70, 5));
  console.log(mercedez.calcularViagem(70, 5));
})();
