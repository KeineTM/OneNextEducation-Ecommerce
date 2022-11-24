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
    asuntoContacto: { valueMissing: "El asunto no puede quedar vacío." },
    mensajeContacto: { valueMissing: "El mensaje no puede quedar vacío ni exceder los 120 caracteres." }
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
    }
}

// Método forEach aplicado al array de inputs que agrega un evento a cada uno
inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        validar(input.target);
    });
});