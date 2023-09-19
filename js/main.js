import { tempAccordion, tempModalImgs, tempOffCanvas } from "./imagesHTML.js";
import { FOOTER, HEADER_LINKS, NAV } from "./staticHTML.js";
import CARDS_HTML from './card.js'



const navHeader = document.getElementById('navHeader');
navHeader.innerHTML = NAV;


const footer = document.getElementById('footer');
footer.innerHTML = FOOTER;


const accordionExample = document.getElementById('accordionExample');
if (accordionExample !== null) {
    accordionExample.innerHTML = tempAccordion;
}


const offcanvasDiv = document.getElementById('offcanvas-div');
if (offcanvasDiv !== null)
    offcanvasDiv.innerHTML = tempOffCanvas;


const modalDiv = document.getElementById('modal-div');
if (modalDiv !== null)
    modalDiv.innerHTML = tempModalImgs;



const cardsSection = document.getElementById('cards-section');
if (cardsSection !== null)
    cardsSection.innerHTML = CARDS_HTML


const docHead = document.getElementById('doc-head');
docHead.insertAdjacentHTML('beforeend', HEADER_LINKS)