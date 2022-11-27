// Despliega un máximo de 6 productos de cada categoría (3) en el index.html
import { itemServices } from "../service/item-service.js";

const createItemList = (name,price,url,id,categoryId) => {
    const li = document.createElement('li');
    li.classList.add('category__box');
    const content = 
    `<div class="category__admin-box">
        <img src="../assets/icons/delete1.svg" alt="Borrar" class="category__admin-img btn-delete" data-delete>
        <a href="admin-item__edit-form.html?id=${id}" data-link><img src="../assets/icons/edit1.svg" alt="Editar" class="category__admin-img btn-edit" data-edit></a>
    </div>
    <img src="${url}" alt="Imagen del producto" class="category__box-img">
    <ul class="category__box-body">
        <li class="category__box-text">${name}</li>
        <li class="category__box-text"><p class="category__box__item-price" data-item="price">$${price}.00</p></li>
        <li class="category__box-text">#${id}</li>
    </ul>`
    li.innerHTML = content;

    // Método para eliminar productos desde el ícono
    const deleteIcon = li.querySelector('[data-delete]');
    deleteIcon.addEventListener("click", () => {
        //if (window.confirm("¿Realmente quiere eliminar este producto?"))
        const passDelete = (window.prompt("Ingrese la contraseña para confirmar la eliminación"));
        if(passDelete === "trejo9010") {
            itemServices.deleteItem(id).then( () => {
                console.log(`Producto con ID #${id} eliminado`);
            }).catch((error) => console.log("Ocurrió un error: " + error));
        }
        else (alert("Disculpa, no me borres mi base de datos :3"));
    });

    return li
};

const ul = document.querySelector('[data-list]');

// Ciclo que crea las cajas de todos los productos existentes en la DB
itemServices.displayItems().then((resultPromise) => {
    resultPromise.forEach(({name, price, imgURL, id, categoryId}) => {
        const newli = createItemList(name, price, imgURL, id, categoryId);
        ul.appendChild(newli);
    });
}).catch((error) => console.log("Ocurrió un error: " + error));