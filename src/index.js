import "./styles.css";

import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';
import { setupRegistration } from './registration.js';

// Initial load
loadHome();

// Get all buttons
const homeBtn = document.querySelector('button:nth-child(1)');
const menuBtn = document.querySelector('button:nth-child(2)');
const aboutBtn = document.querySelector('button:nth-child(3)');

// Add event listeners
homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
aboutBtn.addEventListener('click', loadAbout);

setupRegistration();
