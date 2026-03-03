// --- Conversor de Moedas ---
//  O objetivo deste código é simular um conversor de moedas simples, onde o usuário pode converter um valor em dólares para reais usando uma taxa de câmbio fixa.
// Identifique os erros presentes no código e corrija-os para que o conversor funcione corretamente.

//Foram redimensionados os blocos para melhor compreensão, também foi trocado o tipo da string na variável valor para um number, foi passado o transacao.valor para a chamada da função
//Foram atribuídos os valores lógicos true e false para a função e a taxaDolar foi atribuído como number
//Exclui um console.log ao emitir a mensagem pois estava sobrando no código

const transacao = {
  usuario: "Carlos",
  valor: 50.0,
  concluida: true,
};

const taxaDolar = 5.5;

function converterParaReal(valorDolar) {
  let resultado = valorDolar * taxaDolar;

  return resultado;
}

const valorFinal = converterParaReal(transacao.valor);

if (transacao.concluida == true /*"sim"*/) {
  console.log(
    "O valor convertido para " + transacao.usuario + " é: " + valorFinal,
  );
}
if (transacao.concluida == false /* "não" */) {
  console.log("Erro no processamento.");
}

