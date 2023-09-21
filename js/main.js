const menuOpen = document.querySelector('.ri-menu-line');
const menuClose = document.querySelector('.ri-close-circle-fill');
const nav = document.querySelector('nav ul')

const navLinks = document.querySelectorAll('nav ul li')
console.log(navLinks)

const faqs = document.querySelectorAll('.asked ul li')
console.log(faqs)

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

navLinks.forEach(navLink=>{
    navLink.addEventListener('click', function(){
        nav.style.top ='-35%';
        menuClose.style.display = 'none';
        menuOpen.style.display = 'block';
    })
})

faqs.forEach(faq=>{
    faq.addEventListener('click', function(){
       faq.classList.toggle('active')
    })

})