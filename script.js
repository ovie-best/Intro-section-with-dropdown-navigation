'use strict';

const closeMenu = document.querySelector('.close-icon');
const openMenu = document.querySelector('.mobile-menu-icon');
const Menu = document.querySelector('.mobile-header');

const toggleCloseMenu = () => {
    Menu.classList.add('hide');
    Menu.classList.remove('show');
} 

const toggleOpenMenu = () => {
    Menu.classList.add('show');
    Menu.classList.remove('hide');
}

closeMenu.addEventListener('click', toggleCloseMenu);
openMenu.addEventListener('click', toggleOpenMenu);