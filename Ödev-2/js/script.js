// Soru 1
let userAge = document.querySelector('#userage');
let submitAge = document.querySelector('#submitage');
let userageText = document.querySelector('#userageText')
let limit = 18;

submitAge.addEventListener('click', function () {
    userageText.innerHTML = "Yaşınız :"

    if (userAge.value != "") {
        if (userAge.value >= 18) {
            userageText.innerHTML += "18'den büyük"
        } else {
            userageText.innerHTML += "18'den küçük"
        }
    } else {
        userageText.innerHTML = "Yaşinizi belirtmediniz"
    }
    userAge.value = "";
})

// Soru 2

let numberSubmit = document.querySelector('#numberSubmit')
let numberControl = document.querySelector('#numberControl')
let numberControlText = document.querySelector('#numberControlText')

numberSubmit.addEventListener('click', function () {
    numberControlText.innerHTML = `Sonuç :`

    if (numberControl.value > 0) {
        numberControlText.innerHTML += ` Pozitif sayi`
    } else if (numberControl.value < 0) {
        numberControlText.innerHTML += ` Negatif sayi`
    } else if (numberControl.value == 0 && numberControl.value != "") {
        numberControlText.innerHTML += `Girilen sayi 0`
    } else {
        numberControlText.innerHTML += `Sayi girişi yapilmadi`

    }
    numberControl.value = "";
})


// Soru 3

let number1 = document.querySelector('#number1')
let number2 = document.querySelector('#number2')
let result = document.querySelector('#result')
let topla = document.querySelector('#topla')
let cikar = document.querySelector('#cikar')
let carp = document.querySelector('#carp')
let bol = document.querySelector('#bol')


topla.addEventListener('click', function () {
    result.innerHTML = "Sonuç : "
    result.innerHTML += Number(number1.value) + Number(number2.value);
})
cikar.addEventListener('click', function () {
    result.innerHTML = "Sonuç : "
    result.innerHTML += Number(number1.value) - Number(number2.value);
})
carp.addEventListener('click', function () {
    result.innerHTML = "Sonuç : "
    result.innerHTML += Number(number1.value) * Number(number2.value);
})
bol.addEventListener('click', function () {
    result.innerHTML = "Sonuç : "
    result.innerHTML += Number(number1.value) / Number(number2.value);
})


// Soru 4
let vize = document.querySelector('#vize')
let final = document.querySelector('#final')
let calExam = document.querySelector('#calExam')
let ortalamaText = document.querySelector('#ortalama')

calExam.addEventListener('click', function () {
    ortalamaText.innerHTML = `Ortalamaniz :`
    let ortalama = vize.value * 0.4 + final.value * 0.6;

    if (vize.value != "" && final.value != "") {
        if (ortalama >= 60) {
            ortalamaText.innerHTML += ` ${ortalama} Geçtiniz !`
        } else {
            ortalamaText.innerHTML += ` ${ortalama} Kaldiniz !`
        }
    } else {
        ortalamaText.innerHTML = `Hatali Giriş Yaptiniz!`
    }
})

// Soru 5

let userName = document.querySelector('#userName')
let userLastName = document.querySelector('#userLastName')
let infoSave = document.querySelector('#infoSave')
let infoCancel = document.querySelector('#infoCancel')
userLastName.style.display = "none"

infoSave.addEventListener('click', function () {

    if (userName.value.length > 3) {

        userLastName.style.display = "inline-block"
        userLastName.focus();
        if (userLastName.value.length > 3) {
            alert(`${userName.value} ${userLastName.value}`)
        } else if (userLastName.value.length < 3 && userLastName.value != "") {
            userLastName.value = "";
            userLastName.placeholder = "Soyadinizi tekrar giriniz";
            userLastName.focus();
        }
    } else {
        userName.value = "";
        userName.placeholder = "İsminizi tekrar giriniz";
        userName.focus();
    }
})

infoCancel.addEventListener('click', function () {
    if (userName.value || userLastName.value) {
        userName.value = "";
        userLastName.value = "";
        userLastName.style.display = "none";
    }
})

// Soru 6
let cuzdan = 50;

let alinacakOlan = {
    urunAdi1: "ekmek",
    urunAdi2: "yumurta",
    urunAdi3: "süt",
    urunAdi4: "peynir",
    fiyat1: 2,
    fiyat2: 3,
    fiyat3: 6,
    fiyat4: 5,
}

let urunler = document.querySelector('#urunler')
let urunAra = document.querySelector('#urunAra')
let urunAraInput = document.querySelector('#urunAraInput')
let satinAl = document.querySelector('#satinAl')
let fiyat = document.querySelector('#fiyat')
let bakiye = document.querySelector('#bakiye')
bakiye.innerHTML = cuzdan;
let stok = document.querySelector('#stok')
let ekle = document.querySelector('#ekle')
let uyari = document.querySelector('#uyarı')
let sepet = 0;



urunler.addEventListener('change', function () {

    for (let i = 0; i < urunler.length; i++) {
        if (urunler.options[i].selected) {
            sepet += alinacakOlan["fiyat" + i]
        }
    }
    fiyat.innerHTML = sepet
})

urunAra.addEventListener('click', function () {

    stok.innerHTML = "Stok Durumu: ";
    for (let i = 0; i <= 4; i++) {

        if (urunAraInput.value.toLowerCase() == alinacakOlan["urunAdi" + i]) {
            stok.innerHTML += "Mevcut";
        }
    }
})

ekle.addEventListener('click', function () {
    for (let i = 0; i <= 4; i++) {
        if (urunAraInput.value.toLowerCase() == alinacakOlan["urunAdi" + i]) {
            sepet += alinacakOlan["fiyat" + i]
        }
    }
    fiyat.innerHTML = sepet
})

satinAl.addEventListener('click', function () {

    cuzdan -= sepet;
    bakiye.innerHTML = cuzdan;

    if (cuzdan == 0) {
        uyari.innerHTML = "Bakiyeniz bitti!"

    } else if (cuzdan < sepet) {
        uyari.innerHTML = "Bakiyeniz yetersiz!"

    }
})

// Soru 7

let user = {
    name: "",
    lastname: "",
    age: "",
}
let username = document.getElementById('name')
let lastname = document.getElementById('lastname')
let age = document.getElementById('age')
let kayit = document.getElementById('kayit')
let bilgi = document.getElementById('bilgi')


kayit.addEventListener('click', function () {

    if (username.value) {
        user.name = username.value
    } else {
        user.name = "Belirtilmedi"
    }
    if (lastname.value) {
        user.lastname = lastname.value
    } else {
        user.lastname = "Belirtilmedi"
    }
    if (age.value) {
        user.age = age.value
    } else {
        user.age = "Belirtilmedi"
    }

    bilgi.innerHTML = `${user.name} ${user.lastname} ${user.age}`
})










