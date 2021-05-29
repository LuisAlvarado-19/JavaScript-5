
// Aca creamos la accion que se va ejecutar, esto es para no tener que hacerlo en el html
const agregarEvento = () => {
// Le indicamos donde vamos a crear la accion en este caso sera en la parte de seccion y mas especifico
// en el boton
const elemento = document.querySelector('section > button');
// igualamos el evento a la funcion que queremos fucionar
elemento.onclick = mostrarMensaje;
}

const mostrarMensaje = () => {
    alert("Presiono el boton");
};

// onload lo que hace es que apenas se abra la pagina se cargue la funcion agregarEvento y se fucione con 
// la otra funcion creada.
onload = agregarEvento;