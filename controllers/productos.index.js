import { clientetServices } from "../service/client-service.js";

const crearNuevaLinea = (imagen, nombre, precio, id) => {
    const linea = document.createElement("div");
    linea.classList.add("producto__barra__lista__item");
    const contenido =`
    
    <img src=${imagen} class="producto__barra__lista__item__imagen"
        alt="producto">
    <h5>${nombre}</h5>
    <h6>$${precio}</h6>
    <a href= "screens/detalleProducto.html?id=${id}" class="producto__barra__lista__item__link">Ver producto</a>
`;
linea.innerHTML = contenido;
  return linea;
};

const cargarProductosPorCategoria = (productos, categoria, seccion) => {
  const productosPorCategoria = productos.filter((producto) => producto.categoria === categoria);

  productosPorCategoria.forEach(({ imagen, nombre, precio, id }) => {
    const nuevaLinea = crearNuevaLinea(imagen, nombre, precio, id);
    seccion.appendChild(nuevaLinea);
  });
};

const cargarProductos = () => {
    clientetServices
      .listaProductos()
      .then((productos) => {
        const seccionStarWars = document.querySelector("[data-producto-starwars]");
        cargarProductosPorCategoria(productos, "Star Wars", seccionStarWars);
  
        const seccionConsolas = document.querySelector("[data-producto-consolas]");
        cargarProductosPorCategoria(productos, "Consolas", seccionConsolas);
  
        const seccionDiversos = document.querySelector("[data-producto-diversos]");
        cargarProductosPorCategoria(productos, "Diversos", seccionDiversos);
      })
      .catch((error) => alert("ocurrio un error"));
  };
  
  cargarProductos();