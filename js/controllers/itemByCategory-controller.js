// Despliega todos los prodeuctos de una categoría
import { itemServices } from "../service/item-service.js";
// Obtiene información de la direción URL
const url = new URL(window.location);
// Obtiene específicamente el parámetro creado: id
const category = url.searchParams.get("cat");

const createItemList = (name,price,url,id,categoryId) => {
    const li = document.createElement('li');
    li.classList.add('category__box');
    const content = 
    `<span class="category__box-img">
        <img src="${url}" alt="Imagen del producto">
    </span>
    <ul class="category__box-body">
        <li class="category__box-text">${name}</li>
        <li class="category__box-text">
            <p class="category__box__item-price" data-item="price">$${price}.00</p>
        </li>
        <li class="category__box-text"> <a href="item-detail.html?id=${id}">Ver producto</a> </li>
    </ul>`
    li.innerHTML = content;
    return li
};

const ul = document.querySelector('[data-list]');
const divTitle = document.querySelector('[data-title]');
const h2 = document.createElement('h2');
h2.classList.add('category__title-text');
if(category == 1) h2.innerHTML = "Ropa para niño y niña";
if(category == 2) {h2.innerHTML = "Ropa para dama y caballero"};
if(category == 3) {h2.innerHTML = "Juguetes"};
divTitle.appendChild(h2);

// Ciclo que llena las 3 etiquetas HTML correspondientes a cada categoría
itemServices.displayAllCategory(category).then((resultPromise) => {
    resultPromise.forEach(({name, price, imgURL, id, categoryId}) => {
        const newli = createItemList(name, price, imgURL, id, categoryId);
        ul.appendChild(newli);
    });
}).catch((error) => console.log("Ocurrió un error: " + error));