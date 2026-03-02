// --- Conversor de Medidas de Fábrica ---

const mlPorLitro = 1000;
const estoqueBaixo = true;

const producaoDia = {
  lote1: 5000, // ml
  lote2: 2, // litros
};

function converterMlParaLitro(quantidadeMl) {
  const resultado = quantidadeMl / mlPorLitro;
  return resultado;
}

function converterLitroParaMl(quantidadeLitros) {
  const resultado = quantidadeLitros * mlPorLitro;
  return resultado;
}


const calculoLote1 = converterMlParaLitro(producaoDia.lote1);
const calculoLote2 = converterLitroParaMl(producaoDia.lote2);

if ((producaoDia.lote1 == 0)) {
  console.log("Atenção: Estoque zerado!");
}

if (estoqueBaixo == true){
  console.log("Estoque baixo!");
}

console.log("--- Relatório de Produção ---");
console.log("Lote 1 (5000ml em Litros): " + calculoLote1 + "L");
console.log("Lote 2 (2L em Mililitros): " + calculoLote2 + "ml");


