import { itemServices} from "../service/item-service.js";

// Método que recibe el identificador del producto para desplegar la información almacenada y después actualizar dus datos
const getItemDetails = () => {
    // Obtiene información de la direción URL
    const url = new URL(window.location);
    // Obtiene específicamente el parámetro creado: id
    const id = url.searchParams.get("id");

    // Variables de los campos del formulario que se llenarán con la información dle producto
    const imgURLInput = document.querySelector('[data-form="url"]');
    const categoryIdInput = document.querySelector('[data-form="categoria"]');
    const nameInput = document.querySelector('[data-form="nombreRegistro"]');
    const priceInput = document.querySelector('[data-form="precio"]');
    const descriptionInput = document.querySelector('[data-form="mensaje"]');

    // Llamada a la promesa para recuperar la información del producto
    itemServices.getItem(id).then( ({imgURL,categoryId,name,price,description}) => {
        imgURLInput.value = imgURL;
        categoryIdInput.value = categoryId;
        nameInput.value = name;
        priceInput.value = price;
        descriptionInput.value = description;
    } ).catch((error) => alert("Ocurrió un error: " + error));
}

getItemDetails();

// Código para recuperar la información editada en los campos
const form = document.querySelector('[data-form-add]');
form.addEventListener("submit",(event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const imgURL = document.querySelector('[data-form="url"]').value;
    const categoryId= document.querySelector('[data-form="categoria"]').value;
    const name = document.querySelector('[data-form="nombreRegistro"]').value;
    const price = document.querySelector('[data-form="precio"]').value;
    const description = document.querySelector('[data-form="mensaje"]').value;
    itemServices.updateItem(imgURL,categoryId,name,price,description,id).then( response => alert("Actualización exitosa."))
    .catch(error => console.log("Ocurrió un error: " + error));
})