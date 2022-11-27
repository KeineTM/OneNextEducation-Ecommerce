// Despliega un máximo de 6 productos de cada categoría (3) en el index.html
import { itemServices } from "../service/item-service.js";

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

const ul = document.querySelectorAll('[data-list]');

// Ciclo que llena las 3 etiquetas HTML correspondientes a cada categoría
for(let i = 0; i < 3; i++) {
    itemServices.displayCategoryList(i+1).then((resultPromise) => {
        resultPromise.forEach(({name, price, imgURL, id, categoryId}) => {
            const newli = createItemList(name, price, imgURL, id, categoryId);
            ul[i].appendChild(newli);
        });
    }).catch((error) => console.log("Ocurrió un error: " + error));
}