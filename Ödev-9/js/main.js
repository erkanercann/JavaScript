const sidebarClose = document.getElementById('sidebar-close');
const shoppingCartBtn = document.getElementById('show-shopping-cart');
const filterProductsBtn = document.querySelector('#filter-button');
const buyProducts = document.getElementById('buy-products');









// Get Data From products.json
function getData(endpoint) {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', endpoint);

        xhr.onreadystatechange = function () {

            if (this.readyState === 4) {

                if (this.status === 200) {

                    resolve(JSON.parse(this.responseText));

                } else {
                    reject('Something Went Wrong!');
                }

            }
        }
        xhr.send();
    })
}
// Set Data to DOM
function addProductsToDOM() {

    const products = document.querySelector('.products');

    getData('products.json').then(
        (data) => {
            data.forEach(product => {

                products.innerHTML += `
            <div class="products__item">
                <img src="${product.picture}" alt="${product.name}" class="products__item__image">
                <div class="products__item__body">
                    <p class="products__item__title">${product.name} kg</p>
                    
                    <div class="products__item__buttons">
                        <div class="products__item__buttons__quantity">
                            <i class="decrease fa-solid fa-minus"></i>
                            <span id="quantity">1</span>
                            <i class="increase fa-solid fa-plus"></i>
                        </div>
                        <div class="products__item__price">${product.price}<i class="fa-solid fa-turkish-lira-sign"></i>
                        </div>
                        <button id='add-to-cart' class="products__item__buttons__add-to-cart">Sepete Ekle</button>
                    </div>
                </div>
            </div>
                            `
            });

            const addToCartBtn = document.querySelectorAll('#add-to-cart');
            addToCartBtn.forEach(btn => {


                btn.addEventListener('click', addToCart)

            });
            const increase = document.querySelectorAll('.increase');
            const decrease = document.querySelectorAll('.decrease');
            increase.forEach(btn => {
                btn.addEventListener('click', increaseQuantity);
            });
            decrease.forEach(btn => {
                btn.addEventListener('click', decreaseQuantity);
            })


        }
    )
}

// Show Cart
function showCart(e) {

    const shoppingCart = document.getElementById('shopping-cart');



    if (e.currentTarget.id === 'sidebar-close') {

        shoppingCart.style.right = '-580px';

        document.body.style.backgroundColor = '#f1ede7';
        for (let i = 0; i < 9; i++) {
            document.images[i].style.opacity = '1'
        }


    } else {
        shoppingCart.style.right = '0';

        document.body.style.backgroundColor = 'rgba(0,0,0,0.5)'
        for (let i = 0; i < 9; i++) {
            document.images[i].style.opacity = '0.3'
        }
    }


}

const total = [];
const checkedButtons = [];

// Add item to cart

function addToCart(e) {

    const shoppingCart = document.querySelector('#shopping-cart .products');
    const countIcon = document.getElementById('count');
    const addToCartBtn = document.querySelectorAll('#add-to-cart');
    const totalDOM = document.getElementById('total-price');
    const money = e.target.previousElementSibling.innerText;
    const quantity = e.target.parentElement.querySelector('#quantity').innerText;
    if (checkedButtons.includes(e.target)) {

        alert('Bu ürün sepetinizde mevcut!');
        return;
    }
    addToCartBtn.forEach((btn, index) => {
        if (btn === e.target) {

            getData('products.json').then(
                function (data) {
                    shoppingCart.innerHTML += `
                <div class="products__item">
                    <button id='remove-item' class="products__item__remove">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <img src="${data[index].picture}" alt="${data[index].name}$" class="products__item__image">
                    <div class="products__item__body">
                        <p class="products__item__title">${data[index].name} kg</p>
                        
                        <div id="price" class="products__item__price">
                            ${e.target.previousElementSibling.innerHTML}
                        </div>
                        <div class="products__item__buttons">
                        <div class="products__item__buttons__quantity">
                           ${e.target.previousElementSibling.previousElementSibling.innerHTML}
                           </div>
                        </div>
                    </div>
                </div>

                `
                    // Print İnner
                    document.getElementById('print-body').innerHTML += `
                    <tr class="print-item">
                            <td class="print-item__title">
                                 ${data[index].name}
                            </td>
                            <td class="print-item__price">
                                 ${e.target.previousElementSibling.innerText}
                                <i class="fa-solid fa-turkish-lira-sign"></i>
                            </td>
                            <td class="print-item__quanity">
                             ${e.target.previousElementSibling.previousElementSibling.querySelector('#quantity').innerText}
                            </td>
                     </tr>
                
                `
                    const removeItems = document.querySelectorAll('#remove-item');
                    removeItems.forEach(button => {
                        button.addEventListener('click', removeItem)
                    })

                });

            total.push(quantity * Number(money));

            totalDOM.textContent = total.reduce((acc, cur) => {

                return acc + cur
            }, 0);


            document.getElementById('print-total-price').innerHTML =
                total.reduce((acc, cur) => {

                    return acc + cur
                }, 0) +
                '<i class="fa-solid fa-turkish-lira-sign"></i>'

            checkedButtons.push(e.target);
            countIcon.innerText = +countIcon.innerText + 1;
        }
    })


}

// İncrease and Decrease Quantity

function increaseQuantity(e) {
    const quantity = e.target.previousElementSibling;
    quantity.innerText = +quantity.innerText + 1;


}
function decreaseQuantity(e) {
    const quantity = e.target.nextElementSibling;

    if (quantity.innerText == 1) {
        return;
    }

    quantity.innerText = +quantity.innerText - 1;

}


// Filter Products

function filterButton() {

    const filterProductsInput = document.querySelector('#search-item').value.toLowerCase();
    const productsNames = document.body.querySelectorAll('.products__item__title');


    productsNames.forEach(product => {

        const parent = product.parentElement.parentElement;
        if (product.textContent.toLocaleLowerCase().includes(filterProductsInput)) {

            parent.style.display = 'block'
        } else {
            parent.style.display = 'none'
        }

    });
}


// Remove Product From The Shopping Cart

const targets = [];

function removeItem(e) {


    // checked buttons remove
    targets.push(e.target);

    targets.forEach((target, index) => {


        checkedButtons.splice(index, 1);

    });


    // REMOVE ITEM
    const parent = e.target.parentElement.parentElement;
    parent.remove();

    // TOTAL PRİCE UPDATE
    const totalDOM = document.getElementById('total-price');
    const targetPrice = parent.querySelector('#price').innerText
    const quantity = parent.querySelector('#quantity').innerText;

    total.forEach((price, index) => {

        if (price == (targetPrice * quantity)) {

            total.splice(index, 1)
        }

    });

    totalDOM.innerText = total.reduce((acc, cur) => {
        return acc + cur
    }, 0);

    // CART COUNT UPDATE
    const count = document.getElementById('count');
    count.innerText -= 1;


    // Update print 
    const itemText = parent.querySelector('.products__item__title').innerText;
    const printItems = document.querySelectorAll('.print-item__title');

    printItems.forEach(item => {

        if (itemText.includes(item.innerText.trim(''))) {

            const printPrice = item.parentElement.querySelector('.print-item__price').innerText;
            const printItemQuanity = item.parentElement.querySelector('.print-item__quanity').innerText;

            const totalPrintPrice = document.getElementById('print-total-price');
            totalPrintPrice.innerText -= printPrice * printItemQuanity;
            totalPrintPrice.innerHTML += '<i class="fa-solid fa-turkish-lira-sign"></i>';
            item.parentElement.remove();
        }
    })

}




// Buy All
function buyAllProducts() {

    print();
}


// Event Listeners
document.addEventListener('DOMContentLoaded', addProductsToDOM);
sidebarClose.addEventListener('click', showCart);
shoppingCartBtn.addEventListener('click', showCart);
filterProductsBtn.addEventListener('click', filterButton);
buyProducts.addEventListener('click', buyAllProducts);
window.addEventListener('scroll', function () {

    const header = document.getElementById('header-main');

    this.scrollY > 500
        ? header.style.top = '-500px'
        : header.style.top = '0'


    if (this.scrollY > 200 && this.scrollY < 500) {
        header.style.opacity = '0.8';
    } else if (this.scrollY >= 500) {
        header.style.opacity = '0';
    } else {
        header.style.opacity = '1';
    }

});
