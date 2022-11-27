const jsonURL = "https://keine-ecommerce.onrender.com"
// Código simplificado con Fetch API con GET que consulta todos los usuarios.
const getUser = () => fetch(`${jsonURL}/users`).then( response => response.json() );

// Promesa que envía los parámetros para crear un nuevo usuario.
const createUser = (name, email, pass) => {
    // Fetch definiendo como método a emplear POST para enviar información del formulario
    return fetch(`${jsonURL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Construye y traduce a string la información a enviar con el id generado automáticamente con la librería UUID desde CDN
        body: JSON.stringify({name, email, pass, id: uuid.v4()})
    })
}

export const userService = {
    getUser,
    createUser,
}