import { clientetServices } from "../service/client-service.js";

const crearNuevaLinea =(imagen, nombre, precio, descripcion)=>{
    const linea = document.createElement("div");
    linea.classList.add("detalle__producto");
    const contenido =`
            <div class="detalle__producto__imagen">
                <img src=${imagen}>
            </div>
            <div class="detalle__producto__card">
                <h1>${nombre}</h1>
                <h4>$${precio}</h4>
                <h5>${descripcion} 
                </h5>
            </div>
`;
linea.innerHTML = contenido;
return linea;

};



const obtenerdetalle = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    clientetServices.detalleProducto(id).then( producto =>  {
        const detalleProducto = document.querySelector("[data-detalleproducto]");
        const nuevaLinea = crearNuevaLinea(producto.imagen, producto.nombre, producto.precio, producto.descripcion);
        detalleProducto.appendChild(nuevaLinea);
      });
    };
    
    obtenerdetalle();

