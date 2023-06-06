// SORU 1
let userName = document.querySelector('#name')
let nameText = document.querySelector('#nameText')
let age = document.querySelector('#age')
let ageText = document.querySelector('#ageText')
let checkIt = document.querySelector('#checkIt')
let radio = document.getElementsByName('boolean')
let BooleanText = document.querySelector('#BooleanText')

checkIt.addEventListener('click', function () {

    nameText.innerHTML = `Değer: ${userName.value} type: ${typeof userName.value}`
    ageText.innerHTML = `Değer: ${age.value}  type: ${typeof Number(age.value)}`

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            BooleanText.innerHTML = `Değer : ${radio[i].value}  type: ${typeof Boolean(radio[i].value)}`
        }
        radio[i].checked = false;
    }
    userName.value = "";
    age.value = "";
})


// SORU 2

let city = ["Elaziğ", " Aydin", " Ankara", " İstanbul", " Antalya"]
let cityText = document.getElementById('cityText')
cityText.innerHTML = city
let newCity = document.querySelector('#newCity')
let addCity = document.querySelector('#addcity')
let chooseCity = document.querySelector('#chooseCity')
let cityIndex = document.querySelector('#cityIndex')
let chooseCityText = document.querySelector('#chooseCityText')
addCity.addEventListener('click', function () {

    city.push(newCity.value);
    cityText.innerHTML = city.join(', ');
    newCity.value = "";

})

chooseCity.addEventListener('click', function () {

    chooseCityText.innerHTML = city[cityIndex.value - 1];
    cityIndex.value = "";
})

// SORU 3
let number1 = document.getElementById('number1')
let number2 = document.getElementById('number2')

let result = document.getElementById('result')
let topla = document.getElementById('topla')
let cikar = document.getElementById('cikar')
let carp = document.getElementById('carp')
let böl = document.getElementById('böl')
let mod = document.getElementById('mod')


topla.addEventListener('click', function () {
    result.innerHTML = "Sonuç : "
    result.innerHTML += parseInt(number1.value) + parseInt(number2.value)

})
cikar.addEventListener('click', function () {
    result.innerHTML = "Sonuç : "
    result.innerHTML += parseInt(number1.value) - parseInt(number2.value)

})
carp.addEventListener('click', function () {
    result.innerHTML = "Sonuç : "
    result.innerHTML += parseInt(number1.value) * parseInt(number2.value)

})
böl.addEventListener('click', function () {
    result.innerHTML = "Sonuç : "
    result.innerHTML += parseInt(number1.value) / parseInt(number2.value)

})
mod.addEventListener('click', function () {
    result.innerHTML = "Sonuç : "
    result.innerHTML += parseInt(number1.value) % parseInt(number2.value)

})


// SORU 4

let number3 = document.getElementById('number3')
let number4 = document.getElementById('number4')
let result2 = document.getElementById('result2')
let karsilastir = document.getElementById('karsilastir')


karsilastir.addEventListener('click', function () {
    result2.innerHTML = "Sonuç :"

})
karsilastir.addEventListener('click', function () {
    if (number3.value != "" && number4.value != "") {
        if (number3.value > number4.value) {
            result2.innerHTML += ' Sayi 1 > Sayi 2'

        } else if (number3.value < number4.value) {
            result2.innerHTML += ' Sayi 1 < Sayi 2'
        }
        else if (number3.value == number4.value) {
            result2.innerHTML += ' Sayi 1 = Sayi 2'
        }
    } else {
        result2.innerHTML += ' Yanlış giriş yaptınız!'
    }
    number3.value = "";
    number4.value = "";
})

// SORU 5
let number5 = document.getElementById('number5')
let number6 = document.getElementById('number6')
let result3 = document.getElementById('result3')
let ekle2 = document.querySelector('#ekle2')
let cikar5 = document.querySelector('#cikar5')

let toplam = document.querySelector('#toplam')


toplam.addEventListener('click', function () {

    result3.innerHTML += parseInt(number5.value) + parseInt(number6.value)

})


ekle2.addEventListener('click', function () {
    number5.value = parseInt(number5.value) + 2;
    result3.innerHTML = `Sonuç :   ${parseInt(number5.value) + parseInt(number6.value)} `;

})
cikar5.addEventListener('click', function () {
    number6.value = parseInt(number6.value) - 5;
    result3.innerHTML = `Sonuç :   ${parseInt(number5.value) + parseInt(number6.value)} `;

})

