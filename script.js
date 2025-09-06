'use strict';

// بيانات المنتجات
const products = [
    {
        id: 1,
        image: './assets/images/product-01.jpg',
        alt: 'Facial cleanser',
        price: 26.00,
        title: 'Facial cleanser',
        description: 'Gentle daily facial cleanser that removes dirt, oil, and makeup while maintaining your skin\'s natural moisture balance.',
        features: ['Gentle formula', 'Suitable for all skin types', 'Removes makeup', 'Non-drying', 'Dermatologist tested']
    },
    {
        id: 2,
        image: './assets/images/product-02.jpg',
        alt: 'Bio-shroom Rejuvenating Serum',
        price: 29.00,
        title: 'Bio-shroom Rejuvenating Serum',
        description: 'Powerful anti-aging serum with mushroom extracts that helps reduce fine lines and improve skin texture.',
        features: ['Anti-aging properties', 'Mushroom extracts', 'Reduces fine lines', 'Improves texture', 'Lightweight formula']
    },
    {
        id: 3,
        image: './assets/images/product-03.jpg',
        alt: 'Coffee Bean Caffeine Eye Cream',
        price: 29.00,
        title: 'Coffee Bean Caffeine Eye Cream',
        description: 'Energizing eye cream with caffeine and coffee bean extract to reduce puffiness and dark circles.',
        features: ['Caffeine formula', 'Reduces puffiness', 'Diminishes dark circles', 'Cooling effect', 'Fast absorption']
    },
    {
        id: 4,
        image: './assets/images/product-04.jpg',
        alt: 'Facial cleanser',
        price: 29.00,
        title: 'Facial cleanser',
        description: 'Deep cleansing facial cleanser with natural ingredients for a fresh, clean feeling.',
        features: ['Deep cleansing', 'Natural ingredients', 'Fresh feeling', 'Balances pH', 'Gentle exfoliation']
    },
    {
        id: 5,
        image: './assets/images/product-05.jpg',
        alt: 'Coffee Bean Caffeine Eye Cream',
        price: 29.00,
        oldPrice: '$39.00',
        discount: '-20%',
        title: 'Coffee Bean Caffeine Eye Cream',
        description: 'Premium eye cream with enhanced caffeine formula for maximum anti-aging benefits.',
        features: ['Enhanced caffeine', 'Maximum anti-aging', 'Premium formula', 'Reduces wrinkles', 'Firms skin']
    },
    {
        id: 6,
        image: './assets/images/product-07.jpg',
        alt: 'Universal Cleansing Oil',
        price: 22.00,
        title: 'Universal Cleansing Oil',
        description: 'Versatile cleansing oil that effectively removes all types of makeup and impurities.',
        features: ['Universal formula', 'Removes all makeup', 'Oil-based cleansing', 'Moisturizing', 'Gentle on skin']
    },
    {
        id: 7,
        image: './assets/images/product-08.jpg',
        alt: 'Green Tea Cleansing Balm',
        price: 19.50,
        title: 'Green Tea Cleansing Balm',
        description: 'Soothing cleansing balm with green tea extract for a calming and refreshing cleanse.',
        features: ['Green tea extract', 'Soothing formula', 'Calming effect', 'Refreshing cleanse', 'Antioxidant rich']
    },
    {
        id: 8,
        image: './assets/images/product-09.jpg',
        alt: 'Hydrating Face Mist',
        price: 21.00,
        title: 'Hydrating Face Mist',
        description: 'Refreshing face mist that provides instant hydration and a dewy glow throughout the day.',
        features: ['Instant hydration', 'Dewy glow', 'Refreshing mist', 'All-day moisture', 'Portable size']
    },
    {
        id: 9,
        image: './assets/images/product-10.jpg',
        alt: 'Pure Radiance Oil',
        price: 18.00,
        title: 'Pure Radiance Oil',
        description: 'Luxurious facial oil that enhances your natural glow and provides deep nourishment.',
        features: ['Luxurious formula', 'Natural glow', 'Deep nourishment', 'Lightweight oil', 'Non-greasy']
    },
    {
        id: 10,
        image: './assets/images/product-11.jpg',
        alt: 'Vitamin C Serum',
        price: 24.50,
        title: 'Vitamin C Serum',
        description: 'Brightening vitamin C serum that helps fade dark spots and evens skin tone.',
        features: ['Vitamin C formula', 'Brightens skin', 'Fades dark spots', 'Evens skin tone', 'Antioxidant protection']
    }
];

// دالة لإنشاء بطاقة منتج واحدة
function createProductCard(product) {
    const card = document.createElement('li');
    card.classList.add('scrollbar-item');

    let oldPriceHtml = product.oldPrice ? `<del class="del">${product.oldPrice}</del>` : '';
    let discountBadge = product.discount ? `<span class="badge">${product.discount}</span>` : '';

    let starsHtml = '';

    card.innerHTML = `
        <div class="shop-card">
            <div class="card-banner">
                <img src="${product.image}" alt="${product.alt}" class="img-cover">
                ${discountBadge}
                <div class="card-actions">
                    <button class="action-btn add-to-cart-btn" aria-label="add to cart" data-id="${product.id}">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                    <button class="action-btn" aria-label="add to wishlist">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="action-btn" aria-label="compare">
                        <i class="fas fa-sync-alt"></i>
                    </button>
                </div>
            </div>
            <div class="card-content">
                <div class="price">
                    ${oldPriceHtml}
                    <span class="span">$${product.price.toFixed(2)}</span>
                </div>
                <h3>
                    <a href="#" class="card-title product-details-link" data-id="${product.id}">${product.title}</a>
                </h3>
            </div>
        </div>
    `;

    card.querySelector('.add-to-cart-btn').addEventListener('click', () => {
        addToCart(product);
    });

    // Add click handler for product details
    card.querySelector('.product-details-link').addEventListener('click', (e) => {
        e.preventDefault();
        showProductPopup(product);
    });

    return card;
}

// دالة لعرض المنتجات
function renderProducts(productsToRender, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';
        productsToRender.forEach(product => {
            const productCard = createProductCard(product);
            container.appendChild(productCard);
        });
    }
}

// دالة Debounce لتأخير تنفيذ البحث
let timeoutId;
function debounce(cb, delay = 500) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(cb, delay);
}

// فلترة المنتجات بناءً على مدخل البحث
function filterProducts() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredBestsellers = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm) && product.price > 25
    );
    renderProducts(filteredBestsellers, 'products-container');

    const filteredUnder25 = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm) && product.price <= 25
    );
    renderProducts(filteredUnder25, 'products-under-25-container');
    
    // إضافة التمرير السلس إلى قسم المنتجات عند وجود نتائج بحث
    if (searchTerm.trim() !== '') {
        // تحديد القسم المناسب للتمرير إليه
        let targetSection;
        if (filteredBestsellers.length > 0) {
            targetSection = document.getElementById('shop');
        } else if (filteredUnder25.length > 0) {
            targetSection = document.getElementById('shop-under-25');
        }
        
        // التمرير السلس إلى القسم المحدد
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// إضافة حدث الاستماع لحقل البحث
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('input', () => {
        debounce(() => filterProducts(), 300);
    });


}

// كود العربة
const cartButton = document.querySelector('.cart-button');
const cartSidebar = document.getElementById('cart-sidebar');
const cartCloseBtn = document.getElementById('cart-close-btn');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalEl = document.getElementById('cart-total-price');
const cartBadge = document.querySelector('.btn-badge');
const clearAllBtn = document.getElementById('clear-all-btn');

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function calculateCartTotal() {
    let total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotalEl.textContent = `$${total.toFixed(2)}`;
}

function renderCart() {
    cartItemsContainer.innerHTML = '';
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; color:#999;">Your cart is empty.</p>';
    } else {
        cartItems.forEach(item => {
            const cartItemEl = document.createElement('div');
            cartItemEl.classList.add('cart-item');
            cartItemEl.innerHTML = `
                <img src="${item.image}" alt="${item.title}" />
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <p class="price">$${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                    <button class="remove-item-btn" data-id="${item.id}">&times;</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemEl);
        });
    }
    calculateCartTotal();
    cartBadge.textContent = cartItems.length;
}

function addToCart(product) {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({...product, quantity: 1});
    }
    saveCartItems();
    renderCart();
}

function removeFromCart(id) {
    cartItems = cartItems.filter(item => item.id !== id);
    saveCartItems();
    renderCart();
}

function updateQuantity(id, change) {
    const item = cartItems.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCartItems();
            renderCart();
        }
    }
}

function clearCart() {
    cartItems = [];
    saveCartItems();
    renderCart();
}

cartButton.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    renderCart();
});

cartCloseBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

cartItemsContainer.addEventListener('click', (e) => {
    const id = parseInt(e.target.dataset.id);
    if (e.target.classList.contains('remove-item-btn')) {
        removeFromCart(id);
    } else if (e.target.classList.contains('increase-btn')) {
        updateQuantity(id, 1);
    } else if (e.target.classList.contains('decrease-btn')) {
        updateQuantity(id, -1);
    }
});

if (clearAllBtn) {
    clearAllBtn.addEventListener('click', clearCart);
}

const backTopBtn = document.querySelector(".back-top-btn");

const handleScroll = () => {
    if (window.scrollY > 150) {
        backTopBtn.classList.add("active");
    } else {
        backTopBtn.classList.remove("active");
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Function to scroll to specific sections (only for navigation)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

window.addEventListener("scroll", handleScroll);
backTopBtn.addEventListener("click", scrollToTop);

// Product Details Popup Functionality
const productPopup = document.getElementById('product-popup');
const popupCloseBtn = document.getElementById('popup-close-btn');

// Show product popup
function showProductPopup(product) {
    // Populate popup with product data
    document.getElementById('popup-product-image').src = product.image;
    document.getElementById('popup-product-image').alt = product.alt;
    document.getElementById('popup-product-title').textContent = product.title;
    document.getElementById('popup-product-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('popup-product-description').textContent = product.description;
    
    // Handle old price and discount
    const oldPriceEl = document.getElementById('popup-product-old-price');
    const discountEl = document.getElementById('popup-product-discount');
    
    if (product.oldPrice) {
        oldPriceEl.textContent = product.oldPrice;
        oldPriceEl.style.display = 'inline';
    } else {
        oldPriceEl.style.display = 'none';
    }
    
    if (product.discount) {
        discountEl.textContent = product.discount;
        discountEl.style.display = 'inline';
    } else {
        discountEl.style.display = 'none';
    }
    
    // Populate features list
    const featuresList = document.getElementById('popup-product-features');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Set up add to cart button
    const addToCartBtn = document.getElementById('popup-add-to-cart');
    addToCartBtn.onclick = () => {
        addToCart(product);
        closeProductPopup();
    };
    
    // Show popup
    productPopup.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close product popup
function closeProductPopup() {
    productPopup.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event listeners for popup
popupCloseBtn.addEventListener('click', closeProductPopup);
overlay.addEventListener('click', closeProductPopup);

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productPopup.classList.contains('active')) {
        closeProductPopup();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const bestsellers = products.filter(product => product.price > 25);
    renderProducts(bestsellers, 'products-container');

    const under25Products = products.filter(product => product.price <= 25);
    renderProducts(under25Products, 'products-under-25-container');
    
    renderCart();
});


// ====== Hero Slider Functionality ======

const heroSlider = document.querySelector('.hero .has-scrollbar');
let slideInterval;
let currentSlide = 0;
const slideCount = heroSlider.children.length;
const slideWidth = heroSlider.children[0].offsetWidth;

const autoSlide = () => {
  currentSlide = (currentSlide + 1) % slideCount;
  heroSlider.scrollTo({
    left: slideWidth * currentSlide,
    behavior: 'smooth'
  });
};

const startAutoSlide = () => {
  slideInterval = setInterval(autoSlide, 5000); // يقلب كل 5 ثوانٍ
};

const stopAutoSlide = () => {
  clearInterval(slideInterval);
};

// Start the automatic sliding on page load
startAutoSlide();

// Stop auto-sliding on mouse hover
heroSlider.addEventListener('mouseenter', stopAutoSlide);

// Resume auto-sliding when the mouse leaves
heroSlider.addEventListener('mouseleave', startAutoSlide);