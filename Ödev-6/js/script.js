// SORU 1
const selectBox = document.getElementById('selectBox');

selectBox.addEventListener('change', function () {

    const myDiv = document.querySelector('.divOne');

    myDiv.style.backgroundColor = selectBox.value;
    myDiv.style.color = '#ffff';
    this.style.borderColor = selectBox.value;
});

// SORU 2

const changeColor = document.getElementById('changeColor');

changeColor.addEventListener('click', function () {

    const myDiv = document.querySelector('.divSecond');

    myDiv.style.backgroundColor == 'white' || myDiv.style.backgroundColor == ""
        ? (myDiv.style.backgroundColor = 'black', myDiv.style.color = 'white')
        : (myDiv.style.backgroundColor = 'white', myDiv.style.color = 'black');
});


// SORU 3
const userArray = [];
const addUser = document.getElementById('addUser');

addUser.addEventListener('click', function () {

    let userList = document.getElementById('userList');
    userList.innerHTML = ""
    let userName = document.getElementById('userName');

    userArray.push(userName.value)

    for (let i = 0; i < userArray.length; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = userArray[i]
        userList.appendChild(newLi)
    }
    userName.value = "";
});

const showUsers = document.getElementById('showUsers');

showUsers.addEventListener('click', function () {

    let userList = document.getElementById('userList');

    this.innerHTML == 'Kişileri Gizle'
        ? (userList.style.visibility = 'hidden', this.innerHTML = 'Kişileri Göster')
        : (userList.style.visibility = 'visible', this.innerHTML = 'Kişileri Gizle')
});

// SORU 4


const getName = document.getElementById('getName');

getName.addEventListener('click', function () {

    let userNameInput = document.getElementById('userNameInput');
    let userInfo = document.getElementById('userInfo');

    userInfo.innerHTML = userNameInput.value;
});


// SORU 5

const changeLocation = document.getElementById('changeLocation');

changeLocation.addEventListener('click', function () {

    let myDiv = document.querySelector('.section-images');

    myDiv.style.flexDirection == 'row' || myDiv.style.flexDirection == ''
        ? myDiv.style.flexDirection = 'column'
        : myDiv.style.flexDirection = 'row'

});



// SORU 6


const addGrade = document.getElementById('addGrade');
addGrade.addEventListener('click', function () {
    let grade = document.getElementById('grade').value;
    let userName = document.getElementById('gradeUser').value;
    let gradeList = document.getElementById('gradeList');

    if (userName && grade) {
        let newLi = document.createElement('li');
        newLi.innerHTML = `
        ${userName} <span>${grade}</span>
        <span class="close-button">
          <i class="fa-solid fa-xmark btn-close"></i>
        </span>
      `;
        gradeList.appendChild(newLi);
        const closeButton = newLi.querySelector('.btn-close');
        closeButton.addEventListener('click', function () {

            gradeList.removeChild(newLi);
        });
    }

});

