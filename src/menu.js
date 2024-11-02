// menu.js
export function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu';

    const h1 = document.createElement('h1');
    h1.textContent = 'Our Menu';

    const menuItems = [
        {name: 'Classic Burger', price: '$10.99', description: 'Our signature beef patty with lettuce, tomato, and special sauce'},
        {name: 'Cheese Burger', price: '$11.99', description: 'Classic burger with melted cheddar cheese'},
        {name: 'Bacon Burger', price: '$12.99', description: 'Classic burger with crispy bacon'}
    ];

    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;

        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.description;

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(itemDesc);
        menuDiv.appendChild(itemDiv);
    });

    content.appendChild(h1);
    content.appendChild(menuDiv);
}