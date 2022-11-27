import { itemServices } from "../service/item-service.js"; 
/* ----------------------------------------------------------------------------- */
/* ---------------------------- Registro de usuario ---------------------------- */
/* ----------------------------------------------------------------------------- */
const formRegister = document.querySelector('[data-form-add]');

// Agrega un evento en el "submit" del formulario donde obtiene las entradas y ejecuta el servicio para crear el nuevo producto
formRegister.addEventListener("submit", (event) => {
    event.preventDefault();
    const imgURL = document.querySelector('[data-form="url"]').value;
    const categoryId = document.querySelector('[data-form="categoria"]').value;
    const name = document.querySelector('[data-form="nombreRegistro"]').value;
    const price = document.querySelector('[data-form="precio"]').value;
    const description = document.querySelector('[data-form="mensaje"]').value;

    // Llamada a la promesa para crear el usuario
    itemServices.createItem(imgURL, categoryId, name, price, description).then( response => {
        alert("Registro exitoso.")
    }).catch((error) => alert("Ocurrió un error: " + error));
})