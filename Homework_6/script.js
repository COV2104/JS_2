const dataItems = JSON.parse(items);

let feturedItems = document.querySelector('#feturedItems .item');
let menuThebest = document.querySelector('.menu__thebest');

dataItems.forEach(element => {
    let product = feturedItems.cloneNode(true);
    product.querySelector('.item img').src = element.image;
    product.querySelector('.title__price .title__item').textContent = element.title;
    product.querySelector('.title__price .text__item').textContent = element.description;
    product.querySelector('.title__price .price').textContent = element.price;
    menuThebest.appendChild(product);
});

