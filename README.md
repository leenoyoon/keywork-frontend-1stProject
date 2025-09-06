# 🌟 Glowing - E-commerce Website

A modern, responsive e-commerce website for skincare and beauty products built with vanilla HTML, CSS, and JavaScript.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Key Features Explained](#key-features-explained)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 Overview

Glowing is a beautifully designed e-commerce website specializing in skincare and beauty products. The website features a modern, clean interface with smooth animations, responsive design, and an intuitive shopping experience. It showcases various skincare products with detailed information, pricing, and a fully functional shopping cart system.

## ✨ Features

### 🛍️ E-commerce Functionality
- **Product Catalog**: Display of skincare products with high-quality images
- **Smart Search**: Real-time product search with smooth scrolling to results
- **Shopping Cart**: Full cart functionality with add/remove items, quantity management
- **Price Categories**: Products organized by price ranges (Bestsellers >$25, Under $25)
- **Product Filtering**: Dynamic filtering based on search terms

### 🎨 User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimalist design with smooth animations
- **Hero Carousel**: Eye-catching banner slides with call-to-action buttons
- **Interactive Elements**: Hover effects, smooth transitions, and visual feedback
- **Navigation**: Intuitive navigation with smooth scrolling between sections

### 🚀 Performance & UX
- **Smooth Scrolling**: Seamless navigation between page sections
- **Debounced Search**: Optimized search with 300ms delay for better performance
- **Local Storage**: Cart persistence across browser sessions
- **Loading States**: Visual feedback for user interactions
- **Accessibility**: ARIA labels and semantic HTML structure

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern HTML features
- **CSS3**: Advanced styling with Flexbox, Grid, animations, and responsive design
- **JavaScript (ES6+)**: Modern JavaScript with modules, async operations, and DOM manipulation
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Poppins font family for typography

## 📁 Project Structure

```
mini-project/
├── index.html              # Main HTML file
├── style.css              # Main stylesheet
├── script.js              # JavaScript functionality
├── README.md              # Project documentation
└── assets/
    ├── favicon.svg        # Website favicon
    └── images/            # All project images
        ├── logo.png       # Website logo
        ├── hero-banner-*.jpg  # Hero section images
        ├── product-*.jpg      # Product images
        ├── collection-*.jpg   # Collection images
        ├── banner-*.jpg       # Banner images
        ├── feature-*.jpg      # Feature images
        └── ...               # Other assets
```

## 🚀 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Quick Start

1. **Clone or Download** the project files
   ```bash
   git clone [repository-url]
   cd mini-project
   ```

2. **Open in Browser** (Simple method)
   - Double-click `index.html` to open in your default browser
   - Or right-click and "Open with" your preferred browser

3. **Local Server** (Recommended for development)
   ```bash
     visit `http://localhost:8000`

## 💻 Usage

### Navigation
- **Home**: Hero section with product showcases
- **Collection**: Featured product collections
- **Our Best Sellers**: Products over $25
- **Under $25**: Budget-friendly products
- **Banner**: Promotional content
- **Features**: Company highlights

### Shopping Experience
1. **Browse Products**: Scroll through different sections
2. **Search**: Use the search bar to find specific products
3. **Add to Cart**: Click the shopping bag icon on any product
4. **View Cart**: Click the cart icon in the header
5. **Manage Cart**: Adjust quantities or remove items
6. **Checkout**: Use the checkout button (UI only - no backend)

### Search Functionality
- Type product names (e.g., "Facial", "Serum", "Coffee")
- Results automatically filter and scroll to relevant sections
- Search works across all product categories

## 🔧 Key Features Explained

### Smart Search with Smooth Scrolling
```javascript
// Automatically scrolls to the appropriate products section
if (searchTerm.trim() !== '') {
    let targetSection;
    if (filteredBestsellers.length > 0) {
        targetSection = document.getElementById('shop');
    } else if (filteredUnder25.length > 0) {
        targetSection = document.getElementById('shop-under-25');
    }
    
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
```

### Shopping Cart System
- **Add Items**: Click product's shopping bag icon
- **Persistent Storage**: Cart data saved in localStorage
- **Quantity Management**: Increase/decrease item quantities
- **Remove Items**: Delete individual items or clear entire cart
- **Real-time Updates**: Cart badge and total update instantly

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Flexible Layout**: Adapts to different screen sizes
- **Touch-Friendly**: Large buttons and touch targets
- **Smooth Animations**: CSS transitions and transforms

## 🌐 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and structure
- Test on multiple browsers and devices
- Ensure responsive design compatibility
- Add comments for complex functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Developer**: Leen Oyoon  
**Email**: leenoyoon2@gmail.com  
**Project**: Glowing E-commerce Website

---

## 🎨 Design Philosophy

Glowing embodies the essence of modern skincare e-commerce with:
- **Clean Aesthetics**: Minimalist design focusing on product presentation
- **User-Centric**: Intuitive navigation and shopping experience
- **Performance**: Fast loading and smooth interactions
- **Accessibility**: Inclusive design for all users

## 🔮 Future Enhancements

- [ ] User authentication system
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Product recommendations
- [ ] Multi-language support
- [ ] Dark mode theme

---

*Built with ❤️ for the beauty and skincare community*
