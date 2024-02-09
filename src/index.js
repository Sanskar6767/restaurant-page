import { homePageSetup } from "./initial";
import { menuPageSetup } from "./menu";
import { aboutPageSetup } from "./about";
import './style.css';

const menu = document.querySelector('.menu-button');
const home = document.querySelector('.home-button');
const about = document.querySelector('.about-button');
const content = document.querySelector('#content');

function initialPageSetup() {
    document.addEventListener('DOMContentLoaded', homePageSetup);
}

initialPageSetup();

home.addEventListener("click", () =>{
    content.innerHTML = '';
    homePageSetup();
});

menu.addEventListener("click", () =>{
    content.innerHTML = '';
    menuPageSetup();
});

about.addEventListener("click", () =>{
    content.innerHTML = '';
    aboutPageSetup();
});