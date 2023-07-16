const USERS = new Map();
const greetingButton = document.getElementById('greetingButton');
const signUp = document.getElementById('signUp');
const signIn = document.getElementById('signIn');

greetingButton.addEventListener('click', function () {

    let greeting = document.querySelector('.greeting');
    let title = document.querySelector('.greeting-title');
    greeting.classList.toggle('active');

    greeting.classList.contains('active')
        ? (title.innerHTML = 'Create Account', this.innerHTML = 'sıgn up')
        : (title.innerHTML = 'Welcome Back!', this.innerHTML = 'sıgn in');
});


signUp.addEventListener('click', function () {

    const signUpName = document.getElementById('signUpName');
    let userName = signUpName.value.toLowerCase();

    const signUpEmail = document.getElementById('signUpEmail');
    let email = signUpEmail.value.toLowerCase();
    let at = signUpEmail.value.indexOf('@');

    const signUpPassword = document.getElementById('signUpPassword');
    let password = signUpPassword.value;

    const alert = document.getElementById('signUpAlert');
    const nameError = document.querySelector('.name-error');
    const mailError = document.querySelector('.email-error');
    const passwordError = document.querySelector('.password-error');

    userName.length < 3
        ? nameError.style.display = 'block'
        : nameError.style.display = 'none'

    at <= 0
        ? mailError.style.display = 'block'
        : mailError.style.display = 'none'

    password.length < 6
        ? passwordError.style.display = 'block'
        : passwordError.style.display = 'none'


    if (userName.length >= 3 && at && password.length >= 6) {
        if (!USERS.has(email)) {

            const greetingButton = document.getElementById('greetingButton');
            let greeting = document.querySelector('.greeting');
            let title = document.querySelector('.greeting-title');

            USERS.set(email, { userName: userName, email: email, password: password });
            alert.style.display = 'none';

            greeting.classList.add('active');
            title.innerHTML = 'Create Account';
            greetingButton.innerHTML = 'sıgn up';

        } else {
            alert.style.display = 'block'
        }
    }
});

signIn.addEventListener('click', function () {

    const signInEmail = document.getElementById('signInEmail');
    email = signInEmail.value.toLowerCase();
    let at = signInEmail.value.indexOf('@');

    const signInPassword = document.getElementById('signInPassword');
    let password = signInPassword.value;

    const alert = document.getElementById('sigInAlert');
    const mailError = document.querySelector('.signMailError');
    const passwordError = document.querySelector('.signPasswordError');

    let userNameInfo = document.getElementById('userName');



    at < 0
        ? mailError.style.display = 'block'
        : mailError.style.display = 'none'

    !password
        ? passwordError.style.display = 'block'
        : passwordError.style.display = 'none'


    let userControl = USERS.get(email);


    if (at && password) {

        if (!userControl) {
            alert.classList.add('active');
            alert.children[0].innerHTML = 'Account not found. Please register.'

        }
        else if (userControl && userControl.password == password) {

            let userName = USERS.get(email).userName;
            alert.classList.remove('active');
            userNameInfo.innerHTML = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
            document.querySelector('.login-page').classList.add('active');


        } else {
            alert.classList.add('active');
            alert.children[0].innerHTML = 'Incorrect email or password.'
        }

    }
})


function closeButton() {

    document.querySelector('.login-page').classList.toggle('active');
}



