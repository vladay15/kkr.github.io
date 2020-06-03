let menu__toggle = document.querySelector('#menu__toggle');
let body = document.querySelector('#lock');
menu__toggle.addEventListener('click',()=>{
    body.classList.toggle('lock');
});

let categories_close = document.querySelector('#categories_close');
let categories_open = document.querySelector('#categories_open');
let categories_block = document.querySelector('#categories_block');
let categories_container = document.querySelector('.categories_container');
categories_open.addEventListener('click',()=>{
    categories_container.style.display= 'flex';
    categories_block.style.display = 'block';
    body.classList.add('lock');
});

categories_close.addEventListener('click',()=>{
    categories_container.style.display= 'none';
    categories_block.style.display = 'none';
    body.classList.remove('lock');
});

event.preventDefault();