  var botaoAdicionar = document.getElementById("adicionarmais1");
  var botaoSubtrair = document.getElementById("adicionarmenos1");
  var botaoAdicionar2 = document.getElementById("adicionarmais2");
  var botaoSubtrair2 = document.getElementById("adicionarmenos2");

  var botaoconfirmar = document.getElementById("botao");
  var botaoconfirmar2 = document.getElementById("botao2");

  var carrinhodisplay = document.getElementById("carrinhodisplay");
  var carrinhorodape = document.getElementById("carrinhorodape");

  var valor = document.getElementById("valor");
  var valor2 = document.getElementById("valor2");
  var res = window.document.getElementById("res");
  var resultado = window.document.getElementById("resultado");
  var finalizar = document.getElementById("finalizar");
  var compra = document.getElementById("compra");

  var containerr = document.getElementById("containerr");
  var containerr2 = document.getElementById("containerr2");

  var valorinstant = valor.value;
  var valorinstant2 = valor2.value;

  botaoAdicionar.addEventListener("click", () => {
    let valorAtual = parseInt(valor.value);
    let valorAtual2 = parseInt(valor2.value);
    let valorResultado = valorAtual + valorAtual2;
    valor.value = valorAtual + 1;
    valorinstant = valor.value;

    let gelo1 = 1.99;
    let gelo2 = 4.99;
    let resultadogelo = valorinstant * gelo1;
    let resultadogelo2 = valorinstant2 * gelo2;
    let final = resultadogelo + resultadogelo2;
    let finalformatado = final.toFixed(2);

    containerr.innerHTML = `

<td><img style="max-width:60px" src="img/miniatura.png"></td>
<td><strong>Gelo 1KG</strong></td>
<td>${valorinstant}</td>
<td>R$${resultadogelo.toFixed(2)}</td>

`;
    carrinhodisplay.style.display = "block";

    carrinhorodape.innerText = `Você adicionou ${
      valorResultado + 1
    } iten(s) ao seu carrinho!`;
  });

  botaoSubtrair.addEventListener("click", () => {
    let valorAtual = parseInt(valor.value);
    let valorAtual2 = parseInt(valor2.value);
    let valorResultado = valorAtual + valorAtual2;

    let gelo1 = 1.99;

    if (valorinstant > 0) {
      valor.value = valorAtual - 1;

      valorinstant = valor.value;
      resultadogelo = valorinstant * gelo1;

      containerr.innerHTML = `

<td><img style="max-width:60px" src="img/miniatura.png"></td>
<td><strong>Gelo 1KG</strong></td>
<td>${valorinstant}</td>
<td>R$${resultadogelo.toFixed(2)}</td>

`;
      carrinhodisplay.style.display = "block";

      carrinhorodape.innerText = `Você adicionou ${
        valorResultado - 1
      } iten(s) ao seu carrinho!`;
    }

    // Garante que o valor não seja menor que zero
    else if (valorAtual == 0) {
      resultadogelo = 0;
      containerr.innerHTML = "";
    }
  });

  botaoAdicionar2.addEventListener("click", () => {
    let valorAtual = parseInt(valor.value);
    let valorAtual2 = parseInt(valor2.value);
    let valorResultado = valorAtual + valorAtual2;
    valor2.value = valorAtual2 + 1;
    valorinstant2 = valor2.value;

    let gelo1 = 1.99;
    let gelo2 = 4.99;
    let resultadogelo = valorinstant * gelo1;
    let resultadogelo2 = valorinstant2 * gelo2;
    let final = resultadogelo + resultadogelo2;
    let finalformatado = final.toFixed(2);

    containerr2.innerHTML = `

<td><img style="max-width:60px" src="img/miniatura.png"></td>
<td><strong>Gelo 3KG</strong></td>
<td>${valorinstant2}</td>
<td>R$${resultadogelo2.toFixed(2)}</td>

`;
    carrinhodisplay.style.display = "block";

    carrinhorodape.innerText = `Você adicionou ${
      valorResultado + 1
    } iten(s) ao seu carrinho!`;
  });

  botaoSubtrair2.addEventListener("click", () => {
    let valorAtual = parseInt(valor.value);
    let valorAtual2 = parseInt(valor2.value);
    let valorResultado = valorAtual + valorAtual2;

    let gelo2 = 4.99;

    //    let final = resultadogelo + resultadogelo2
    if (valorinstant2 > 0) {
      valor2.value = valorAtual2 - 1;

      valorinstant2 = valor2.value;
      resultadogelo2 = valorinstant2 * gelo2;

      containerr2.innerHTML = `

<td><img style="max-width:60px" src="img/miniatura.png"></td>
<td><strong>Gelo 3KG</strong></td>
<td>${valorinstant2}</td>
<td>R$${resultadogelo2.toFixed(2)}</td>

`;
      carrinhodisplay.style.display = "block";

      carrinhorodape.innerText = `Você adicionou ${
        valorResultado - 1
      } iten(s) ao seu carrinho!`;
    }

    // Garante que o valor não seja menor que zero
    else if (valorAtual2 == 0) {
      resultadogelo = 0;
      containerr2.innerHTML = "";
    }
  });

  botaoconfirmar.addEventListener("click", () => {
    let valorAtual = parseInt(valor.value);
    let valorAtual2 = parseInt(valor2.value);

    // let final = resultadogelo + resultadogelo2
    // let finalformatado = final.toFixed(2)

    if (valorAtual > 0 || valorAtual2 > 0) {
      let valorResultado = valorAtual + valorAtual2;

      let gelo1 = 1.99;
      let gelo2 = 4.99;
      let resultadogelo = valorAtual * gelo1;
      let resultadogelo2 = valorAtual2 * gelo2;

      containerr.innerHTML = `

        <td><img style="max-width:60px" src="img/miniatura.png"></td>
        <td><strong>Gelo 1KG</strong></td>
        <td>${valorAtual}</td>
        <td>R$${resultadogelo.toFixed(2)}</td>
        
        `;

      carrinhodisplay.style.display = "block";

      carrinhorodape.innerText = `Você adicionou + ${valorAtual} iten(s) ao seu carrinho!`;
      //  res.innerText = `${valorResultado} Unidades`;
      //   resultado.innerText = `R$ ${finalformatado}`;
    } else {
      containerr.innerHTML = "";
      carrinhodisplay.style.display = "none";
    }
  });

  botaoconfirmar2.addEventListener("click", () => {
    let valorAtual = parseInt(valor.value);
    let valorAtual2 = parseInt(valor2.value);

    // let final = resultadogelo + resultadogelo2
    // let finalformatado = final.toFixed(2)

    if (valorAtual > 0 || valorAtual2 > 0) {
      let valorResultado = valorAtual + valorAtual2;

      let gelo1 = 1.99;
      let gelo2 = 4.99;
      let resultadogelo = valorAtual * gelo1;
      let resultadogelo2 = valorAtual2 * gelo2;

      containerr2.innerHTML = `

        <td><img style="max-width:60px" src="img/miniatura.png"></td>
        <td><strong>Gelo 3KG</strong></td>
        <td>${valorAtual2}</td>
        <td>R$${resultadogelo2.toFixed(2)}</td>
        
        `;

      carrinhodisplay.style.display = "block";

      carrinhorodape.innerText = `Você adicionou + ${valorAtual2} iten(s) ao seu carrinho!`;
      //  res.innerText = `${valorResultado} Unidades`;
      //   resultado.innerText = `R$ ${finalformatado}`;
    } else {
      containerr2.innerHTML = "";
      carrinhodisplay.style.display = "none";
    }
  });

  let produtos = document.getElementById("sumir");
  let produtos2 = document.getElementById("sumir2");
  let produtos3 = document.getElementById("sumir3");
  let produtos4 = document.getElementById("sumir4");
  let produtos5 = document.getElementById("aparecer");

  finalizar.addEventListener("click", function () {
    let valorAtual = parseInt(valor.value);
    let valorAtual2 = parseInt(valor2.value);
    if (
      (valorAtual == 0 && valorAtual2 == 0) ||
      valorAtual < 0 ||
      valorAtual2 < 0
    ) {
      carrinhodisplay.style.display = "block";

      carrinhorodape.innerText = `Adicione um item ao carrinho para continuar!`;
    } else {
      produtos.style.display = "none";
      produtos2.style.display = "none";
      produtos3.style.display = "none";
      produtos4.style.display = "none";
      produtos5.style.display = "block";
    }
  });

  compra.addEventListener("click", function () {
    let aviso = document.getElementById("aviso");
    let mensagemsucesso = document.getElementById("mensagemsucesso");
    let agradecimento = document.getElementById("agradecimento");
    let nome = document.getElementById("nome");

    let valorAtual = parseInt(valor.value);
    let valorAtual2 = parseInt(valor2.value);

    const gelo1 = 1.99;
    const gelo2 = 4.99;

    let resultadogelo = valorAtual * gelo1;
    let resultadogelo2 = valorAtual2 * gelo2;
    let final = resultadogelo + resultadogelo2;
    let finalformatado = final.toFixed(2);

    const linkbase = "https://wa.me//5555991018742?text=";

    if (nome.value == "") {
      aviso.style.textAlign = "center";
      aviso.style.color = "red";
      aviso.innerText = "Por favor, digite um nome valido!";
    } else if (valorAtual > 0 && valorAtual2 > 0) {
      carrinhodisplay.style.display = "none";
      produtos5.style.display = "none";
      var imagem = document.createElement("img");
      imagem.src = "img/agradecer.jpg";
      imagem.style.maxWidth = "100%";
      imagem.style.margin = "5px";
      mensagemsucesso.appendChild(imagem);
      //agradecimento.style.fontSize = "22px"
      // agradecimento.style.textAlign = "center"
      //agradecimento.style.color = 'blue';
      // agradecimento.innerText = `Agradecemos o seu pedido ${nome.value}`
      setTimeout(function () {
        window.location.href =
          linkbase +
          "Olá%20me%20chamo%20" +
          nome.value +
          ".%20Quero%20comprar%20" +
          valorAtual +
          "%20pacote(s)%20de%20gelo%20de%201kg%20e%20também%20quero%20comprar%20" +
          valorAtual2 +
          "%20pacote(s)%20de%20gelo%20de%203kg.%20-----%20Total%20a%20pagar%20R$" +
          finalformatado;
      }, 3000); // 5000 milissegundos = 5 segundos
      valor.value = 0;
      valor2.value = 0;
    } else if (valorAtual > 0) {
      carrinhodisplay.style.display = "none";
      produtos5.style.display = "none";
      var imagem = document.createElement("img");
      imagem.src = "img/agradecer.jpg";
      imagem.style.maxWidth = "100%";
      imagem.style.margin = "5px";
      mensagemsucesso.appendChild(imagem);
      //  agradecimento.style.fontSize = "22px"
      // agradecimento.style.textAlign = "center"
      //agradecimento.style.color = 'blue';
      // agradecimento.innerText = `Agradecemos o seu pedido ${nome.value}`
      setTimeout(function () {
        window.location.href =
          linkbase +
          "Olá%20me%20chamo%20" +
          nome.value +
          ".%20Quero%20comprar%20" +
          valorAtual +
          "%20pacote(s)%20de%20gelo%20de%201kg.%20-----%20Total%20a%20pagar%20R$" +
          finalformatado;
      }, 3000); // 5000 milissegundos = 5 segundos
      valor.value = 0;
      valor2.value = 0;
    } else if (valorAtual2 > 0) {
      carrinhodisplay.style.display = "none";
      produtos5.style.display = "none";
      var imagem = document.createElement("img");
      imagem.src = "img/agradecer.jpg";
      imagem.style.maxWidth = "100%";
      imagem.style.margin = "5px";
      mensagemsucesso.appendChild(imagem);
      //agradecimento.style.fontSize = "22px"
      //agradecimento.style.textAlign = "center"
      //agradecimento.style.color = 'blue';
      //agradecimento.innerText = `Agradecemos o seu pedido ${nome.value}`
      setTimeout(function () {
        window.location.href =
          linkbase +
          "Olá%20me%20chamo%20" +
          nome.value +
          ".%20Quero%20comprar%20" +
          valorAtual2 +
          "%20pacote(s)%20de%20gelo%20de%203kg.%20-----%20Total%20a%20pagar%20R$" +
          finalformatado;
      }, 3000); // 5000 milissegundos = 5 segundos
      valor.value = 0;
      valor2.value = 0;
    }
  });
  