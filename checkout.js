document.addEventListener('DOMContentLoaded', function () {
    // ✅ Load total amount from localStorage
    const totalAmountElement = document.getElementById('amount');
    const finalAmount = localStorage.getItem('finalAmount');

    if (finalAmount) {
        totalAmountElement.textContent = `$${finalAmount}`;
    } else {
        totalAmountElement.textContent = `$0.00`;
    }

    // ✅ Toggle address form on click
    document.getElementById('addAddressBtn').addEventListener('click', function() {
        document.getElementById('addressForm').classList.toggle('d-none');
    });

    // ✅ Handle address form submission
    document.getElementById('deliveryAddressForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('New address added successfully!');
        document.getElementById('addressForm').classList.add('d-none');
    });

    // ✅ Show UPI section if selected
    document.getElementById('paymentMethod').addEventListener('change', function() {
        const upiSection = document.getElementById('upiSection');
        if (this.value === 'upi') {
            upiSection.classList.remove('d-none');
        } else {
            upiSection.classList.add('d-none');
        }
    });

    // ✅ Handle payment form submission
    document.getElementById('paymentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert(`Total amount paying: ${totalAmountElement.textContent}`);

        // ✅ Show order confirmation modal
        const orderConfirmationModal = new bootstrap.Modal(document.getElementById('orderConfirmationModal'));
        orderConfirmationModal.show();

        // ✅ Clear cart after order
        clearCart();
    });

    // ✅ Clear cart after order completion
    function clearCart() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            localStorage.removeItem(`cart_${currentUser.username}`);
        } else {
            localStorage.removeItem('cart');
        }
        localStorage.removeItem('finalAmount'); // Remove stored total price
    }
});
