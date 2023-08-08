import { clientetServices } from "../service/client-service.js";

const crearNuevaLinea =(imagen, nombre, precio, id)=>{
    const linea = document.createElement("div");
    linea.classList.add("slick");
    const contenido =`
    
    <img src=${imagen} class="producto__barra__lista__item__imagen"
        alt="producto">
    <h5>${nombre}</h5>
    <h6>$${precio}</h6>
    <a href= "detalleProducto.html?id=${id}" class="producto__barra__lista__item__link">Ver producto</a>
`;
linea.innerHTML = contenido;
return linea;

};

const card = document.querySelector("[data-producto]")


clientetServices
.listaProductos()
.then((data)=>{
    data.forEach(({imagen, nombre, precio, id}) => {
        const nuevaLinea = crearNuevaLinea(imagen, nombre, precio, id);
        card.appendChild(nuevaLinea);
    }); 
})
.catch((error)=> alert("ocurrio un error"));

