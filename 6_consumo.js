// --- Calculadora de Consumo de Combustível ---

//Alterei os tipos dos atributos diesel e distancia para number, coloquei o console.log(mensagem); dentro do escopo da condição e alterei a variável custoTotal para resultadoGasolina
// pois os valores são os mesmos após a atribuição

const precos = {
  gasolina: 5.8,
  alcool: 5.79,
  diesel: 6.2,
};

const viagem = {
  destino: "Litoral",
  distancia: 200,
  veiculo: "Corsa",
};

function calcularGasto(distancia, consumoKml, tipoCombustivel) {
  let precoUnitario = tipoCombustivel;

  let litrosNecessarios = distancia / consumoKml;

  let custoTotal = litrosNecessarios * precoUnitario;

  return custoTotal;
}

const resultadoGasolina = calcularGasto(viagem.distancia, 10, precos.gasolina);

console.log("Viagem para: " + viagem.destino);
console.log(
  "Custo estimado no Diesel: R$ " +
    calcularGasto(200, 15, precos.diesel).toFixed(2),
);
console.log(
  "Custo estimado na Gasolina: R$ " +
    resultadoGasolina.toFixed(2) /* custoTotal */,
);

if (precos.alcool <= precos.gasolina * 0.7 /* 4 */) {
  const mensagem = "O álcool está compensando!";
  console.log(mensagem);
}


