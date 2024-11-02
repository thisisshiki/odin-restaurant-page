// about.js
export function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'About Us';

    const p = document.createElement('p');
    p.textContent = 'KingsBurger was founded in 2024 with a simple mission: to serve the best burgers in town. Our ingredients are locally sourced and our recipes are crafted with passion.';

    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact';
    
    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';

    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Phone: (555) 123-4567\nEmail: info@kingsburger.com\nAddress: 123 Burger Street, Food City';

    contactDiv.appendChild(h2);
    contactDiv.appendChild(contactInfo);

    content.appendChild(h1);
    content.appendChild(p);
    content.appendChild(contactDiv);
}