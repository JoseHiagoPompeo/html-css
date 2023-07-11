// Função para calcular a massa do ouro
function calcularMassaOuro(largura, altura, comprimento) {
    // Supondo que a densidade do ouro é 19.3 g/cm³
    var densidadeOuro = 19.3; // g/cm³
    
    // Calcula o volume do ouro
    var volume = largura * altura * comprimento; // cm³
    
    // Calcula a massa do ouro usando a fórmula massa = densidade * volume
    var massaOuro = densidadeOuro * volume / 1000; // gramas
    
    return massaOuro;
  }
  
  // Solicita as medidas ao usuário em mmm
  var largura = 5;
  var altura = 0.5;
  var comprimento = 40;
  
  // Chama a função para calcular a massa do ouro
  var massaOuro = calcularMassaOuro(largura, altura, comprimento);
  
  // Exibe o resultado
  console.log("A massa do ouro é: " + massaOuro.toFixed(2) + " gramas.");
  