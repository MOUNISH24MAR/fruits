let cartCount = 0;
let cartTotal = 0;
let cartItems = {};

function addToCart(name, price) {
    cartCount++;
    cartTotal += price;

    if (cartItems[name]) {
        cartItems[name].quantity++;
    } else {
        cartItems[name] = { price: price, quantity: 1 };
    }

    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").textContent = cartCount;
    document.getElementById("cart-total").textContent = cartTotal;

    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    for (let item in cartItems) {
        let li = document.createElement("li");
        li.textContent = `${item} x ${cartItems[item].quantity} = $${cartItems[item].price * cartItems[item].quantity}`;
        cartList.appendChild(li);
    }
}
