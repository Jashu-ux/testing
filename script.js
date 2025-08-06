let cart = [];
let cartCount = 0;

const updateCartCount = () => {
    document.getElementById("cart-count").innerText = cartCount;
};

const updateCartItems = () => {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";

    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price;
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
    });

    document.getElementById("total-price").innerText = totalPrice;
};

const toggleCart = () => {
    const cartPopup = document.getElementById("cart-popup");
    cartPopup.style.display = cartPopup.style.display === "flex" ? "none" : "flex";
};

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
        const product = {
            id: event.target.dataset.id,
            name: event.target.dataset.name,
            price: parseFloat(event.target.dataset.price)
        };

        cart.push(product);
        cartCount++;
        updateCartCount();
    });
});

document.getElementById("checkout").addEventListener("click", () => {
    alert("Proceeding to checkout...");
    // In a real app, you would process the checkout here.
    cart = [];
    cartCount = 0;
    updateCartCount();
    toggleCart();
});

updateCartCount();
