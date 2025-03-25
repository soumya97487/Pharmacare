document.addEventListener("DOMContentLoaded", function () {
  // Helper function to get query parameters from URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Get category and product name from URL parameters
  const category = getQueryParam("category") || "Infectious Diseases";
  const productNameParam = getQueryParam("product");

  // Set the "Back to Category" button link
  const backToCategoryBtn = document.getElementById("backToCategoryBtn");
  if (backToCategoryBtn) {
    backToCategoryBtn.href = `medicne.html?category=${encodeURIComponent(category)}`;
  }

  // Medicine data categorized
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

  // Find the selected product
  let selectedProduct = null;
  if (category && medicineData[category]) {
    selectedProduct = medicineData[category].find(item => item.name === productNameParam);
  }

  // Get HTML elements for product details
  const productImageElem = document.getElementById("productImage");
  const productNameElem = document.getElementById("productName");
  const productPriceElem = document.getElementById("productPrice");
  const productPurposeElem = document.getElementById("productPurpose");
  const buyNowBtn = document.getElementById("buyNowBtn");
  const addToCartBtn = document.getElementById("addToCartBtn");

  // Display product details if found
  if (selectedProduct) {
    productImageElem.src = selectedProduct.image;
    productNameElem.textContent = selectedProduct.name;
    productPriceElem.textContent = selectedProduct.price;
    productPurposeElem.textContent = "This medicine helps with the specified condition.";
  } else {
    productNameElem.textContent = "Product Not Found";
    productPriceElem.textContent = "N/A";
    productPurposeElem.textContent = "No details available for this product.";
  }

  // Buy Now button functionality
  if (buyNowBtn) {
    buyNowBtn.addEventListener("click", function () {
      alert("Redirecting to checkout for: " + productNameElem.textContent);
    });
  }

  // Add to Cart button functionality
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      alert(productNameElem.textContent + " added to cart.");
    });
  }
});
