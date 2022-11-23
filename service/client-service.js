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

// Instancia de objeto XMLHttpRequest
const http = new XMLHttpRequest();

/* 
 * CRUD     -   Métodos HTTP
 * Create   -   POST
 * Read     -   GET
 * Update   -   PUT
 * Delete   -   DELETE
*/

//Abrir http (método, URL)
http.open("GET", "http://localhost:3000/items");
// Enviar
http.send();
// Respuesta del servidor
http.onload = () => {
    const data = JSON.parse(http.response);
    // Crear para cada elemento en la lista de acuerdo con el id recibido
    data.forEach(item => {
        if (item.id === id) {
            const newSection = createItemDetail(item.name,item.price,item.description,item.imgURL);
            // Inyección del código
            section.appendChild(newSection);
        }
    });
}