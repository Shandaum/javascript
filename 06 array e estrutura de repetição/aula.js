//declarando array
const alunos = ["Alexandre", "Domingues", "Veras"];

//adicionando item
alunos.push("Teste");
//ou
alunos[4] = "Teste2";

//alterando item
alunos[1] = "Domingo";

//exibindo o array
console.log(alunos);

//Estrutura de repetição

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma = soma + notas[i];
}

const media = soma / notas.length;
console.log(media);

//teste basico for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//percorrer o for em uma string
const nome = "Alexandre Domingues Veras";
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}
