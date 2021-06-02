const open = document.querySelector(".open");
const close = document.querySelector(".close");
const nav_list = document.querySelector(".nav-list");

open.addEventListener('click',()=>{
    nav_list.classList.add('active');
})
close.addEventListener('click',()=>{
    nav_list.classList.remove('active');
})