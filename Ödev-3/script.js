// SORU 1
let login = document.querySelector('#login')
login.addEventListener('click', loginControl)
function loginControl() {

    let userInfo = {
        username: "erkann",
        password: 12345
    }

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let loginInfo = document.getElementById('loginInfo')


    if (username.toLowerCase() == userInfo.username && password == userInfo.password) {
        loginInfo.innerHTML = 'Giriş Yapildi'
        loginInfo.classList.add('success')
        loginInfo.classList.remove('danger')
    } else {
        loginInfo.innerHTML = 'Bilgiler Hatali!'
        loginInfo.classList.add('danger')
    }
}

// SORU 2

let passengerControl = document.querySelector('#passengercontrol')
passengerControl.addEventListener('click', ticketControl)


function ticketControl() {
    let passengerName = document.querySelector('#passengername').value;
    let passengerAge = document.querySelector('#passengerage').value;
    let user = {
        name: passengerName,
        age: passengerAge,
        group: ""
    }

    if (passengerAge >= 5 && passengerAge <= 14) {
        user.group = "Çocuk"
    } else if (passengerAge >= 15 && passengerAge < 25) {
        user.group = "Genç"
    } else if (passengerAge >= 25 && passengerAge < 45) {
        user.group = "Yetişkin"
    } else if (passengerAge >= 45 && passengerAge <= 60) {
        user.group = "Orta Yaş"
    } else if (passengerAge > 60) {
        user.group = "Yaşli"
    }

    document.querySelector('#passengerInfo').innerHTML = `Adiniz : ${user.name} Yaşiniz : ${user.age} Grup : ${user.group} `
}
// SORU 3

let degree = document.querySelector('#degree')
let weather = document.querySelector('#weather')
weather.innerHTML = `${degree.value} \u00B0C`;

degree.addEventListener('change', degreeFunction)

function degreeFunction() {
    weather.innerHTML = `${degree.value} \u00B0C`;
    let info;
    if (degree.value < -20) {
        info = "Çok soğuk"
    } else if (degree.value >= -20 && degree.value < 0) {
        info = "Soğuk"
    } else if (degree.value >= 0 && degree.value < 15) {
        info = "Ilık - Soğuk"
    } else if (degree.value >= 15 && degree.value < 25) {
        info = "Ilık"
    } else if (degree.value >= 25 && degree.value < 35) {
        info = "Sıcak"
    } else if (degree.value >= 35) {
        info = "Çok sıcak"
    }

    weather.innerHTML += " " + info;

}


// SORU 4

let loginSecond = document.querySelector('#login2')

loginSecond.addEventListener('click', function () {
    let username = document.querySelector('#usernamesecond')
    let accessInfo = document.querySelector('#accessInfo')
    accessInfo.innerHTML = "Giriş: "
    let user = {
        ad: "erkan",
        hak: 1,
        yasakli: false,
    }
    if (username.value != "") {


        if (username.value.toLowerCase() == user.ad) {
            if (user.hak >= 1 || user.yasakli != true) {
                accessInfo.innerHTML += ` Başarili`
                accessInfo.classList.add('success')
                accessInfo.classList.remove('danger')

            }
        } else {
            accessInfo.innerHTML += ` Başarisiz | İzniniz yok`
            accessInfo.classList.add('danger')

        }
    } else {
        accessInfo.innerHTML = "Lütfen isim giriniz"
    }
})

// SORU 5
let months = document.querySelector('#months')

months.addEventListener('change', function () {
    let season = document.querySelector('#season')
    season.innerHTML = "Mevsim : "
    for (let i = 1; i < 4; i++) {
        if (months.options[i].selected) {
            season.innerHTML += "Kış"
        }
    } for (let i = 4; i < 7; i++) {
        if (months.options[i].selected) {
            season.innerHTML += "İlkbahar"
        }
    } for (let i = 7; i < 10; i++) {
        if (months.options[i].selected) {
            season.innerHTML += "Yaz"
        }
    } for (let i = 10; i < 13; i++) {
        if (months.options[i].selected) {
            season.innerHTML += "Sonbahar"
        }
    }
})


// SORU 6
let discountCheck = document.querySelector('#discountcheck')
let productName = document.getElementById('productname')
let price = document.getElementById('price');
let discountInfo = document.getElementById('discountinfo');
let customerName = document.getElementById('customername');
let discount = document.getElementById('discount');
discountCheck.addEventListener('click', function () {
    let urun = {
        ad: "",
        ucret: "",
        musteriTuru: "",
    }
    urun.ad = productName.innerHTML
    let customerJob = document.getElementById('customerjob').value;
    urun.musteriTuru = customerJob.toLowerCase();

    if (urun.musteriTuru == "öğrenci") {
        discountInfo.innerHTML = `Merhaba ${customerName.value} ${urun.ad} ürününe %50 indirim uygulanmiştir`
        price.innerHTML /= 2;
        urun.ucret = price.innerHTML
        discount.innerHTML = "50%"

    } else {
        price.innerHTML = 9500;
        urun.ucret = price.innerHTML
        discount.innerHTML = "";
        discountInfo.innerHTML = `Merhaba ${customerName.value} ${urun.ad} ürününe ait indiriminiz bulunmamaktadir`
    }

})