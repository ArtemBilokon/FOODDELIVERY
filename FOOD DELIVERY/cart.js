// ===== КОШИК ЗБЕРІГАЄТЬСЯ В localStorage =====

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ===== ДОДАТИ ДО КОШИКА =====
function addToCart(name, price, img) {
    let cart = getCart();

    cart.push({
        name: name,
        price: price,
        image: img
    });

    saveCart(cart);
    alert("Додано в кошик ✔");
}

// ===== ОНОВИТИ ВІДОБРАЖЕННЯ КОШИКА НА cart.html =====
function renderCart() {
    const container = document.getElementById("cart-items");
    const totalBlock = document.getElementById("cart-total");
    let cart = getCart();

    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.price} грн</p>
                </div>
                <button onclick="removeItem(${index})">✖</button>
            </div>
        `;
    });

    totalBlock.innerHTML = total + " грн";
}

// ===== ВИДАЛИТИ ТОВАР =====
function removeItem(i) {
    let cart = getCart();
    cart.splice(i, 1);
    saveCart(cart);
    renderCart();
}
