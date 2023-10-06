function menushow() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open");
      document.querySelector(".icon").src = "img/menu-open.svg";
    } else {
      menuMobile.classList.add("open");
      document.querySelector(".icon").src = "img/menu-closed.svg";
    }
  }

  let count = 1
  document.getElementById("radio1").checked = true;
  setInterval(function(){
      //função para passar imagens
      nextimage()
  },5000)

  function nextimage() {
      count ++;
      if (count > 4){
          count = 1
      }
  
  document.getElementById("radio"+count).checked = true;
}