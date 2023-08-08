import { clientetServices } from "../service/client-service.js";


const crearNuevaLinea = (imagen, nombre, precio, id) => {
    const linea = document.createElement("div");
    linea.classList.add("producto__barra__lista__item");
    const contenido = `
   
                    <div class="producto__barra__lista__item__imagen">
                        <img src=${imagen} class="producto__barra__lista__item__imagen"
                            alt="producto">
                        <div class="totalProductos__barra__icono">
                            <a class="totalProductos__barra__icono__a" data-delete id="${id}" ><i class='bx bxs-trash'></i></a>
                            <a href= "actualizar.html?id=${id}" class="totalProductos__barra__icono__a"><i class='bx bxs-pencil'></i></a>
                        </div>
                    </div>
                    <h5>${nombre}</h5>
                    <h6>$${precio}</h6>
                    <a href= "detalleProducto.html?id=${id}" class="producto__barra__lista__item__link">Ver producto</a>
                `;
    linea.innerHTML = contenido;

    const btn = linea.querySelector("[data-delete]");
    btn.addEventListener("click", () => {
        const id = btn.id;
        clientetServices.eliminarProducto(id)
            .then(respuesta => {
                location.reload();
            })
            .catch(error => alert("Ocurrió un error al eliminar el producto"));
    });

    return linea;

};

const card = document.querySelector("[data-productoEdit]");


clientetServices
    .listaProductos()
    .then((data) => {
        data.forEach(({ imagen, nombre, precio, id }) => {
            const nuevaLinea = crearNuevaLinea(imagen, nombre, precio, id);
            card.appendChild(nuevaLinea);
        });
    })
    .catch((error) => alert("ocurrio un error"));

