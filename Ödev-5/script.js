// Soru 1
let submitGrade = document.querySelector('#submitGrade')
submitGrade.addEventListener('click', controlGrade)
function controlGrade() {
    let grade = document.querySelector('#grade');
    let gradeInfo = document.querySelector('#gradeInfo');
    gradeInfo.innerHTML = "Sonuç: "
    if (!isNaN(grade.value) && grade.value) {
        if (grade.value >= 0 && grade.value <= 50) {
            gradeInfo.innerHTML += "Ortalama ile geçtiniz"
        } else if (grade.value > 50 && grade.value <= 70) {
            gradeInfo.innerHTML += "İyi ile geçtiniz"
        } else if (grade.value > 70 && grade.value <= 80) {
            gradeInfo.innerHTML += "Pekiyi ile geçtiniz"
        } else if (grade.value > 80 && grade.value <= 100) {
            gradeInfo.innerHTML += "Çok iyi ile geçtiniz"
        }
    } else {
        gradeInfo.innerHTML += "<b class='text-danger'>Not bilginizi kontrol ediniz</b>"
    }
    grade.value = "";
}

// Soru 2
let user = {
    name: "erkan",
    password: 12345
}
const userInfo = document.getElementById('userInfo')
userInfo.innerHTML = JSON.stringify(user);
const changeName = document.getElementById('changeName')
changeName.addEventListener('click', changedName)

function changedName() {

    const username = document.querySelector('#username')
    user.name = username.value
    userInfo.innerHTML = JSON.stringify(user);
}

// Soru 3

const sentenceButton = document.querySelector('#sentenceButton')
sentenceButton.addEventListener('click', function () {

    let sentence = document.getElementById('sentenceInput').value;
    let arraySentence = document.getElementById('arraySentence');
    arraySentence.innerHTML = `${arraySentence.innerHTML}  <b> ${sentence.split(' ')}</b>`
})
// Soru 4

let users = [

    { ad: "erkan", yetki: "admin", status: true },
    { ad: "ercan", yetki: "user", status: false },
    { ad: "erdal", yetki: "user", status: false }
]

const userSubmit = document.querySelector('#userSubmit')
userSubmit.addEventListener('click', function () {

    let userName = document.querySelector('#userName');
    let control = document.querySelector('#control');
    users.forEach(item => {

        if (userName.value == item.ad && item.yetki != "admin") {
            item.status = true;
            control.innerHTML = JSON.stringify(item)
        }
        if (item.yetki == "admin") {
            control.innerHTML = `Admin girişi`
        }
    })
})

// Soru 5
let userLogin = {
    name: "erkan",
    password: 12345,
    gunlukHak: 3
}
const loginButton = document.querySelector('#loginButton')
loginButton.addEventListener('click', function () {
    const loginName = document.querySelector('#userLogin');
    const loginPassword = document.querySelector('#loginPassword');
    let loginInfo = document.getElementById('loginInfo')

    if (loginName.value == userLogin.name && loginPassword.value == userLogin.password) {
        loginInfo.innerHTML = '<b class="text-success"> Giriş yapildi !</b>'
    } else {
        userLogin.gunlukHak--;
        loginInfo.innerHTML = `<b class="text-danger">${userLogin.gunlukHak} hakkiniz kaldi!</b>`
    }
    if (userLogin.gunlukHak == 0) {

        loginName.disabled = true;
        loginPassword.disabled = true;
        loginButton.disabled = true;
        loginInfo.innerHTML = `<b class="text-warning">Hesabınız Bloke Olmuştur!</b>`
    }
})



