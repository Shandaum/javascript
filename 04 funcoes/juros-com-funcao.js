function aplicarJuros(base, aliquota) {
  return base + base * (aliquota / 100);
}

function aplicarDesconto(base, aliquota) {
  return base - base * (aliquota / 100);
}

function verificarCondicaoPagto(condicaoPagto, precoNormal) {
  if (condicaoPagto === 1) {
    return aplicarDesconto(precoNormal, 10);
  } else if (condicaoPagto === 2) {
    return aplicarDesconto(precoNormal, 15);
  } else if (condicaoPagto === 3) {
    return precoNormal;
  } else {
    return aplicarJuros(precoNormal, 10);
  }
}

(function () {
  let precoNormal = 100;
  let condicaoPagto = 4;

  console.log("O preço final do produto é de R$" + verificarCondicaoPagto(condicaoPagto, precoNormal));
})();
