import { clientetServices } from "../service/client-service.js";

const crearNuevaLinea = (imagen, nombre, precio, id) => {
  const linea = document.createElement("div");
  linea.classList.add("producto__barra__lista__item");
  const contenido = `
    <img src=${imagen} class="producto__barra__lista__item__imagen" alt="producto">
    <h5>${nombre}</h5>
    <h6>$${precio}</h6>
    <a href="detalleProducto.html?id=${id}" class="producto__barra__lista__item__link">Ver producto</a>
  `;
  linea.innerHTML = contenido;
  return linea;
};

const listaResultados = document.querySelector("[data-producto]");

function mostrarResultados(resultados) {
    listaResultados.innerHTML = ""; // Limpiamos la lista de resultados antes de mostrar los nuevos
  
    if (resultados.length === 0) {
      // Si no hay resultados, mostrar mensaje de "Ningún producto encontrado"
      const divSinResultados = document.createElement("div");
      divSinResultados.classList.add("sinResultados");
  
      const imagenNingunProducto = document.createElement("img");
      imagenNingunProducto.src = "../assets/img/logueo/p5none.png"; // Cambiar por la ruta de la imagen deseada
      imagenNingunProducto.alt = "Ningún producto encontrado";
      divSinResultados.appendChild(imagenNingunProducto);
  
      const mensajeSinResultados = document.createElement("h1");
      mensajeSinResultados.textContent = "Ningún producto encontrado";
      divSinResultados.appendChild(mensajeSinResultados);
  
      listaResultados.appendChild(divSinResultados);
    } else {
      // Si hay resultados, mostrar los productos
      resultados.forEach(({ imagen, nombre, precio, id }) => {
        const nuevaLinea = crearNuevaLinea(imagen, nombre, precio, id);
        listaResultados.appendChild(nuevaLinea);
      });
    }
  }
  
  

function obtenerParametroURL(nombreParametro) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombreParametro);
}


document.addEventListener("DOMContentLoaded", () => {
  const terminoBusqueda = obtenerParametroURL("query");

  if (terminoBusqueda) {
    clientetServices
      .listaProductos()
      .then((data) => {
        const resultados = data.filter(
          (producto) => producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
        );
        mostrarResultados(resultados);
      })
      .catch((error) => alert("ocurrió un error al cargar los productos"));
  } else {
    alert("No se proporcionó ningún término de búsqueda.");
  }
});