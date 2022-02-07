'use strict';

// navbar links
const navbarLinks = document.querySelector('.navbar-links > ul');

// toggle button
const toggleIcon = document.getElementById('toggle-icon');

// implement toggle functionality
toggleIcon.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});