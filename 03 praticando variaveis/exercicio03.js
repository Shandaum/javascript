/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


let precoNormal = 10.50;
let condicaoPagto = 1;

let precoFinal;
if (condicaoPagto === 1) {
    precoFinal = precoNormal - (precoNormal * 0.10);
} else if (condicaoPagto === 2) {
    precoFinal = precoNormal - (precoNormal * 0.15);     
}else if (condicaoPagto === 3) {
    precoFinal = precoNormal;
} else {
    precoFinal = precoNormal + (precoNormal * 0.10);    
}

console.log('O preo final do produto é de R$'+precoFinal);