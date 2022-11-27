import { userService } from "../service/user-service.js";
/* ----------------------------------------------------------------------------- */
/* ---------------------------- Registro de usuario ---------------------------- */
/* ----------------------------------------------------------------------------- */
const formRegister = document.querySelector('[data-form-register]');

// Agrega un evento en el "submit" del formulario donde obtiene las entradas y ejecuta el servicio para crear usuario
formRegister.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector('[data-form="nombreRegistro"]').value;
    const email = document.querySelector('[data-form="emailRegistro"]').value;
    const pass = document.querySelector('[data-form="passRegistro"]').value;

    // Llamada a la promesa para crear el usuario
    userService.createUser(name, email, pass).then( response => {
        alert("Registro exitoso.")
    }).catch((error) => alert("Ocurrió un error: " + error));
})

/* ----------------------------------------------------------------------------- */
/* ---------------------------- Autenticación de usuario ---------------------------- */
/* ----------------------------------------------------------------------------- */
const formLogin = document.querySelector('[data-form-login]');

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    // Recupera las entradas del usuario
    const email = document.querySelector('[data-form="emailLogin"]').value;
    const pass = document.querySelector('[data-form="passLogin"]').value;

    // Inicia la promesa para recuperar los usuarios del servidor
    userService.getUser().then( resultPromise => {
        resultPromise.forEach(user => {
            // Busca donde existan coincidencias del email, si no hay, lo informa
            (user.email === email) 
            // De existir coincidencia compara la contraseña almacenada con la entrada
                ? (user.pass === pass)
                // Si coinciden envía al usuario a la página de administrador, sino, lo informa
                    ? window.location.href = "admin-item.html"
                    : alert("Email o contraseña no válidos")
                : alert("Email o contraseña no válidos")
        });
    }).catch((error) => alert("Ocurrió un error: " + error));
})

/* ----------------------------------------------------------------------------- */
/* ---------------------------- Cambiar entre formularios ---------------------- */
/* ----------------------------------------------------------------------------- */
const button = document.querySelector('[data-option]');
let showLoginForm = true;

button.addEventListener("click", () =>{
    showLoginForm = !showLoginForm;
    if(showLoginForm === false) {
        formLogin.style.display = "none";
        formRegister.style.display = "flex";
    }
    else {
        formLogin.style.display = "flex";
        formRegister.style.display = "none";
    }
})

/* ----------------------------------------------------------------------------- */
/* ---------------------------- Mostrar u ocultar contraseña-------------------- */
/* ----------------------------------------------------------------------------- */
const check = document.querySelector('[data-check]');

check.addEventListener("change", () => {
    const pass = document.querySelector('[data-form="passLogin"]');
    (pass.type == "password")
        ? pass.type = "text"
        : pass.type = "password"
})