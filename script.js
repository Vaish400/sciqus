// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById('hamburgerMenu');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    hamburgerMenu.classList.remove('active');
});

// Close sidebar when clicking on a link (mobile)
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
});

// Container 1 - Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-play carousel
setInterval(nextSlide, 3000);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Container 3 - Slider Functionality
const container3Left = document.querySelector('.container-3 .slider-arrow-left');
const container3Right = document.querySelector('.container-3 .slider-arrow-right');
const showcaseItem = document.getElementById('showcaseItem');
let container3Index = 0;
const container3Items = [
    { name: 'Smart Device Pro', price: '$299.99', rating: '⭐⭐⭐⭐⭐ (4.8/5)', icon: '📱' },
    { name: 'Ultra Tablet X', price: '$449.99', rating: '⭐⭐⭐⭐⭐ (4.9/5)', icon: '💻' },
    { name: 'Pro Watch Series', price: '$199.99', rating: '⭐⭐⭐⭐ (4.6/5)', icon: '⌚' }
];

container3Left.addEventListener('click', () => {
    container3Index = (container3Index - 1 + container3Items.length) % container3Items.length;
    updateContainer3Slider();
});

container3Right.addEventListener('click', () => {
    container3Index = (container3Index + 1) % container3Items.length;
    updateContainer3Slider();
});

function updateContainer3Slider() {
    const sliderInner = document.querySelector('.container-3 .slider-inner-rectangle');
    const textContent = document.querySelector('.container-3 .text-content');
    const item = container3Items[container3Index];
    
    // Smooth animation with scale effect
    sliderInner.style.transform = 'scale(0.95)';
    sliderInner.style.opacity = '0.6';
    
    setTimeout(() => {
        if (showcaseItem) {
            const showcaseImage = showcaseItem.querySelector('.showcase-image');
            const h4 = showcaseItem.querySelector('h4');
            if (showcaseImage) {
                showcaseImage.style.background = container3Index === 0 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : container3Index === 1
                    ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                    : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
                showcaseImage.innerHTML = `<span style="font-size: 2.5rem; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">${item.icon}</span>`;
            }
            if (h4) h4.textContent = item.name;
        }
        
        if (textContent) {
            textContent.innerHTML = `
                <p><strong>Latest Innovation:</strong> ${item.name}</p>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Rating:</strong> ${item.rating}</p>
            `;
        }
        
        sliderInner.style.transform = 'scale(1)';
        sliderInner.style.opacity = '1';
    }, 300);
}

// Container 5 - Tab Button Functionality
const buttonA = document.getElementById('buttonA');
const buttonB = document.getElementById('buttonB');
const tabContent = document.getElementById('tabContent');

const monthlyPlan = {
    price: '$29',
    period: '/month',
    features: [
        '✓ 10 Projects',
        '✓ 50GB Storage',
        '✓ Email Support',
        '✓ Basic Analytics'
    ]
};

const yearlyPlan = {
    price: '$290',
    period: '/year',
    features: [
        '✓ Unlimited Projects',
        '✓ 500GB Storage',
        '✓ Priority Support',
        '✓ Advanced Analytics',
        '✓ 24/7 Phone Support'
    ],
    savings: 'Save 17%'
};

buttonA.addEventListener('click', () => {
    buttonA.classList.add('active');
    buttonB.classList.remove('active');
    updatePricingContent(monthlyPlan);
});

buttonB.addEventListener('click', () => {
    buttonB.classList.add('active');
    buttonA.classList.remove('active');
    updatePricingContent(yearlyPlan);
});

function updatePricingContent(plan) {
    const savingsBadge = plan.savings ? `<div style="background: #4CAF50; color: white; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; margin-bottom: 1rem; display: inline-block;">${plan.savings}</div>` : '';
    
    tabContent.innerHTML = `
        <div class="pricing-card">
            ${savingsBadge}
            <div class="price">${plan.price}<span>${plan.period}</span></div>
            <ul class="features-list">
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="cta-button">Get Started</button>
        </div>
    `;
}

// Container 6 - Slider Functionality
const container6Left = document.querySelector('.container-6 .slider-arrow-left');
const container6Right = document.querySelector('.container-6 .slider-arrow-right');
const container6Items = document.querySelectorAll('.container-6 .slider-item');
let container6Index = 0;

function showContainer6Slide(index) {
    container6Items.forEach((item, i) => {
        if (i === index) {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.classList.add('active');
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 150);
        } else {
            item.classList.remove('active');
            item.style.opacity = '0';
            item.style.transform = 'translateY(-20px)';
        }
    });
}

container6Left.addEventListener('click', () => {
    container6Index = (container6Index - 1 + container6Items.length) % container6Items.length;
    showContainer6Slide(container6Index);
});

container6Right.addEventListener('click', () => {
    container6Index = (container6Index + 1) % container6Items.length;
    showContainer6Slide(container6Index);
});

// Initialize Container 6 slider
showContainer6Slide(0);

// Smooth scroll for anchor links
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

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close sidebar on mobile when resizing to desktop
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    }, 250);
});

