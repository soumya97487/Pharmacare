  
document.addEventListener("DOMContentLoaded", function() {
    // Check for a logged-in user
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // Use a user-specific key if logged in; otherwise, use a generic key
    let cartKey = currentUser ? `cart_${currentUser.username}` : "cart";
  
    // If a user is logged in, merge any items from the generic cart into the user-specific cart
    if (currentUser) {
      let genericCart = JSON.parse(localStorage.getItem("cart")) || [];
      let userCart = JSON.parse(localStorage.getItem(cartKey)) || [];
      
      if (genericCart.length > 0) {
        genericCart.forEach(item => {
          // Check if the item already exists in the user-specific cart
          const existingIndex = userCart.findIndex(uItem => uItem.name === item.name);
          if (existingIndex !== -1) {
            userCart[existingIndex].quantity += item.quantity;
          } else {
            userCart.push(item);
          }
        });
        // Save the merged cart and clear the generic cart
        localStorage.setItem(cartKey, JSON.stringify(userCart));
        localStorage.removeItem("cart");
      }
    }
  
    // Retrieve the cart data from localStorage using the determined key
    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
  
    // Function to update the cart counter (badge)
    function updateCartCount() {
      const cartCountElem = document.getElementById('cartCount');
      const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
      if (totalCount > 0) {
        cartCountElem.textContent = totalCount;
        cartCountElem.classList.remove('d-none');
      } else {
        cartCountElem.textContent = totalCount;
        cartCountElem.classList.add('d-none');
      }
    }
  
    // Function to render the list of cart items
    function renderCart() {
      const cartProductsContainer = document.getElementById("cartProducts");
      cartProductsContainer.innerHTML = "";
  
      if (cart.length === 0) {
        cartProductsContainer.innerHTML = '<p class="text-center">No products in your cart.</p>';
        renderSummary();
        return;
      }
  
      cart.forEach((product, index) => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col");
  
        colDiv.innerHTML = `
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${product.image}" class="img-fluid rounded-start" alt="${product.name}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text text-success fw-bold">${product.price}</p>
                  <div class="d-flex align-items-center mb-2">
                    <span>Quantity:</span>
                    <button class="btn btn-outline-secondary btn-sm ms-2" data-index="${index}" id="decreaseBtn-${index}">
                      <i class="bi bi-dash"></i>
                    </button>
                    <span id="quantity-${index}" class="mx-2">${product.quantity}</span>
                    <button class="btn btn-outline-secondary btn-sm" data-index="${index}" id="increaseBtn-${index}">
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>
                  <button class="btn btn-danger btn-sm remove-btn" data-index="${index}">Remove</button>
                </div>
              </div>
            </div>
          </div>
        `;
        cartProductsContainer.appendChild(colDiv);
      });
      renderSummary();
      attachQuantityEvents();
      attachRemoveEvents();
    }
  
    // Function to render the pricing summary
    function renderSummary() {
      let totalPrice = 0;
      cart.forEach(item => {
        // Parse the price (assuming it starts with '$')
        const price = parseFloat(item.price.replace('$', ''));
        totalPrice += price * item.quantity;
      });
      const gst = totalPrice * 0.05; // 5% GST
      const deliveryCharges = totalPrice > 0 ? 10 : 0;
      const finalCharges = totalPrice + gst + deliveryCharges;
    
      document.getElementById("totalPrice").textContent = `$${totalPrice.toFixed(2)}`;
      document.getElementById("gstAmount").textContent = `$${gst.toFixed(2)}`;
      document.getElementById("deliveryCharges").textContent = `$${deliveryCharges.toFixed(2)}`;
      document.getElementById("finalCharges").textContent = `$${finalCharges.toFixed(2)}`;
    
      // ✅ Save the final amount for checkout
      localStorage.setItem("finalAmount", finalCharges.toFixed(2));
    }
    
  
    // Attach event listeners for increasing and decreasing quantities
    function attachQuantityEvents() {
      cart.forEach((product, index) => {
        const increaseBtn = document.getElementById(`increaseBtn-${index}`);
        const decreaseBtn = document.getElementById(`decreaseBtn-${index}`);
  
        if (increaseBtn) {
          increaseBtn.addEventListener("click", function() {
            cart[index].quantity += 1;
            updateCart();
          });
        }
  
        if (decreaseBtn) {
          decreaseBtn.addEventListener("click", function() {
            if (cart[index].quantity > 1) {
              cart[index].quantity -= 1;
              updateCart();
            }
          });
        }
      });
    }
  
    // Attach event listeners to remove buttons
    function attachRemoveEvents() {
      const removeButtons = document.querySelectorAll(".remove-btn");
      removeButtons.forEach(button => {
        button.addEventListener("click", function() {
          const index = this.getAttribute("data-index");
          cart.splice(index, 1);
          updateCart();
        });
      });
    }
  
    // Function to update localStorage and re-render the cart and counter
    function updateCart() {
      localStorage.setItem(cartKey, JSON.stringify(cart));
      updateCartCount();
      renderCart();
    }
  
    // Initial rendering of the cart and update of the cart counter
    updateCartCount();
    renderCart();
  });
  