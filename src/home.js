// home.js

import odinImage from "./images/restaurant-front.jpg";

export function loadHome() {
    const content = document.getElementById('content');

    // Create elements
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to KingsBurger Restaurant';

    const img = document.createElement('img');
    img.src = odinImage;
    img.alt = 'Restaurant';
    img.style.cssText = 'width:100%; max-width:800px; height:auto; border-radius:8px;';

    const description = document.createElement('div');
    description.className = 'description';
    
    const h2 = document.createElement('h2');
    h2.textContent = 'Experience Authentic Japanese Cuisine';
    
    const p = document.createElement('p');
    p.textContent = 'Welcome to KingsBurger, where traditional flavors meet modern culinary artistry. Our master chefs create unforgettable dining experiences using the freshest ingredients and time-honored recipes.';

    const hours = document.createElement('div');
    hours.className = 'hours';
    
    const h3 = document.createElement('h3');
    h3.textContent = 'Hours of Operation';
    
    const hours1 = document.createElement('p');
    hours1.textContent = 'Monday - Friday: 11:00 AM - 10:00 PM';
    
    const hours2 = document.createElement('p');
    hours2.textContent = 'Saturday - Sunday: 12:00 PM - 11:00 PM';

    // Append elements
    description.appendChild(h2);
    description.appendChild(p);
    
    hours.appendChild(h3);
    hours.appendChild(hours1);
    hours.appendChild(hours2);

    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(description);
    content.appendChild(hours);
}