// Método para injectar el código HTML con las variables recuperadas del json-server
const createItemDetail = (name,price,details,url) => {
    const div = document.createElement("div");
    div.classList.add("item-detail");
    const content = `
        <img src="${url}" alt="Imagen del producto" class="item-detail__img">
        <ul class="item-detail__info">
            <li><h2 class="item-detail__title">${name}</h2></li>
            <li><h3 class="item-detail__price">$${price}</h3></li>
            <li>
                <p class="item-detail__text">${details}</p>
            </li>
         </ul>`
    div.innerHTML = content;
    return div
}

// Recuperación de la etiqueta donde se inyecta el código HTML generado
const section = document.querySelector("[data-section]");
// Vairable para la recuperación del id del item-----------------------------------NECESITO VER CÓMO LO RECUPERO DE LA PÁGINA ANTERIOR
const id = 1;

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

// Llamada a la función asíncrona:
displayItem().then((resultPromise) => {
    // Crea el código HTML para cada elemento en la lista de acuerdo con el id recibido
    resultPromise.forEach(item => {
        if (item.id === id) {
            const newSection = createItemDetail(item.name,item.price,item.description,item.imgURL);
            // Inyección del código
            section.appendChild(newSection);
        }
    });
}).catch((error) => alert("Ocurrió un error."));
