// home.js
import odinImage from "./images/restaurant-front.jpg";

export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

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
    h2.textContent = 'Experience Authentic Burgers';
    
    const p = document.createElement('p');
    p.textContent = 'Welcome to KingsBurger, where traditional flavors meet modern culinary artistry. Our master chefs create unforgettable dining experiences using the freshest ingredients and time-honored recipes.';

    // Append elements
    description.appendChild(h2);
    description.appendChild(p);

    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(description);
}
