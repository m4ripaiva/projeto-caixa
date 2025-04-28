const readlineSync = require('readline-sync');

function solicitarValor() {
  let valor;
  
  do {
    valor = parseInt(readlineSync.question('Digite o valor que deseja sacar: R$ '), 10);
    if (valor <= 0 || isNaN(valor)) {
      console.log('Por favor, insira um valor válido maior que zero.');
    }
  } while (valor <= 0 || isNaN(valor));

  return valor;
}

module.exports = { solicitarValor };