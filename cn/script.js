function somar() {
    var container = document.getElementById("container");
    var tn1 = window.document.getElementById('numero1')
    var tn2 = window.document.getElementById('numero2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} Gabi e ${n2} Gabi é igual a <span style="color: yellow;">${s}</span> <span style="color: #FF04E6;">Gabis</span>`
    var s = n1 + n2
    if (s <=10000) {
        for (var i = 1; i <= s; i++) {
            var imagem = document.createElement("img");
            imagem.src = "imagem.png";
            imagem.width= '160';
            imagem.style.margin = '5px';
            container.appendChild(imagem);
        }
    }else {
        container.innerHTML = `<span style="color: white;">A soma entre ${n1} Gabi é ${n2} Gabi ${s} é maior do que 1 milhão, ou seja é muita Gabi para um celular aguentar! </span><span style="color: red;">Desculpe.</span>`
    }


}
function limpar() {
    var imagens = document.querySelectorAll('#container img');
    var input1 = window.document.getElementById('numero1')
    var input2 = window.document.getElementById('numero2')
    input1.value = "";
    input2.value = "";
    res.innerHTML = `<span style="color: yellow;">Resultado</span>`;
    container.innerHTML = "";

    imagens.forEach(function(imagem) {
      imagem.remove();
    });
  }





