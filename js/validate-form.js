// Recuperación de etiquetas HTML asignados con data-form en un Array
const inputs = document.querySelectorAll('[data-form]');

// Objeto con los tipos de input, los errores que puede generar y los mensajes correspondientes.
const mensajesDeError = {
    nombreRegistro: { valueMissing: "El nombre no puede quedar vacío." },
    nombreContacto: { valueMissing: "El nombre no puede quedar vacío." },
    emailLogin: {
        valueMissing: "El correo no puede quedar vacío.",
        typeMismatch: "El correo no es válido.",
        patternMismatch: "El correo debe contener @ y un dominio (ej: .com)."
    }, 
    emailRegistro: {
        valueMissing: "El correo no puede quedar vacío.",
        typeMismatch: "El correo no es válido.",
        patternMismatch: "El correo debe contener @ y un dominio (ej: .com)."
    }, 
    emailContacto: {
        valueMissing: "El correo no puede quedar vacío.",
        typeMismatch: "El correo no es válido.",
        patternMismatch: "El correo debe contener @ y un dominio (ej: .com)."
    },
    passLogin: { valueMissing: "La contraseña no puede quedar vacía." }, 
    passRegistro: { valueMissing: "La contraseña no puede quedar vacía." },
    asunto: { valueMissing: "El asunto no puede quedar vacío." },
    mensaje: { valueMissing: "El mensaje no puede quedar vacío ni exceder los 120 caracteres." },
    url: { valueMissing: "La dirección URL no puede quedar vacía." },
    precio: { valueMissing: "El precio no puede quedar vacío y únicamente se permiten números." },
    categoria: { valueMissing: "La categoría no puede quedar vacía y únicamente se permiten números." },
};

// Array con los tipos de errores que puede generar el formulario
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
];

// Método para seleccionar el mensaje de error adecuado para cada input evaluado
const mostrarMensajeDeError = (tipoDeInput, input) => {
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(input.validity[error]) mensaje = mensajesDeError[tipoDeInput][error];
    });
    return mensaje
}

// Método para el evento del botón enviar que ejecuta las validaciones de los campos del formulario
const validar = (input) => {
    // Recupera la etiqueta del formulario de acuerdo con el data-form="tipoDeInput" asignado.
    const tipoDeInput = input.dataset.form;
    // Evalua la validez de la entrada y genera el mensaje de error correspondiente si es oportuno.
    if(!input.validity.valid) {
        input.setCustomValidity(mostrarMensajeDeError(tipoDeInput, input));
    } else input.setCustomValidity("");
}

// Método forEach aplicado al array de inputs que agrega un evento a cada uno
inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        validar(input.target);
    });
});

//--------------------------------------------------------------------------------------
// Evento que recupera la cadena ingresada para ejecutar la consulta a la base de datos:
//--------------------------------------------------------------------------------------
const searchBtn = document.querySelector('[data-search-btn]');
searchBtn.addEventListener("click", (event) => {
    const searchBar = document.querySelector('[data-search').value;
    if(searchBar) window.location.href = `search-result.html?search=${searchBar}`;
})