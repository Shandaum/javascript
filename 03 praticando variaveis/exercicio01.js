/* 1) Faca um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passo de semestre;

*/

let nota1 = 4;
let nota2 = 5;
let nota3 = 5;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log(media + ' - O aluno está reprovado!');
} else if (media >= 5 && media <= 7) {
    console.log(media + ' - O aluno está de recuperação!');
} else {    
    console.log(media + ' - O aluno está aprovado!');
}       

