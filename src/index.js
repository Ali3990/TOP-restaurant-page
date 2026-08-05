import spaghettiImg from './img/spaghetti.jpg';

const img = document.createElement('img');
img.src = spaghettiImg;
img.atl = 'picture of retaurant food';

document.querySelector('#content').appendChild(img);