// Selecciona el elemento .text
var text = document.querySelector (".text");

// Añade un evento de clic al elemento .text
text.addEventListener ("click", function () {

    // Define una variable para guardar el estado del parpadeo
    var blinking = true;

    // Define una variable para guardar el intervalo de tiempo
    var interval = 100; // milisegundos

    // Define una función para cambiar la visibilidad del elemento .text
    function toggleVisibility () {

        // Si el estado es verdadero, oculta el elemento .text
        if (blinking) {
            text.style.visibility = "hidden";
        }

        // Si el estado es falso, muestra el elemento .text
        else {
            text.style.visibility = "visible";
        }

        // Cambia el estado al opuesto
        blinking = !blinking;
    }

    // Llama a la función toggleVisibility cada intervalo de tiempo
    var timer = setInterval (toggleVisibility, interval);

    // Después de 1 segundo, detiene el intervalo y muestra el elemento .text
    setTimeout (function () {
        clearInterval (timer);
        text.style.visibility = "visible";
    }, 1000);

});
