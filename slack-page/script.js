document.addEventListener('DOMContentLoaded', function() {
    // Initialize page elements
    initDots();
    showCookieNotice();
    addEventListeners();
});

// Initialize dot elements for the future section
function initDots() {
    const dotsContainer = document.querySelector('.dots-container');

    // Create grid of dots
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.top = (50 + row * 50) + 'px';
            dot.style.left = (50 + col * 50) + 'px';
            
            // Add random animation with delay
            const delay = Math.random() * 5;
            dot.style.animation = `pulse 3s infinite ${delay}s`;
            dotsContainer.appendChild(dot);
        }
    }

    // Create connecting lines
    createLine(150, 150, 100, 45);
    createLine(200, 100, 70, 0);
    createLine(100, 200, 80, -45);
}

// Create a connecting line between dots
function createLine(x, y, length, angle) {
    const line = document.createElement('div');
    line.className = 'line';
    
    // Position and rotate the line
    line.style.width = length + 'px';
    line.style.top = y + 'px';
    line.style.left = x + 'px';
    line.style.transform = `rotate(${angle}deg)`;
    
    // Add the line to the dots container
    document.querySelector('.dots-container').appendChild(line);
}

// Show cookie notice with animation
function showCookieNotice() {
    const cookieNotice = document.querySelector('.cookie-notice');
    
    // Show cookie notice after a delay
    setTimeout(() => {
        cookieNotice.classList.add('visible');
    }, 1500);
}

// Add event listeners to interactive elements
function addEventListeners() {
    // Close notification banner
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const notification = document.querySelector('.notification');
            
            // Add fade-out animation before removing
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 300);
        });
    }

    // Accept cookies
    const cookieBtn = document.querySelector('.cookie-btn');
    if (cookieBtn) {
        cookieBtn.addEventListener('click', function() {
            const cookieNotice = document.querySelector('.cookie-notice');
            
            // Fade out cookie notice
            cookieNotice.style.opacity = '0';
            cookieNotice.style.transform = 'translateY(100px)';
            
            // Remove from DOM after animation completes
            setTimeout(() => {
                cookieNotice.style.display = 'none';
            }, 500);
            
            // Here you could also set a cookie to remember the user's preference
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }
}