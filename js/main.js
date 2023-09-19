const menuOpen = document.querySelector('.ri-menu-line');
const menuClose = document.querySelector('.ri-close-circle-fill');
const nav = document.querySelector('nav ul')

menuOpen.addEventListener('click', function(){
    nav.style.top ='35%';
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
})

menuClose.addEventListener('click', function(){
    nav.style.top ='-35%';
    menuClose.style.display = 'none';
    menuOpen.style.display = 'block';
})