// script.js
document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll(".cart-item");
    const totalElement = document.getElementById("total-price");

    cartItems.forEach(function (item) {
        const quantityElement = item.querySelector(".item-quantity");
        const increaseBtn = item.querySelector(".increase");
        const decreaseBtn = item.querySelector(".decrease");
        const deleteBtn = item.querySelector(".delete-btn");
        const likeBtn = item.querySelector(".like-btn");

        let quantity = parseInt(quantityElement.textContent);

        // Increase quantity
        increaseBtn.addEventListener("click", function () {
            quantity++;
            quantityElement.textContent = quantity;
            updateTotal();
        });

        // Decrease quantity
        decreaseBtn.addEventListener("click", function () {
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotal();
            }
        });

        // Delete item
        deleteBtn.addEventListener("click", function () {
            item.remove();
            updateTotal();
        });

        // Like item
        likeBtn.addEventListener("click", function () {
            likeBtn.classList.toggle("liked");
        });
    });

    // Update the total price
    function updateTotal() {
        let total = 0;
        cartItems.forEach(function (item) {
            const priceElement = item.querySelector(".item-price");
            const quantityElement = item.querySelector(".item-quantity");
            const price = parseFloat(priceElement.textContent.replace("$", ""));
            const quantity = parseInt(quantityElement.textContent);
            total += price * quantity;
        });
        totalElement.textContent = "$" + total.toFixed(2);
    }
});
