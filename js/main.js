

let menu = document.getElementById('menu-toggel');
let navMenu = document.querySelector('.nav-menu');


menu.addEventListener('click', function(){
    menu.classList.toggle("change");
    navMenu.classList.toggle("active")
 
})