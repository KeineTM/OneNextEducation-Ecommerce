// Despliega el detalle de un sólo producto en la página de item-details.html
import { itemServices } from "../service/item-service.js";

// Recuperación de la etiqueta donde se inyecta el código HTML generado
const section = document.querySelector("[data-section]");
// Obtiene información de la direción URL
const url = new URL(window.location);
// Obtiene específicamente el parámetro creado: id
const id = url.searchParams.get("id");

if (id === null) {console.log("Algo pasó.")}

//---------------------------------------------------------------------------------------------------------
// Método para injectar el código HTML con las variables recuperadas del json-server 
//---------------------------------------------------------------------------------------------------------
const createItemDetail = (name, price, details, url, id, categoryId) => {
    const div = document.createElement("div");
    div.classList.add("item-detail");
    const content =
        `<img src="${url}" alt="Imagen del producto" class="item-detail__img">
        <ul class="item-detail__info">
            <li><h2 class="item-detail__title">${name}</h2></li>
            <li><h3 class="item-detail__price">$${price}.00</h3></li>
            <li>
                <p class="item-detail__text">${details}</p>
            </li>
         </ul>`
    div.innerHTML = content;
    return div
}

// -------------------------------------------------------------------------------------------------------
// Despliega una lista de máximo 6 productos por categoría como recomendaciones
//---------------------------------------------------------------------------------------------------------
const createItemList = (name, price, url, id, categoryId) => {
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
            <li class="category__box-text"> <a href="item-detail.html?id=${id}" data-link>Ver producto</a> </li>
        </ul>`
    li.innerHTML = content;
    return li
};

//---------------------------------------------------------------------------------------------------------
// Llamada a la función asíncrona y desplegar los detalles del producto
//---------------------------------------------------------------------------------------------------------
itemServices.getItem(id).then(({ name, price, description, imgURL, id, categoryId }) => {
    const newSection = createItemDetail(name, price, description, imgURL, id, categoryId);
    // Inyección del código
    section.appendChild(newSection);

    //---------------------------------------------------------------------------------------------------------
    // Llamada a la función asíncrona para mostrar productos de la misma categoría que el consultado
    //---------------------------------------------------------------------------------------------------------
    const ul = document.querySelector('[data-list]');
    itemServices.displayCategoryList(categoryId).then((resultPromise) => {
        resultPromise.forEach(({ name, price, imgURL, id, categoryId }) => {
            const newli = createItemList(name, price, imgURL, id, categoryId);
            ul.appendChild(newli);
        });
    }).catch((error) => console.log("Ocurrió un error: " + error));

}).catch((error) => console.log("Ocurrió un error: " + error));