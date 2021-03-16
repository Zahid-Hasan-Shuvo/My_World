
// const selectElement= function(element){
//     return document.querySelector(element);
// };

// let menutoggler = selectElement('.menu-toggle');
// let body = selectElement('body');

// menuToggler.addEventListener('click', function(){
//     body.classList.toggle('open');
// });

const menuToggle = document.querySelector('.menu-toggle');
const body = document.querySelector('body');

menuToggle.addEventListener('click',()=>{
    body.classList.toggle('open');
});

// scroll revel

window.sr = ScrollReveal();

ScrollReveal().reveal('.animate-left', {
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:300
});

ScrollReveal().reveal('.animate-right',{
    origin:'right',
    duration:1000,
    distance:'25rem',
    delay:600
});

sr.reveal('.animate-top',{
    origin:'top',
    duaration:1000,
    distance:'25rem',
    delay:600
});

sr.reveal('.animate-bottom',{
    origin:'bottom',
    duaration:1000,
    distance:'25rem',
    delay:600
});






