// --- Sistema de média de alunos ---
// O objetivo deste código é calcular a média de um aluno com base em suas notas e determinar se ele foi aprovado ou reprovado.
// Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.

const nomeAluno = "Mariana";
const nota1 = 8;
const nota2 = 20;

//As condições lógicas foram colocadas dentro do bloco da função juntamente com o status e passadas as variáveis para o escopo da função
function calcularMedia(nota1, nota2) {
  let media = (nota1 + nota2) / 2;

  if (media >= 7) {
    const status = "Aprovado";
    console.log("O aluno " + nomeAluno + " está: " + status);
  } else {
    const status = "Reprovado";
    console.log("O aluno " + nomeAluno + " está: " + status);
  }
}

calcularMedia(nota1, nota2);
