function pedirCorreo() {
    let correo = prompt("Por favor, ingresa tu correo electrónico:");
    if (correo) {
        console.log("El correo ingresado es: " + correo);
    } else {
        console.log("No se ingresó ningún correo.");
    }
}

function agregarComentario() {
    let comentario = prompt("Por favor, escribe tu comentario sobre la página:");
    if (comentario) {
        let listaComentarios = document.getElementById("lista-comentarios");

        let nuevoComentario = document.createElement("li");
        nuevoComentario.textContent = comentario;
        listaComentarios.appendChild(nuevoComentario);
    } else {
        console.log("No se ingresó ningún comentario.");
    }
}