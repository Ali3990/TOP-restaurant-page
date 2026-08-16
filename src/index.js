import { createHomeTab } from './pages/home.js';
import { createMenuTab} from './pages/menu.js';

import './style.css';

// starts on home page.
createHomeTab();

const tabs = {
    home: createHomeTab,
    menu: createMenuTab,
};


// navigation bar - clears and builds the page
const buttons = document.querySelectorAll('nav button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelector('#content').replaceChildren();
        tabs[button.dataset.tab]();
    });
});
