

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.loginbtn');
const iconClose = document.querySelector('.close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-open');
});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-open');
    wrapper.classList.remove('active');
});

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;


async function signup() {
    const email = document.getElementById('signup_email').value;
    const phoneNumber = document.getElementById('signup_phone').value;
    const username = document.getElementById('signup_username').value;
    const password = document.getElementById('signup_password').value;

    const response = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, phoneNumber, password }),
    });

    const result = await response.json();
    alert(result.message);
}

async function signin() {
    const username = document.getElementById('signin_username').value;
    const password = document.getElementById('signin_password').value;

    const response = await fetch('/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    if (result.token) {
        localStorage.setItem('token', result.token);
        alert('Sign in successful');
    } else {
        alert(result.message);
    }
}


const dryer1 = document.getElementById('dryer1');
const dryer2 = document.getElementById('dryer2');
const washer1 = document.getElementById('washer1');
const washer2 = document.getElementById('washer2');

displayName = document.getElementById('appName');
const status = document.getElementById('status');
const time = document.getElementById('time');


function updateInfo(machine){
    displayName.innerText = machine;
}

function useAppliance(){
    newAppliance = mongoose.model("Appliance", ApplianceSchema);
    newAppliance.name = displayName;
}