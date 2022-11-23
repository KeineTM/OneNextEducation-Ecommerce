//IIFE: Función ejecutada inmediatamente, esconde del alcance el contenido
/*(() => {
// Recuperamos el botón
const btnAddItem = document.querySelector("[data-button]");

// Método que creará la caja o tarjeta del producto
const createProductBox = (event) => {
    console.log("Ejecutando");
    // Si el botón es creado del tipo submit, este comando evita que se recargue la página
    event.preventDefault();
    
    // El input en este caso será la URL específica de una imagen para prueba
    // pero en caso de que provenga de un formulario, será necesario especificar su value
    const input = '../assets/items/713gJALpANL._AC_SL1500_.jpg';
    
    // Ya que la caja del producto es parte de una lista, creamos la variable que hace referencia a ella
    const list = document.querySelector('[data-list]');

    // La caja es un elemento de esa lista, por lo tanto, el método crea este elemento
    const box = document.createElement('li');
    // Y se asignan las clases correspondiente a este
    box.classList.add("category__box");

    // Se crea una variable para almacenar el código HTML a introducir por el método
    const contentHtml = `
    <div class="category__admin-box">
        <img src="../assets/icons/delete1.svg" alt="Borrar" class="category__admin-img btn-delete" data-admin="delete">
        <img src="../assets/icons/edit1.svg" alt="Editar" class="category__admin-img btn-edit" data-admin="edit">
    </div>
    <img src="${input}" alt="Imagen del producto" class="category__box-img">
    <ul class="category__box-body">
        <li class="category__box-text">Producto XYZ</li>
        <li class="category__box-text"><p class="category__box__item-price" data-item="price">$9,999.99</p></li>
        <li class="category__box-text">#1111111</li>
    </ul>`;

    // Se usa el comando innerHTML para introducir el bloque de código en el elemento a crear
    box.innerHTML = contentHtml;

    // Con el comando appendChild se introduce el elemento creado a la hoja HTML, dentro del elemento padre que lo contendrá
    list.appendChild(box);
}

console.log(btnAddItem);

btnAddItem.addEventListener('click', createProductBox);

})();*/

/* ------------------------Icono eliminar item--------------------------------- 
const btnDelete = document.querySelectorAll('.btn-delete');

console.log(btnDelete);

const deleteItem = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
};

btnDelete.addEventListener('click', deleteItem);*/