
    // Aca creamos la accion que se va ejecutar, esto es para no tener que hacerlo en el html
    const agregarEvento = () => {
    // Le indicamos donde vamos a crear la accion en este caso sera en la parte de seccion y mas especifico
    // en el boton
    const elemento = document.querySelector('section > button');
    // Estamos pasando el evento listener al que pasaremos como parametro el evento y la funcion.
    elemento.addEventListener('click', mostrarMensaje);
    }
    const mostrarMensaje = () => {
        alert("Presiono el boton");
    };
   
    addEventListener('load', agregarEvento);
    // Una diferencia es que en javaScript no lleva el sufijo on, como si lo hace html, por ejemplo
    // onclick, onload, en java es solo click y solo load.