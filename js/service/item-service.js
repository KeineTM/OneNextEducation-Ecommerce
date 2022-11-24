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
// Código simplificado con Fetch API
const displayItem = () => fetch("http://localhost:3000/items").then( response => response.json() );

const displayCategoryList = (categoryId) => fetch(`http://localhost:3000/categories/${categoryId}/items?_limit=6`).then( response => response.json() );

// Queda pendiente enviar el ID desde las opciones "Ver Producto"
export const itemServices = {
    displayItem,
    displayCategoryList,
}