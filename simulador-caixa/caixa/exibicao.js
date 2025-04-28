function exibirResultado(cédulas) {
    console.log('\nNotas entregues:');
    cédulas.forEach(item => {
      console.log(`${item.quantidade} nota(s) de R$ ${item.cédula}`);
    });
  }
  
  // Exporte a função exibirResultado
  module.exports = { exibirResultado };