const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');
const form = document.querySelector('form');

menu.addEventListener('click', () => {
 nav.classList.add('open-nav');
 form.classList.add('d-none');
});

close.addEventListener('click', () => {
 nav.classList.remove('open-nav');
 form.classList.remove('d-none');
});