import {homeHeader, homeImg, homeText} from "./home";
import { mainMenu, drinkMenu } from './menu';
import { managerInfo, ownerInfo } from './contact';

import './style.css';

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');
const contentDiv = document.getElementById('content');

contentDiv.append(homeHeader(), homeImg(), homeText());

homeButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    contentDiv.append(homeHeader(), homeImg(), homeText());
});

menuButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    contentDiv.append(mainMenu(), drinkMenu());

});

contactButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    contentDiv.append(managerInfo(), ownerInfo());
});