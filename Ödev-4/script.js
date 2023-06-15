// SORU 1
let arrayAdd = document.querySelector('#arrayAdd')
arrayAdd.addEventListener('click', arrayFunction)

function arrayFunction() {
    let newArray = [];
    let numberOne = document.getElementById('number1')
    let numberSecond = document.getElementById('number2')
    let arrayText = document.getElementById('arrayText')
    arrayText.innerHTML = "Sonuç : "
    if (numberOne.value >= 0 && numberSecond.value <= 50) {
        for (let i = +numberOne.value; i <= numberSecond.value; i++) {

            newArray.push(i)

        }
        arrayText.innerHTML += newArray;
        console.log(newArray)
    } else {
        arrayText.innerHTML += `0 ile 50 arasinda sayi girin`
    }
    numberOne.value = ""
    numberSecond.value = ""
}

// SORU 2

let sumButton = document.getElementById('sumButton');
sumButton.addEventListener('click', sum)
function sum() {

    let number3 = document.getElementById('number3')
    let number4 = document.getElementById('number4')
    let sumResult = document.getElementById('sumResult')
    sumResult.innerHTML = "Sonuç : "
    sumResult.innerHTML += +number3.value + +number4.value;
    number3.value = "";
    number4.value = "";
}

// SORU 3

let createRandom = document.getElementById('createRandom');
createRandom.addEventListener('click', randomFunction);
function randomFunction() {
    let randomArray = [];
    let amount = document.getElementById('amount')
    let randomInfo = document.getElementById('randomInfo')
    randomInfo.innerHTML = "Rastgele Sayilar: "
    for (let i = 0; i < amount.value; i++) {

        randomArray.push(Math.floor(Math.random() * 100))

    }
    randomInfo.innerHTML += randomArray;
    selectMax(randomArray);
}

let selectMax = list => {

    let maxNumber = list[0]
    let maxNumberInfo = document.querySelector('#maxNumberInfo');

    for (let i = 1; i <= list.length; i++) {
        if (list[i] > maxNumber) {
            maxNumber = list[i];
        }
    }
    maxNumberInfo.innerHTML = `En büyük sayi: ${maxNumber}`;
}

// SORU 4

let users = [

    {
        username: "erkan",
        role: "admin",
        password: 12345
    },
    {
        username: "erdal",
        role: "user",
        password: 12345
    }

];
let signIn = document.getElementById('signIn');
signIn.addEventListener('click', userControl)


function userControl() {

    let username = document.getElementById('username')
    let password = document.getElementById('password')
    let userInfo = document.getElementById('userInfo')

    for (let i = 0; i < users.length; i++) {

        if (username.value == users[i].username && password.value == users[i].password) {
            userInfo.innerHTML = `Merhaba ${users[i].role}!`
            userInfo.classList.add('text-success');
            userInfo.classList.remove('text-danger');
            break;

        } else {
            userInfo.innerHTML = `Giriş izniniz yok!`;
            userInfo.classList.add('text-danger');

        }
    }
    username.value = "";
    password.value = "";
}

// SORU 5
let create = document.getElementById('create');
let check = document.getElementById('check');
let reservationName = document.getElementById('reservationName');
let reservationInfo = document.getElementById('reservationInfo');
create.addEventListener('click', createReservation);
check.addEventListener('click', checkReservation);
let reservationList =
    localStorage.getItem('reservation') ?
        JSON.parse(localStorage.getItem('reservation')) : []


function createReservation() {

    if (reservationName.value != "") {
        reservationList.push(reservationName.value.toUpperCase());
        reservationInfo.innerHTML =
            `<b class="text-success">${reservationName.value.toUpperCase()}
    </b> rezervasyonunuz oluşturuldu`;
        localStorage.setItem('reservation', JSON.stringify(reservationList));
    }
}


function checkReservation() {

    for (let i = 0; i <= reservationList.length; i++) {

        if (reservationName.value.toUpperCase() ==
            JSON.parse(localStorage.getItem('reservation'))[i]) {

            reservationInfo.innerHTML =
                `<b class="text-success">${reservationName.value.toUpperCase()}</b> 
                rezervasyonunuz bulunmaktadir`;
            break;
        } else {
            reservationInfo.innerHTML =
                `<b class="text-danger">${reservationName.value.toUpperCase()}</b> 
                rezervasyonunuz bulunmamaktadir`;
        }
    }
}
