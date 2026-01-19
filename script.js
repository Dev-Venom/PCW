// Sample product data (front‑end only)
// Uses local image files from the "images" folder
const products = [
  // Mobiles
  {
    id: 1,
    name: "Apple iPhone 15 (128 GB, Blue)",
    category: "mobile",
    image: "images/iphone15.jpg",
    amazonPrice: 78999,
    amazonMrp: 79999,
    flipkartPrice: 77999,
    flipkartMrp: 79999,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra (256 GB, Black)",
    category: "mobile",
    image: "images/galaxy-s24-ultra.jpg",
    amazonPrice: 119999,
    amazonMrp: 124999,
    flipkartPrice: 117999,
    flipkartMrp: 124999,
  },
  {
    id: 3,
    name: "OnePlus 12 5G (12 GB, 256 GB, Green)",
    category: "mobile",
    image: "images/oneplus-12.jpg",
    amazonPrice: 64999,
    amazonMrp: 69999,
    flipkartPrice: 63999,
    flipkartMrp: 69999,
  },

  // Laptops
  {
    id: 4,
    name: "HP Victus Gaming Laptop Ryzen 7, 16GB, 512GB SSD",
    category: "laptop",
    image: "images/hp-victus.jpg",
    amazonPrice: 82999,
    amazonMrp: 89999,
    flipkartPrice: 79999,
    flipkartMrp: 89999,
  },
  {
    id: 5,
    name: "Apple MacBook Air M2 (8GB, 256GB, Midnight)",
    category: "laptop",
    image: "images/macbook-air-m2.jpg",
    amazonPrice: 104999,
    amazonMrp: 109999,
    flipkartPrice: 102999,
    flipkartMrp: 109999,
  },
  {
    id: 6,
    name: "ASUS ROG Strix Gaming Laptop (RTX 4060, 16GB, 1TB SSD)",
    category: "laptop",
    image: "images/asus-rog-strix.jpg",
    amazonPrice: 129999,
    amazonMrp: 139999,
    flipkartPrice: 127999,
    flipkartMrp: 139999,
  },

  // Headphones
  {
    id: 7,
    name: "boAt Airdopes 141 Bluetooth Headset (Black)",
    category: "headphone",
    image: "images/boat-airdopes-141.jpg",
    amazonPrice: 1299,
    amazonMrp: 2990,
    flipkartPrice: 1199,
    flipkartMrp: 2990,
  },
  {
    id: 8,
    name: "Sony WH‑1000XM5 Wireless Noise Cancelling Headphones",
    category: "headphone",
    image: "images/sony-wh-1000xm5.jpg",
    amazonPrice: 29990,
    amazonMrp: 34990,
    flipkartPrice: 28990,
    flipkartMrp: 34990,
  },
  {
    id: 9,
    name: "JBL Tune 760NC Over‑Ear ANC Headphones",
    category: "headphone",
    image: "images/jbl-760nc.jpg",
    amazonPrice: 7499,
    amazonMrp: 9999,
    flipkartPrice: 7299,
    flipkartMrp: 9999,
  },

  // Watches
  {
    id: 10,
    name: "Apple Watch Series 9 GPS 41mm (Midnight)",
    category: "watch",
    image: "images/apple-watch-series-9.jpg",
    amazonPrice: 41999,
    amazonMrp: 44999,
    flipkartPrice: 40999,
    flipkartMrp: 44999,
  },
  {
    id: 11,
    name: "Samsung Galaxy Watch6 Bluetooth (44mm, Graphite)",
    category: "watch",
    image: "images/galaxy-watch6.jpg",
    amazonPrice: 29999,
    amazonMrp: 32999,
    flipkartPrice: 28999,
    flipkartMrp: 32999,
  },
  {
    id: 12,
    name: "Noise ColorFit Pro Smartwatch (1.69\" Display)",
    category: "watch",
    image: "images/noise-colorfit-pro.jpg",
    amazonPrice: 2499,
    amazonMrp: 4999,
    flipkartPrice: 2299,
    flipkartMrp: 4999,
  },

  // Cameras
  {
    id: 13,
    name: "Canon EOS 1500D 24.1MP DSLR Camera (18‑55mm Lens)",
    category: "camera",
    image: "images/canon-1500d.jpg",
    amazonPrice: 36999,
    amazonMrp: 42999,
    flipkartPrice: 35999,
    flipkartMrp: 42999,
  },
  {
    id: 14,
    name: "Sony Alpha ILCE‑6400 Mirrorless Camera (16‑50mm Lens)",
    category: "camera",
    image: "images/sony-a6400.jpg",
    amazonPrice: 81999,
    amazonMrp: 86999,
    flipkartPrice: 80999,
    flipkartMrp: 86999,
  },
  {
    id: 15,
    name: "GoPro HERO12 Black Action Camera",
    category: "camera",
    image: "images/gopro-hero12.jpg",
    amazonPrice: 42999,
    amazonMrp: 45999,
    flipkartPrice: 41999,
    flipkartMrp: 45999,
  },
];

let currentCategory = "all";

function formatINR(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

function createProductCard(product) {
  const wrapper = document.createElement("article");
  wrapper.className = "product-card";

  wrapper.innerHTML = `
    <div class="product-image-wrapper">
      <img src="${product.image}" alt="${product.name}" class="product-image" />
    </div>
    <h3 class="product-title">${product.name}</h3>
    <p class="product-meta">Category: ${product.category}</p>

    <div class="price-row">
      <div class="store-price">
        <div class="store-info">
          <span class="store-tag store-amazon">Amazon</span>
        </div>
        <div>
          <span class="price-value">${formatINR(product.amazonPrice)}</span>
          <span class="price-secondary">${formatINR(product.amazonMrp)}</span>
        </div>
      </div>

      <div class="store-price">
        <div class="store-info">
          <span class="store-tag store-flipkart">Flipkart</span>
        </div>
        <div>
          <span class="price-value">${formatINR(product.flipkartPrice)}</span>
          <span class="price-secondary">${formatINR(product.flipkartMrp)}</span>
        </div>
      </div>
    </div>

    <div class="btn-row">
      <a href="https://www.amazon.in" target="_blank" class="btn-link btn-amazon">
        View on Amazon
      </a>
      <a href="https://www.flipkart.com" target="_blank" class="btn-link btn-flipkart">
        View on Flipkart
      </a>
    </div>
  `;

  return wrapper;
}

function renderProducts(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  if (!list.length) {
    grid.innerHTML =
      '<p style="padding:0.5rem;font-size:0.9rem;color:#6b7280;">No products found. Try a different keyword or category.</p>';
    return;
  }
  list.forEach((p) => grid.appendChild(createProductCard(p)));
}

function applyFilters() {
  const searchQuery = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();

  let filtered = products;

  if (currentCategory !== "all") {
    filtered = filtered.filter((p) => p.category === currentCategory);
  }

  if (searchQuery) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.category.toLowerCase().includes(searchQuery)
    );
  }

  renderProducts(filtered);
}

function handleSearch() {
  applyFilters();
}

function filterByCategory(category) {
  currentCategory = category;
  const chips = document.querySelectorAll(".chip");
  chips.forEach((chip) => {
    if (chip.getAttribute("data-category") === category) {
      chip.classList.add("active");
    } else if (category === "all" && chip.getAttribute("data-category") === "all") {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });
  applyFilters();
}

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);

  // Live search on typing
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      handleSearch();
    } else {
      applyFilters();
    }
  });
});
