// Código para realizar la búsqueda de productos desde la barra de búsqueda en search-result.html
import { itemServices } from "../service/item-service.js";

const resultList = (name,price,url,id,categoryId) => {
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
}

// Recuperación de la etiqueta donde se inyecta el código HTML generado
const ul = document.querySelector("[data-list]");
// Obtiene información de la direción URL
const url = new URL(window.location);
// Obtiene específicamente el parámetro creado: id
const search = url.searchParams.get("search");

itemServices.searchItem(search).then((resultPromise) => {
    if(resultPromise.length === 0) {
        const h2 = document.createElement("h2");
        h2.innerHTML = `No se encontraron coincidencias para "${search}"`;
        ul.appendChild(h2);
    } 
    else {
        resultPromise.forEach(({name, price, imgURL, id, categoryId}) => {
            const newli = resultList(name, price, imgURL, id, categoryId);
            ul.appendChild(newli);
        });
    }
}).catch((error) => console.log("Ocurrió un error: " + error));