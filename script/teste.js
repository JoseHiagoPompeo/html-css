// Função para calcular a massa do ouro
function calcularMassaOuro(largura, altura, comprimento) {
    // Supondo que a densidade do ouro é 19.3 g/cm³
    var densidadeOuro = 19.3; // g/cm³
    
    // Calcula o volume do ouro
    var volume = largura * altura * comprimento; // cm³
    
    // Calcula a massa do ouro usando a fórmula massa = densidade * volume
    var massaOuro = densidadeOuro * volume; // gramas
    
    return massaOuro;
  }
  
  // Solicita as medidas ao usuário
  var largura = 50 / 10;
  var altura = 1.5 /10;
  var comprimento = 50 / 10;
  
  // Chama a função para calcular a massa do ouro
  var massaOuro = calcularMassaOuro(largura, altura, comprimento);
  
  // Exibe o resultado
  console.log("A massa do ouro é: " + massaOuro.toFixed(2) + " gramas.");
  