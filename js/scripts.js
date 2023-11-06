/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


function aceitarCookies() {
  document.getElementById("cookie-bar").style.display = "none";
  // Lógica para definir o cookie de aceitação
}

document.addEventListener("DOMContentLoaded", function() {
  var cookieBar = document.getElementById("cookie-bar");
  var acceptButton = cookieBar.querySelector("#accept-button");

  acceptButton.addEventListener("click", aceitarCookies);
});



function alternarResposta(id) {
  var respostaElement = document.getElementById(id);
  var perguntaElement = respostaElement.previousElementSibling;

  if (respostaElement.style.display === "block") {
    respostaElement.style.display = "none";
    perguntaElement.classList.remove("aberta");
    perguntaElement.querySelector(".icon").innerHTML = '<i class="fas fa-plus"></i>';
  } else {
    respostaElement.style.display = "block";
    perguntaElement.classList.add("aberta");
    perguntaElement.querySelector(".icon").innerHTML = '<i class="fas fa-minus"></i>';
  }
}





document.querySelector('#outro-elemento').addEventListener('click', function () {
  window.location.href = './ate_200.html';
});



document.querySelector('.col-md-2').addEventListener('click', function () {
  window.location.href = './novidades.html';
});

function selectButton(button) {
  var buttons = document.getElementsByClassName("tamanho-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("clicked");
  }
  button.classList.add("clicked");
}



function selectButton(button) {
  var buttons = document.getElementsByClassName("tamanho-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("clicked");
  }
  button.classList.add("clicked");
}



function showNikeSubmenu(show) {
  var nikeSubmenu = document.getElementById("NikeSubmenu");
  if (show) {
    nikeSubmenu.style.display = "block";
  } else {
    nikeSubmenu.style.display = "none";
  }
}

function clearSubmenu() {
  var nikeSubmenu = document.getElementById("NikeSubmenu");
  nikeSubmenu.style.display = "none";
}





function showmenu() {
  document.getElementById("sapatilhasSubmenu").classList.add("show");
}

function hidemenu() {
  document.getElementById("sapatilhasSubmenu").classList.remove("show");
}

function hideSubmenu() {
  var submenus = document.getElementsByClassName("submenu");
  for (var i = 0; i < submenus.length; i++) {
    submenus[i].classList.remove("show");
  }
}