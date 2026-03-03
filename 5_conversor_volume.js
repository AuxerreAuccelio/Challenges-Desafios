// --- Conversor de Medidas de Fábrica ---

//Alterei o tipo da variável mlPorLitro para number, atribui o valor de comparação igual na condição producaoDia.lote1 == 0,
//As operações matemáticas para alcançar o resultado correto das transformações foram também alteradas, sendo que inverteu a multiplicação pela divisão e a soma pela multiplicação

const producaoDia = {
  lote1: 5000, // ml
  lote2: 2, // litros
};

const mlPorLitro = 1000; /* "1000" */
const calculoLote1 = converterMlParaLitro(producaoDia.lote1);
const calculoLote2 = converterLitroParaMl(producaoDia.lote2);
const estoqueBaixo = true;

function converterMlParaLitro(quantidadeMl) {
  const resultado = quantidadeMl / mlPorLitro;

  return resultado;
}

function converterLitroParaMl(quantidadeLitros) {
  const resultado = quantidadeLitros * mlPorLitro;
  return resultado;
}

if (producaoDia.lote1 == 0) {
  console.log("Atenção: Estoque zerado!");
}

console.log("--- Relatório de Produção ---");
console.log("Lote 1 (5000ml em Litros): " + calculoLote1 + "L");
console.log("Lote 2 (2L em Mililitros): " + calculoLote2 + "ml");


