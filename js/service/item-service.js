/* 
 * CRUD     -   Métodos HTTP
 * Create   -   POST
 * Read     -   GET
 * Update   -   PUT
 * Delete   -   DELETE
 *
 * Promise: Promesa, clase que permite cargar ansíncronamente la página HTML mientras espera el resultado de la comunicación con el server
 * Sintaxis: promesa = new Promise(function(resolve, regect));
*/
// Método para contener la promesa = función asíncrona
/* Código completo:
const displayItem = () => {
    const promise = new Promise((resolve, reject) =>{
        // Instancia de objeto XMLHttpRequest
        const http = new XMLHttpRequest();
        //Abrir http (método, URL)
        http.open("GET", "http://localhost:3000/items");
        // Enviar petición
        http.send();
        // Respuesta del servidor
        http.onload = () => {
            // Almacena la respuesta del servidor
            const response = JSON.parse(http.response);

            // Evalúa el estado de la respuesta con base en los errores de respuesta del servidor preestablecidos (ej: 504)
            (http.status >= 400)
                ? reject(response)
                : resolve(response)            
        }
    });
    return promise
};*/
// Código simplificado con Fetch API que consulta todos los productos. Importante que se use .json() para transformalo en un string legible
const displayItems = () => fetch("http://localhost:3000/items").then( response => response.json() );

// Promesa para realizar la búsqueda de productos que contengan la cadena insertada por el usuario
const searchItem = (string) => fetch(`http://localhost:3000/items/?q=${string}`).then( response => response.json() );

// Promesa que consulta un producto por especificación de id
const getItem = (id) => fetch(`http://localhost:3000/items/${id}`).then( response => response.json() );

// Promesa que consoluta los productos por categoría definida
const displayCategoryList = (categoryId) => fetch(`http://localhost:3000/categories/${categoryId}/items?_limit=6`).then( response => response.json() );

// Promesa para editar productos de la DB con PUT
const createItem = (imgURL,categoryId,name,price,description) => {
    // Fetch definiendo como método a emplear POST para enviar información del formulario
    return fetch("http://localhost:3000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Construye y traduce a string la información a enviar con el id generado automáticamente con la librería UUID desde CDN
        body: JSON.stringify({imgURL,categoryId,name,price,description,id: uuid.v4()})
    })
}

// Promesa para editar productos de la DB con PUT
const updateItem = (imgURL,categoryId,name,price,description,id) => {
    return fetch(`http://localhost:3000/items/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({imgURL,categoryId,name,price,description})
    })
}

// Promesa para eliminar productos de la DB con DELETE
const deleteItem = (id) => {
    return fetch(`http://localhost:3000/items/${id}`, {
        method: "DELETE"
    } )
}


// Queda pendiente enviar el ID desde las opciones "Ver Producto"
export const itemServices = {
    displayItems,
    searchItem,
    getItem,
    displayCategoryList,
    createItem,
    updateItem,
    deleteItem,
}