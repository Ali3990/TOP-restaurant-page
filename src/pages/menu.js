export function createMenuTab(){
    const menuItems = document.createElement("div");
    menuItems.classList.add("menu");
    document.querySelector('#content').appendChild(menuItems);

    const meatballs = document.createElement("p");
    meatballs.textContent = 'Meatballs';
    menuItems.append(meatballs);
};