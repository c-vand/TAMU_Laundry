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