// const express = require('express')
// const mongoose = require('mongoose')

// const app = express()

// mongoose.connect('mongodb://localhost:27017/machineData')

// const UserSchema = mongoose.Schema({
//     status: String,
//     time: String
// })

// const UserModel = mongoose.model("users", UserSchema);

// app.get("/getUsers", (req, res) => {
//     res.json(UserModel.find());
// })

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



const dryer1 = document.getElementById('dryer1');
const dryer2 = document.getElementById('dryer2');
const washer1 = document.getElementById('washer1');
const washer2 = document.getElementById('washer2');

const displayName = document.getElementById('name');
const status = document.getElementById('status');
const time = document.getElementById('time');


function updateInfo(machine){
    displayName.innerText = machine;
}