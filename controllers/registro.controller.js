import { clientetServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    
    clientetServices
     .crearProducto(nombre,categoria,precio,imagen,descripcion)
     .then( () =>{
        window.location.href = "satisfactorio.html";
     })
     .catch ((err)=>console.log(err));
});

