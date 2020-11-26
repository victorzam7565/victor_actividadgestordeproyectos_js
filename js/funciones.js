function abrirPanel(panelInicial){
    const paneles = document.querySelectorAll(".panel")
    paneles.forEach(panel=>panel.classList.remove("activa"));
    const opciones = document.querySelectorAll(".opcion")
    opciones.forEach(opcion=>opcion.classList.remove("activo"))
    document.getElementById(panelInicial).classList.add("activa")
}
fetch('../data/bd.json')
.then(respuesta=>respuesta.json())
.then(datos=>agregarProyectos(datos.proyectos))
function agregarProyectos(datos){
const proyectos = datos
const tabla=document.querySelector("#listarProyectos")
proyectos.forEach(proyecto=>{
     tabla.innerHTML+=`
     ${proyecto.nombre}
     ${proyecto.lenguaje}
     ${proyecto.monto}
     
     `
})
}

function insertar(evt){
evt.preventDefault()

const valores=[{
      nombre:document.getElementById('nombre').value,
      lenguaje:document.getElementById('lenguaje').value,
      monto:document.getElementById('monto').value,
}]

agregarProyectos(valores)
limpiarFormulario()
}
function limpiarFormulario(){
 document.getElementById("nombre").value="";
 document.getElementById("lenguaje").value="";
 document.getElementById("monto").value="";
}