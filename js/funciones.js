function abrirPanel(panelInicial){
    //Recupera los elementos con la clase panel y eliminar la clase activa
    const paneles = document.querySelectorAll(".panel")
    paneles.forEach(panel=>panel.classList.remove("activa"));

    //Recupera los elementos con la clase opcion y elimina la clase activo
    const opciones = document.querySelectorAll(".opcion")
    opciones.forEach(opcion=>opcion.classList.remove("activo"))

    //Asigna la clase activa al elemento con el id que se recibe como parametro.
    //Esta accion hace visible el panel que corresponde al boton que fue clicado.
    document.getElementById(panelInicial).classList.add("activa")
}