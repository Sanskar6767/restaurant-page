import { initialPageSetup } from "./initial";
import { homePageSetup } from "./initial";
import { menuPageSetup } from "./menu";
import { aboutPageSetup } from "./about";

initialPageSetup();
// menuPageSetup();

const menu = document.querySelector('.menu-button');
const home = document.querySelector('.home-button');
const about = document.querySelector('.about-button');
const content = document.querySelector('#content');


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