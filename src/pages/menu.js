import shrimpImg from '../img/dragon_fist_shrimp.png';
import fishImg from '../img/eight_trigram_fish.png';
import lambImg from '../img/flying_dagger_lamb.png';
import tofuImg from '../img/golden_bell_tofu.png';
import beefImg from '../img/iron_palm_beef.png'

export function createMenuTab(){
    const menuItems = document.createElement("div");
    menuItems.classList.add("menu");
    document.querySelector('#content').appendChild(menuItems);

    // Dish item pictures and descriptions.
    const beefItem = document.createElement("div");
    beefItem.classList.add("beef-item")
    const beef = document.createElement("img");
    beef.src = beefImg;
    beef.alt = "Iron Palm Beef";
    const beefText = document.createElement("p");
    beefText.textContent = '“One palm. One pot. One beef that strikes with flavor!”';
    beefItem.append(beef);
    beefItem.append(beefText)

    const shrimpItem = document.createElement("div");
    shrimpItem.classList.add("shrimp-item")
    const shrimp = document.createElement("img");
    shrimp.src = shrimpImg;
    shrimp.alt = "Dragon Fist Shrimp";
    const shrimpText = document.createElement("p");
    shrimpText.textContent = '“Unleash the dragon—one mighty shrimp bite at a time!”';
    shrimpItem.append(shrimp);
    shrimpItem.append(shrimpText)

    const fishItem = document.createElement("div");
    fishItem.classList.add("fish-item")
    const fish = document.createElement("img");
    fish.src = fishImg;
    fish.alt = "Eight Trigram Fish";
    const fishText = document.createElement("p");
    fishText.textContent = '“Master the eight trigrams and unlock all eight paths to deliciousness!”';
    fishItem.append(fish);
    fishItem.append(fishText)

    const lambItem = document.createElement("div");
    lambItem.classList.add("lamb-item")
    const lamb = document.createElement("img");
    lamb.src = lambImg;
    lamb.alt = "Flying Dagger Lamb";
    const lambText = document.createElement("p");
    lambText.textContent = '“Sliced thin as a blade, gone faster than a flying dagger!”';
    lambItem.append(lamb);
    lambItem.append(lambText)

    const tofuItem = document.createElement("div");
    tofuItem.classList.add("tofu-item")
    const tofu = document.createElement("img");
    tofu.src = tofuImg;
    tofu.alt = "Golden Bell Tofu";
    const tofuText = document.createElement("p");
    tofuText.textContent = '“Golden on the outside, tender within—a defense no appetite can defeat!”';
    tofuItem.append(tofu);
    tofuItem.append(tofuText)

    // append all dishes to menuItems
    menuItems.append(beefItem);
    menuItems.append(shrimpItem);
    menuItems.append(fishItem);
    menuItems.append(lambItem);
    menuItems.append(tofuItem)

};