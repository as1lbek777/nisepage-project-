'use strict';
const modal = document.querySelector('.modal');
const btnOpen = document.querySelectorAll('.showModal');
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

const API = 'https://reqres.in/api/users';

const userCard = document.querySelector(".card2");
const message = document.querySelector(".message");
const createUserBtn = document.getElementById("createUser");

let userArr = [];  // Foydalanuvchilar jurnali

// Fetch api methods post
const createUser = async (user) => {
    const name = document.getElementById("name").value
    const job = document.getElementById("job").value


    if (name === '' || job === '') {
        message.textContent = "Ismingiz bilan Kasbingizni kiriting?";
        message.style.display = "block";
        setTimeout(() => {
            message.style.opacity = 1;
        }, 10);
        setTimeout(() => {
            message.style.opacity = 0;
        }, 1500);
        setTimeout(() => {
            message.style.display = 'none';
        }, 2500);
    } else {
        for (const btn of btnOpen) {
            btn.addEventListener('click', closeModal);
        }
        btnclose.addEventListener('click', openModal);
        overlay.addEventListener('click', openModal);
        message.textContent = "Ma\'lumotlar yo\'borilmoqda...";
        message.style.display = "block";
        setTimeout(() => {
            message.style.opacity = 1;
        }, 10);
        setTimeout(() => {
            message.style.opacity = 0;
        }, 1500);
        setTimeout(() => {
            message.style.display = 'none';
        }, 2500);

        try {
            const reponse = await fetch(API, {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({ name, job })
            })
            const data = await reponse.json();
            user.push(data)
            userList()
        } catch {
            message.textContent = "Yangi foydalanuvchi qo\'shildi";
            message.style.display = "block";
            setTimeout(() => {
                message.style.opacity = 1;
            }, 10);
            setTimeout(() => {
                message.style.opacity = 0;
            }, 1500);
            setTimeout(() => {
                message.style.display = 'none';
            }, 2500);
        }
    }
}
createUserBtn.addEventListener("click", createUser);


// user card function
const userList = () => {
    user.map((item) => {
        userCard.innerHTML += `
            <p>ID: <span>${item.id}</span></p>
            <p>Name: <span>${item.name}</span></p>
            <p>Kasbi: <span>${item.job}</span></p>
            <button class="close" onclick="">❌</button> 
        `
    })
}