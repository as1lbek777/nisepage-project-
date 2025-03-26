'use strict';
const modal = document.querySelector('.modal');
const btnOpen = document.querySelectorAll('.show-modal');
const btnclose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
modal.style.borderRadius = "5px";
function closeModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function openModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for (const btn of btnOpen) {
    btn.addEventListener('click', closeModal);
}
btnclose.addEventListener('click', openModal);
overlay.addEventListener('click', openModal);


const API = 'https://reqres.in/api/users';

