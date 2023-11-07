//cart open close

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//OPEN cart

cartIcon.onclick = () => {
  cart.classList.add("active");
};

//close cart

closeCart.onclick = () => {
  cart.classList.remove("active");
};

//Making Add to cart
//cart working JS

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

//making function

function ready() {
  //remove item from cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  //quantity change
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  // ADD TO CART
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  loadCartItems();
}
//remove cart item
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
  saveCartItems();
  updateCartIcon();
}

//quantity change
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
  saveCartItems();
  updateCartIcon();
}

//add cart func
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
  saveCartItems();
  updateCartIcon();



}

function addProductToCart(title, price, productImg) {

  // FUNCAO PARA ADICIONAR EFEITO LEGAL QUANDO UM ITEM E COLOCADO NO CARRINHO
  let aviso = document.querySelector('.aviso')
  aviso.classList.add('ativaraviso')
  setTimeout(() => {
    aviso.classList.remove('ativaraviso')
 },1000);


  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("Você ja adicionou esse item ao carrinho");
      return;
    }
  }

  var cartBoxContent = `<img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" name="" id="" value="1" class="cart-quantity">
    </div>
    <i class="bx bx-trash-alt cart-remove"></i>`;





  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
  saveCartItems();
  updateCartIcon();
}

//update total

function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("R$ ", ""));
    var quantity = quantityElement.value;
    total += price * quantity;
  }
  //if price contain some cents
  //total = Math.round((total * 100) / 100);
  total = total.toFixed(2);
  document.getElementsByClassName("total-price")[0].innerText = "R$ " + total;
  //SAVE TOTAL TO LOCALSTORAGE
  localStorage.setItem("cartTotal", total);
}

//manter o item no carrinho quando a página for atualizada com armazenamento local

function saveCartItems() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var cartItems = [];

  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var titleElement = cartBox.getElementsByClassName("cart-product-title")[0];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var productImg = cartBox.getElementsByClassName("cart-img")[0].src;

    var item = {
      title: titleElement.innerText,
      price: priceElement.innerText,
      quantity: quantityElement.value,
      productImg: productImg,
    };

    cartItems.push(item);

  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

//LOADS IN CART

function loadCartItems() {
  var cartItems = localStorage.getItem("cartItems");
  if (cartItems) {
    cartItems = JSON.parse(cartItems);

    for (var i = 0; i < cartItems.length; i++) {
      var item = cartItems[i];
      addProductToCart(item.title, item.price, item.productImg);

      var cartBoxes = document.getElementsByClassName("cart-box");
      var cartBox = cartBoxes[cartBoxes.length - 1];
      var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
      quantityElement.value = item.quantity;
    }
  }
  var cartTotal = localStorage.getItem("cartTotal");
  if (cartTotal) {
    document.getElementsByClassName("total-price")[0].innerText =
      "R$ " + cartTotal;
  }
  updateCartIcon();
}

//QUANTYTY IN CART ICON

function updateCartIcon() {
  var cartBoxes = document.getElementsByClassName("cart-box");
  var quantity = 0;

  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    quantity += parseInt(quantityElement.value);
  }
  var cartIcon = document.querySelector("#cart-icon");
  cartIcon.setAttribute("data-quantity", quantity);
}


function clearCart(){
  var cartContent = document.getElementsByClassName('cart-content')[0];
  cartContent.innerHTML = ''
  updatetotal()
  localStorage.removeItem("cartItems")
}
















//FINALIZAR






const payBtn = document.querySelector(".btn-buy");
const linkbase = "https://wa.me//5555991018742?text=";
const total = document.querySelector('.total-price')




payBtn.addEventListener("click", () => {

  const resultado = total.innerText.replace(' ','')

  var cartItems = localStorage.getItem("cartItems");
  var texto = JSON.parse(cartItems);
  if (texto.length <= 0) {
    alert('erro')
  } else if (texto.length == 1) {
    
    var formatartitulo = texto[0].title.replace(/[,-]/g, '%20');
    var formatartitulofinal = formatartitulo.replace('UNIDADE','')
    var formatarpreco = texto[0].price.replace(" ","")

    window.location.href =linkbase+"QUERO%20FAZER%20PEDIDO%0A*%20"+texto[0].quantity+ "%20" + formatartitulofinal +"%20NO%20VALOR%20DE%20"+formatarpreco+"%0ATOTAL:%20%20"+resultado


  } else if (texto.length == 2){

    var formatartitulo = texto[0].title.replace(/[,-]/g, '%20');
    var formatartitulofinal = formatartitulo.replace('UNIDADE','')
    var formatarpreco = texto[0].price.replace(" ","")

    var formatartitulo2 = texto[1].title.replace(/[,-]/g, '%20');
    var formatartitulofinal2 = formatartitulo2.replace('UNIDADE','')
    var formatarpreco2 = texto[1].price.replace(" ","")

    window.location.href =linkbase+"QUERO%20FAZER%20PEDIDO%0A*%20"+texto[0].quantity+ "%20" + formatartitulofinal +"%20NO%20VALOR%20DE%20"+formatarpreco+"%0A*%20"+ texto[1].quantity+ "%20" + formatartitulofinal2+"%20NO%20VALOR%20DE%20"+formatarpreco2+"%0ATOTAL:%20%20"+resultado
  } else if (texto.length == 3) {

    var formatartitulo = texto[0].title.replace(/[,-]/g, '%20');
    var formatartitulofinal = formatartitulo.replace('UNIDADE','')
    var formatarpreco = texto[0].price.replace(" ","")

    var formatartitulo2 = texto[1].title.replace(/[,-]/g, '%20');
    var formatartitulofinal2 = formatartitulo2.replace('UNIDADE','')
    var formatarpreco2 = texto[1].price.replace(" ","")

    var formatartitulo3 = texto[2].title.replace(/[,-]/g, '%20');
    var formatartitulofinal3 = formatartitulo3.replace('UNIDADE','')
    var formatarpreco3 = texto[2].price.replace(" ","")





    window.location.href =linkbase+"QUERO%20FAZER%20PEDIDO%0A*%20"+texto[0].quantity+ "%20" + formatartitulofinal +"%20NO%20VALOR%20DE%20"+formatarpreco+"%0A*%20"+ texto[1].quantity+ "%0A*%20" + formatartitulofinal2+"%20NO%20VALOR%20DE%20"+formatarpreco2+"%0A*%20"+ texto[2].quantity+ "%0A*%20" + formatartitulofinal3+"%20NO%20VALOR%20DE%20"+formatarpreco3+"%0ATOTAL:%20%20"+resultado

  }

  
}

);