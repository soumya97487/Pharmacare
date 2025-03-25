document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // Your existing data object
  // =========================
  const medicineData = {
    "Infectious Diseases": [
      { name: "Honitous", price: "$20", image: "images/medicines/syrup.jpeg" },
      { name: "D'Cold Total", price: "$25", image: "images/medicines/cold.jpeg" },
      { name: "Canesten Cream", price: "$15", image: "images/medicines/antifungal_c.jpeg" },
      { name: "Revital H", price: "$30", image: "images/medicines/immunity_booster.jpeg" },
      { name: "Azithromycin 250mg", price: "$22", image: "images/medicines/antibiotic_d.jpg" },
      { name: "Grilinctus", price: "$22", image: "images/medicines/syrup2.jpeg" },
      { name: "Cofsils", price: "$22", image: "images/medicines/Throat.webp" },
      { name: "Dicloran 50mg", price: "$22", image: "images/medicines/Throat2.webp" }
    ],
    "Neurology": [
      { name: "Syndopa Plus", price: "$50", image: "images/medicines/syndopa.jpg" },
      { name: "Qutan-25", price: "$28", image: "images/medicines/Qutan.jpg" },
      { name: "German's Memory Booster Care", price: "$40", image: "images/medicines/brain_health.jpg" },
      { name: "NEUROZEN", price: "$55", image: "images/medicines/Neurozen.webp" }
    ],
    "Gastric": [
      { name: "Pan 40", price: "$45", image: "images/medicines/Pan.jpg" },
      { name: "Gas-O-Fast Sachet - Active Jeera", price: "$50", image: "images/medicines/gasofast.jpg" },
      { name: "Eno Fruit Salt - Lemon Flavour", price: "$25", image: "images/medicines/Eno.jpg" },
      { name: "Digene Acidity & Gas Relief Tablets", price: "$55", image: "images/medicines/digene.jpg" }
    ],
    "Joint & Muscle": [
      { name: "Jointace DN", price: "$45", image: "images/medicines/jointace.jpg" },
      { name: "Altraday Capsules", price: "$50", image: "images/medicines/altraday.jpg" },
      { name: "Himalaya Rumalaya Forte Tablet", price: "$25", image: "images/medicines/rumalaya.jpg" },
      { name: "Volini gel 75mg", price: "$55", image: "images/medicines/volini.jpg" }
    ],
    "lungs": [
      { name: "Asthalin Inhaler 200MD", price: "$45", image: "images/medicines/asthalin.jpg" },
      { name: "Dr.Morepen Breathefree Vaporizer (VP 06)", price: "$50", image: "images/medicines/vaporizer.jpg" },
      { name: "Omron Compressor Nebulizer", price: "$25", image: "images/medicines/nebulizer.jpg" },
      { name: "OTRIVIN SALINE Nasal Spray 10ml", price: "$55", image: "images/medicines/otrivin.jpg" }
    ],
    "Heart": [
      { name: "Ecosprin 75 Tablet 14'S", price: "$45", image: "images/medicines/ecosprin.jpg" },
      { name: "Telma H 80mg Tablet 15'S", price: "$50", image: "images/medicines/telma.jpg" },
      { name: "Rozavel 10mg Tablet 10'S", price: "$25", image: "images/medicines/rozavel.jpg" },
      { name: "Rosuvas 5mg Tablet 15'S", price: "$55", image: "images/medicines/Rosuvas.jpg" }
    ],
    "Eye & Ear": [
      { name: "Moxicip Eye Drops 5ml", price: "$45", image: "images/medicines/moxicip.jpg" },
      { name: "Gatiquin P Eye Drops 10mlz", price: "$50", image: "images/medicines/gatiquin.jpg" },
      { name: "Candibiotic Plus Ear Drops 5ml", price: "$25", image: "images/medicines/candibiotic.jpg" },
      { name: "Johnsons's Paper Cotton Buds 75 's - 150 Swabs", price: "$55", image: "images/medicines/earbuds.jpg" }
    ],
    "Acne": [
      { name: "Aroma Magic Anti Acne Serum 30 ml", price: "$15", image: "images/skincare/aroma.jpg" },
      { name: "Adven Naturals D-Acne Face Wash 100 ml", price: "$12", image: "images/skincare/adven.jpg" },
      {
        name: "Gush Beauty Dart It Hydrocolloid Pimple Patches For Healing Acne, Zits And Blemishes - Super Star 1's",
        price: "$10",
        image: "images/skincare/patches.jpg"
      },
      { name: "Herbodaya Neem & Aloevera Soap 125 gm", price: "$8", image: "images/skincare/herbodaya.jpg" }
    ],
    "Anti-Aging cream": [
      { name: "Garnier Skin Natural Wrinkle Lift Anti-Ageing Cream 40 gm", price: "$30", image: "images/skincare/garnier.jpg" },
      { name: "Olay Age Protect Anti-Ageing Cream 40 gm", price: "$45", image: "images/skincare/olay.jpg" },
      { name: "Olay Night Cream- Regenerist Retinol 24 Moisturiser 50 gm", price: "$40", image: "images/skincare/retinol.jpg" },
      { name: "Blisskin Anti Aging Caviar Extract Peel Off Mask 500 gm", price: "$25", image: "images/skincare/mask.jpg" }
    ],
    "Dry Skin": [
      { name: "Dermistry Sensitive & Dry Skin Face Cream 50 ml", price: "$30", image: "images/skincare/dermistry.jpg" },
      { name: "CeraVe Moisturising Lotion For Dry To Very Dry Skin 236 ml", price: "$45", image: "images/skincare/cerave.jpg" },
      { name: "Nivea Milk Delights Face Wash for Dry Skin - Honey 100 ml", price: "$40", image: "images/skincare/nivea.jpg" },
      { name: "Veet Hair Removal Cream - Dry Skin 30 gm", price: "$25", image: "images/skincare/veet.jpg" }
    ],
    "Oily Skin": [
      { name: "Cetaphil Oily Skin Cleanser 125ml", price: "$30", image: "images/skincare/cetaphil.jpg" },
      { name: "Lacto Calamine Oil Balance for Oily Skin Lotion 30 ml", price: "$45", image: "images/skincare/lacto.jpg" },
      { name: "Neutrogena Deep Clean Facial Cleanser Normal to Oily Skin 200 ml", price: "$40", image: "images/skincare/neutrogena.jpg" },
      { name: "Skin Fx Superfood Oil Controlling Day Cream Best Moisturiser for Oily and Sensitive Skin 50 gm", price: "$25", image: "images/skincare/superfood.jpg" }
    ],
    "Sunscreens": [
      { name: "Mamaearth HydraGel Indian Sunscreen Gel - Aloe Vera & Raspberry 50 gm", price: "$30", image: "images/skincare/mamaearth.jpg" },
      { name: "Moha Sunscreen Spray (SPF 50 PA+++) With Rice Bran Oil 170 gm", price: "$45", image: "images/skincare/moha.jpg" },
      { name: "Uv Soft Cream SPF 30+ Sunscreen 50 g", price: "$40", image: "images/skincare/uvsoft.jpg" },
      { name: "KEYA SETH AROMATHERAPY, DEVICE OF DROP Umbrella Sunscreen Powder SPF 50 & PA+++ 50g", price: "$25", image: "images/skincare/keyaseth.jpg" }
    ],
    "Wound & Scar": [
      { name: "Dettol Antiseptic Liquid Disinfectant 250 ml", price: "$30", image: "images/skincare/dettol.jpg" },
      { name: "Dr. Morepen Burnol Dual Antiseptic Cream 15 gm", price: "$45", image: "images/skincare/Burnol.jpg" },
      { name: "Dr. Morepen Aid Adhesive Band Aid 150's", price: "$40", image: "images/skincare/bandaid.jpg" },
      { name: "Inostretch Intensive Scar and Anti Stretch Mark Cream 60 gm", price: "$25", image: "images/skincare/scar.jpg" }
    ],
    "Hair": [
      { name: "Scalpe Pro Daily Anti Dandruff Shampoo 100 ml", price: "$30", image: "images/skincare/scalp.jpg" },
      { name: "Kapiva Hair Rituals Tulsi Anti Hairfall Shampoo 250 ml", price: "$45", image: "images/skincare/hairfall.jpg" },
      { name: "Biotique Bhringraj Anti Hair Fall Therapeutic Hair Oil 120ml", price: "$40", image: "images/skincare/oil.jpg" },
      { name: "Dr. Batra's Hair Conditioner - Amla 200 ml", price: "$25", image: "images/skincare/conditioner.jpg" }
    ],
    "Medical Equipments": [
      { name: "Omron Automatic Blood Pressure Monitor (HEM-8712-A)", price: "$80", image: "images/equipments/omron.jpg" },
      { name: "Hicks Digital Thermometer - Regular", price: "$20", image: "images/equipments/hicks.jpg" },
      { name: "Fingertip Pulse Oximeter (MI303)", price: "$30", image: "images/equipments/oximeter.jpg" },
      { name: "Sahyog Wellness Acoustic Stethoscope (SWST01)", price: "$50", image: "images/equipments/stethoscope.jpg" },
      { name: "iGRiD Smart Weighing Scale Monitor (IGBWS-864)", price: "$300", image: "images/equipments/weight.jpg" },
      { name: "Omron Compressor Nebulizer", price: "$25", image: "images/medicines/nebulizer.jpg" },
      { name: "Accu-Chek Active Glucose Monitor with Free 10 Test Strips", price: "$250", image: "images/equipments/accucheck.jpg" },
      { name: "Amkay Hot Water Bag - Assorted Color 1's", price: "$200", image: "images/equipments/hot.jpg" }
    ]
  };
  // =========================
  // Wishlist & Cart arrays
  // =========================
  let wishlist = [];

  // =========================
  // Default Filters
  // =========================
  // You can change selectedCategory to "All" if you want to show all categories by default
  let selectedCategory = "Infectious Diseases";
  let selectedPriceRange = "all"; // "all" means no filter by price

  // =========================
  // Helper to parse "$xx" price
  // =========================
  function parsePrice(priceStr) {
    return parseFloat(priceStr.replace("$", "")) || 0;
  }

  // =========================
  // Display filtered products
  // =========================
  function displayFilteredProducts() {
    const productContainer = document.getElementById("productDisplay");
    productContainer.innerHTML = "";

    // We'll loop through each category in the data
    for (const catKey in medicineData) {
      // If the user has chosen "All" or the current category
      // (If you want "All" logic, just check if selectedCategory === "All" or catKey === selectedCategory)
      if (catKey === selectedCategory) {
        // For each product in that category
        medicineData[catKey].forEach(product => {
          const priceVal = parsePrice(product.price);

          // Filter by price range if selectedPriceRange != "all"
          if (selectedPriceRange !== "all") {
            const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
            if (priceVal < minPrice || priceVal > maxPrice) {
              return; // skip product if out of range
            }
          }

          // If we reach here, the product matches the category & price range
          const colDiv = document.createElement("div");
          colDiv.classList.add("col");

          const card = document.createElement("div");
          card.classList.add("card", "h-100", "d-flex", "flex-column");

          card.innerHTML = `
            <div class="ratio ratio-4x3">
              <img src="${product.image}" class="card-img-top" alt="${product.name}">
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <h6 class="card-title text-truncate">${product.name}</h6>
              <p class="card-text text-success fw-bold">${product.price}</p>
              <div class="d-flex justify-content-between mt-2">
                <button class="btn btn-outline-danger wishlist-btn">
                  <i class="bi bi-heart"></i>
                </button>
                <button class="btn btn-info view-details-btn">
                  View Details
                </button>
              </div>
            </div>
          `;

          // Wishlist
          const wishlistBtn = card.querySelector(".wishlist-btn");
          wishlistBtn.addEventListener("click", function () {
            if (!wishlist.some(item => item.name === product.name)) {
              wishlist.push(product);
              updateWishlistCount();
            }
            // Show toast
            const toastEl = document.getElementById('wishlistToast');
            if (toastEl) {
              const toast = new bootstrap.Toast(toastEl);
              toast.show();
            }
          });

          // View Details
          const viewDetailsBtn = card.querySelector(".view-details-btn");
          viewDetailsBtn.addEventListener("click", function () {
            // Pass category & product name in query string
            const url = `details.html?category=${encodeURIComponent(catKey)}&product=${encodeURIComponent(product.name)}`;
            window.location.href = url;
          });

          colDiv.appendChild(card);
          productContainer.appendChild(colDiv);
        });
      }
    }
  }

  // =========================
  // Update wishlist badge
  // =========================
  function updateWishlistCount() {
    const countElem = document.getElementById('wishlistCount');
    if (!countElem) return;
    if (wishlist.length > 0) {
      countElem.textContent = wishlist.length;
      countElem.classList.remove("d-none");
    } else {
      countElem.textContent = "0";
      countElem.classList.add("d-none");
    }
  }

  // =========================
  // Update cart badge
  // =========================
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElem = document.getElementById('cartCount');
    if (!cartCountElem) return;
    if (count > 0) {
      cartCountElem.textContent = count;
      cartCountElem.classList.remove("d-none");
    } else {
      cartCountElem.textContent = "0";
      cartCountElem.classList.add("d-none");
    }
  }

  // =========================
  // Add to Cart
  // =========================
  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex(item => item.name === product.name);
    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      const productToAdd = { ...product, quantity: 1 };
      cart.push(productToAdd);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }

  // =========================
  // Wishlist Modal
  // =========================
  const wishlistModal = document.getElementById('wishlistModal');
  if (wishlistModal) {
    wishlistModal.addEventListener('show.bs.modal', updateWishlistModal);
  }

  function updateWishlistModal() {
    const wishlistContainer = document.getElementById('wishlistItems');
    if (!wishlistContainer) return;

    wishlistContainer.innerHTML = "";
    if (wishlist.length === 0) {
      wishlistContainer.innerHTML = '<p class="text-center">No items in your wishlist.</p>';
      return;
    }

    // "Select All" + "Add Selected to Cart"
    const controlDiv = document.createElement("div");
    controlDiv.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-3");

    const selectAllDiv = document.createElement("div");
    selectAllDiv.classList.add("form-check");
    selectAllDiv.innerHTML = `
      <input class="form-check-input" type="checkbox" id="selectAllCheckbox">
      <label class="form-check-label" for="selectAllCheckbox">Select All</label>
    `;

    const addSelectedBtn = document.createElement("button");
    addSelectedBtn.classList.add("btn", "btn-primary", "btn-sm");
    addSelectedBtn.textContent = "Add Selected to Cart";

    controlDiv.appendChild(selectAllDiv);
    controlDiv.appendChild(addSelectedBtn);
    wishlistContainer.appendChild(controlDiv);

    const selectAllCheckbox = controlDiv.querySelector("#selectAllCheckbox");
    selectAllCheckbox.addEventListener("change", function () {
      const itemCheckboxes = wishlistContainer.querySelectorAll(".wishlist-checkbox");
      itemCheckboxes.forEach(cb => {
        cb.checked = selectAllCheckbox.checked;
      });
    });

    addSelectedBtn.addEventListener("click", function () {
      const itemCheckboxes = wishlistContainer.querySelectorAll(".wishlist-checkbox");
      wishlist.forEach((product, index) => {
        if (itemCheckboxes[index].checked) {
          addToCart(product);
        }
      });
    });

    // Render each wishlisted product
    wishlist.forEach(product => {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col");

      const card = document.createElement("div");
      card.classList.add("card", "h-100");
      card.innerHTML = `
        <div class="ratio ratio-4x3">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
        </div>
        <div class="card-body">
          <div class="form-check mb-2">
            <input class="form-check-input wishlist-checkbox" type="checkbox">
            <label class="form-check-label">Select</label>
          </div>
          <h6 class="card-title text-truncate">${product.name}</h6>
          <p class="card-text text-success fw-bold">${product.price}</p>
        </div>
        <div class="card-footer text-center">
          <button class="btn btn-primary btn-sm add-to-cart-from-wishlist">
            Add to Cart
          </button>
        </div>
      `;
      card.querySelector(".add-to-cart-from-wishlist").addEventListener("click", function () {
        addToCart(product);
      });
      colDiv.appendChild(card);
      wishlistContainer.appendChild(colDiv);
    });
  }

  // =========================
  // Initial Load
  // =========================
  // Show the default category with no price filter
  displayFilteredProducts();
  updateWishlistCount();
  updateCartCount();

  // =========================
  // Category Dropdown Items
  // =========================
  document.querySelectorAll(".dropdown-item[data-category]").forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      selectedCategory = this.getAttribute("data-category"); // e.g. "Neurology", "Gastric"
      displayFilteredProducts();
    });
  });

  // If you have a separate button for "Medical Equipments"
  const medicalBtn = document.getElementById("medicalEquipmentsBtn");
  if (medicalBtn) {
    medicalBtn.addEventListener("click", function () {
      selectedCategory = "Medical Equipments";
      displayFilteredProducts();
    });
  }

  // =========================
  // Price Range Dropdown Items
  // =========================
  // e.g. <a class="dropdown-item" href="#" data-range="20-40">$20-$40</a>
  const priceRangeMenu = document.getElementById("priceRangeDropdown");
  if (priceRangeMenu) {
    priceRangeMenu.querySelectorAll(".dropdown-item").forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        selectedPriceRange = this.getAttribute("data-range"); // e.g. "all", "0-20", "40-60"
        displayFilteredProducts();
      });
    });
  }
});
