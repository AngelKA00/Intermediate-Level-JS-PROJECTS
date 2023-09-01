// to show and hide menu bar
// declare variables
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    
    navbar.classList.toggle('active');
}

window.onscroll = () => {
   
    navbar.classList.remove('active');
}