// Função para calcular a massa do ouro
function calcularMassaOuro() {

  var largura = window.document.getElementById('ilargura')
  var altura = window.document.getElementById('ialtura')
  var comprimento = window.document.getElementById('icomprimento')
  var res = window.document.getElementById('res')

  var n1 = Number(largura.value)
  var n2 = Number(altura.value)
  var n3 = Number(comprimento.value)

    // Supondo que a densidade do ouro é 19.3 g/cm³
    var densidadeOuro = 19.3; // g/cm³
    
    // Calcula o volume do ouro
    var volume = n1 * n2 * n3; // cm³
    
    // Calcula a massa do ouro usando a fórmula massa = densidade * volume
    var massaOuro = densidadeOuro * volume / 1000; // gramas
    res.innerHTML = (massaOuro.toFixed(2) + " g");
  }
