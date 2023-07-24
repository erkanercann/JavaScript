const products = document.querySelector('#main .products');
const goToCardBtn = document.getElementById('go-to-cart');
const closeCardBtn = document.getElementById('close-cart');


function addProductToDOM() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://fakestoreapi.com/products/');

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {

                const data = JSON.parse(this.responseText);
                console.log(data);
                data.forEach(product => {

                    products.innerHTML += `
                    <div class="product">
                    <img src="${product.image}" alt="" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-description">${product.description}</p>
                    </div>
                    <div class="price"><span class="priceCart">${product.price}</span>$</div>
                    <button id="add-to-cart" class="btn-primary">Add</button>
                </div>
                    `
                })
            }
            else {
                products.innerHTML = 'Something Went Wrong!'
            }
        }
    }
    xhr.send();

}
const total = [];
const clickedButton = [];

function addToCart(e) {
    const cartNumber = document.getElementById('number');
    const products = document.querySelector('#cart .products');
    const targetParent = e.target.parentElement;


    // PRİCE
    const totalPrice = document.getElementById('total-price');
    const money = Number(targetParent.children[2].children[0].innerText);
    total.push(money);
    totalPrice.innerText = total.reduce((acc, curr) => {
        return acc + curr
    }, 0).toFixed(2);


    if (e.target.tagName == 'BUTTON') {
        cartNumber.innerHTML = +cartNumber.innerHTML + 1;
    }

    if (clickedButton.includes(e.target)) {
        return;



    } else {
        products.innerHTML += `
        <div class="product">
                        <img src="${targetParent.children[0].src}" alt="" class="product-image">
                        <div class="product-info">
                            ${targetParent.children[1].children[0].innerHTML}
                        </div>
                        <div class="cart-buttons">
                            <button id="decrease" class="btn-cart">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <button id="increase" class="btn-cart">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <div class="price">
                        ${targetParent.children[2].innerHTML}
                        </div>
                    </div>
        
        `
        clickedButton.push(e.target);
    }




}


function showShoppingCart(e) {
    const shoppingCart = document.querySelector('#cart .container');

    if (e.currentTarget.id === 'go-to-cart') {
        shoppingCart.style.right = 0;
    } else {
        shoppingCart.style.right = -500 + "px";
    }

}


window.addEventListener('DOMContentLoaded', addProductToDOM);
products.addEventListener('click', addToCart);
goToCardBtn.addEventListener('click', showShoppingCart);
closeCardBtn.addEventListener('click', showShoppingCart);

