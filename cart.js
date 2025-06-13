// cart.js

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productName} added to cart!`);
}

function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    const totalAmount = document.getElementById("total-amount");
    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalAmount.innerText = "Rs. 0";
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        itemDiv.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>Rs. ${item.price * item.quantity}</span>
        `;
        cartContainer.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    totalAmount.innerText = `Rs. ${total}`;
}

function clearCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}
