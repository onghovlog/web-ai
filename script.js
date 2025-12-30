// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cart functionality
let cartCount = 0;
const cartButtons = document.querySelectorAll('.btn-buy');
const cartCountElement = document.querySelector('.cart-count');

cartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        cartCountElement.textContent = cartCount;
        cartCountElement.style.display = 'flex';
        
        // Add animation
        this.textContent = 'Đã thêm ✓';
        this.style.background = 'var(--secondary-color)';
        
        setTimeout(() => {
            this.textContent = 'Mua ngay';
            this.style.background = '';
        }, 1500);
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(212, 165, 116, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(212, 165, 116, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards and theme cards
document.querySelectorAll('.product-card, .theme-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Search button functionality
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    alert('Tính năng tìm kiếm đang được phát triển');
});

// Cart button functionality
const cartBtn = document.querySelector('.cart-btn');
cartBtn.addEventListener('click', () => {
    if (cartCount > 0) {
        alert(`Bạn có ${cartCount} sản phẩm trong giỏ hàng`);
    } else {
        alert('Giỏ hàng của bạn đang trống');
    }
});

