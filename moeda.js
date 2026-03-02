// --- Conversor de Moedas ---
//  O objetivo deste código é simular um conversor de moedas simples, onde o usuário pode converter um valor em dólares para reais usando uma taxa de câmbio fixa. Identifique os erros presentes no código e corrija-os para que o conversor funcione corretamente.

const taxaDolar = 5.50;
const valorFinal = converterParaReal(10);

const transacao = {
  usuario: "Carlos",
  valor: 100.00,
  concluida: true,
};

function converterParaReal(valorDolar) {
  let resultado = valorDolar * taxaDolar;
  return resultado;
}

if (transacao.concluida == true) {
  console.log("O valor convertido para " + transacao.usuario + " é: " + valorFinal);
}

if (transacao.concluida == false) {
  console.log("Erro no processamento.");
}

//console.log("O valor convertido é de : R$ " + valorFinal);

