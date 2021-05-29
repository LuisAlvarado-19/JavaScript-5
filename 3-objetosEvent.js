const agregarEvento = () => {
    const boton = document.getElementById('boton');
    boton.addEventListener('click', mostrarEvento);


// Estoy seleccionando el objeto de html que voy modificar
let lista = document.querySelectorAll('section > p');

// recorremos la lista con un for
for (let i = 0; i < lista.length; i++) {
    let elemento = lista[i];

    // Aca le pasamos a la variable elemento un listener de cambiar color y que sea con un click.
    elemento.addEventListener('click', cambiarColor)
    elemento.addEventListener('click', cambiarContenido)
}
}

const cambiarContenido = (e) =>{
    e.target.innerHTML = 'Hola Ana';
}

const cambiarColor = (e) => {
    e.target.style.backgroundColor = 'blue';
}

// Con esto puedo acceder a que tipo de valor tengo y que de que tipo es tambien.
// es un evento de tipo click, un evento mouse, y me dice que documento del hmtl es.
const mostrarEvento = (e) => {
    alert(` Evento: ${e}\r\n Target: ${e.target}\r\n Tipo: ${e.type}`)
};

addEventListener('load', agregarEvento);
