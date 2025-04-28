const entrada = require('./caixa/entrada');
const calculo = require('./caixa/calculo');
const exibicao = require('./caixa/exibicao');

function iniciarCaixa() {
  const valor = entrada.solicitarValor();      // Solicita o valor
  const cédulas = calculo.calcularCédulas(valor);  // Calcula as cédulas
  exibicao.exibirResultado(cédulas);          // Exibe o resultado
}

iniciarCaixa();
