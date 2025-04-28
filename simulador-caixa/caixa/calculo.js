function calcularCédulas(valor) {
    const cédulasDisponíveis = [100, 50, 20, 10, 5, 2, 1];  // Valores das cédulas
    const cédulasEntregues = [];
  
    // Loop para calcular quantas cédulas de cada valor são necessárias
    for (let i = 0; i < cédulasDisponíveis.length; i++) {
      const cédula = cédulasDisponíveis[i];
      const quantidade = Math.floor(valor / cédula);  // Divisão inteira
  
      if (quantidade > 0) {
        cédulasEntregues.push({ cédula, quantidade });
        valor -= quantidade * cédula;  // Atualiza o valor restante
      }
    }
  
    return cédulasEntregues;
  }
  
  module.exports = { calcularCédulas };
  