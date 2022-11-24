// Código simplificado con Fetch API con GET
const getUser = () => fetch(`http://localhost:3000/users`).then( response => response.json() );

const createUser = (name, email, pass) => {
    // Fetch definiendo como método a emplear POST para enviar información del formulario
    return fetch("http://localhost:3000/users", {
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