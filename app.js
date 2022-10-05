const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const formButton = document.querySelector('.form-button'); 
menu.addEventListener('click',  function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


document.querySelector(".form-button").addEventListener("click" , function(){
  formButton.innerHTML = "check your email for confirmation";
});


