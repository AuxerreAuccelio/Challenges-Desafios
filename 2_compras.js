// --- Sistema de compras ---
// O objetivo deste código é simular um sistema de compras simples, onde o usuário pode aplicar um desconto em um produto e atualizar o estoque.
// Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.

// Foi atribuido um number à variável preco, foi passado um objeto na função e foi retirado o tipo string do "um" e passado o tipo number 1
const produto = {
  nome: "Teclado Gamer",
  preco: 200.0,
  estoque: 10.0,
};

// Desconto em porcentagem
function aplicarDesconto(valor) {
  valor = valor * 0.8;
  return valor;
}

const precoFinal = aplicarDesconto(produto.preco);

produto.estoque = produto.estoque - 1;

console.log("Produto: " + produto.nome);
console.log("Preço com desconto: " + precoFinal);
console.log("Estoque atual: " + produto.estoque);



