import { clientetServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id == null){
        window.location.href = "error.html"
    };

    const nombre = document.querySelector("[data-nombre]");
    const categoria = document.querySelector("[data-categoria]");
    const precio = document.querySelector("[data-precio]");
    const imagen = document.querySelector("[data-imagen]");
    const descripcion = document.querySelector("[data-descripcion]");

    clientetServices.detalleProducto(id)
        .then(producto => {
            nombre.value = producto.nombre;
            categoria.value = producto.categoria;
            precio.value = producto.precio;
            imagen.value = producto.imagen;
            descripcion.value = producto.descripcion;
            
        });
};

obtenerInformacion();

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    clientetServices.actualizarProducto(nombre,categoria,precio,imagen,descripcion, id).then(()=>{
        window.location.href= "actualizacionCorrecta.html"
    });

});