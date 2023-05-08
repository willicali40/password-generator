const characters = [`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*_-+='|\(){}[]:;"'<>,.?/`];

const btn = document.querySelector('#btn')
const completedPassword = document.querySelector('#completedPassword')
const btn8 = document.querySelector('#btn8')
const btn12 = document.querySelector('#btn12')
const btn16 = document.querySelector('#btn16')


btn8.addEventListener('click', () => generatePassword(8));
btn12.addEventListener('click', () => generatePassword(12));
btn16.addEventListener('click', () => generatePassword(16));
btn.addEventListener('click', () => generatePassword(8));


function generatePassword(length) {
    let password = '';
    completedPassword.innerHTML = '';

    for (let index = 0; index < length; index++) {
        let position = Math.floor(Math.random() * 93);
        password += characters[0][position]
    }

    completedPassword.innerHTML = password.trim();
    console.log(password.length);

    storeData(password)
}


function storeData(pwsd) {
    localStorage.clear()
    localStorage.setItem('password', JSON.stringify(pwsd))
}