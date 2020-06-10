let menu__toggle = document.querySelector('#menu__toggle');
let body = document.querySelector('#lock');
menu__toggle.addEventListener('click',()=>{
    body.classList.toggle('lock');
});

let categories_close = document.querySelector('#categories_close');
let categories_open = document.querySelector('#categories_open');
let categories_block = document.querySelector('#categories_block');
let categories_container = document.querySelector('.categories_container');
if(screen.width<950){
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
}
let company_btn = document.querySelector('#company_btn');
let company_list = document.querySelector('.company_list');
company_btn.addEventListener('click',()=>{
    company_list.classList.toggle('active_list');
});

let categories_btn = document.querySelector('#categories_btn');
let footer_categories_list = document.querySelector('.footer_categories_list');
categories_btn.addEventListener('click',()=>{
    footer_categories_list.classList.toggle('active_list');
});

let info_btn = document.querySelector('#info_btn');
let information_list = document.querySelector('.information_list');
info_btn.addEventListener('click',()=>{
    information_list.classList.toggle('active_list');
});

let sc_btn = document.querySelector('#sc_btn');
let social_network_list = document.querySelector('.social_network_list');
sc_btn.addEventListener('click',()=>{
    social_network_list.classList.toggle('active_list');
});