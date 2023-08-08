const listaProductos = () => fetch("https://64b5e595f3dbab5a95c7bafb.mockapi.io/productos").then(repuesta => repuesta.json());

const crearProducto = (nombre, categoria, precio, imagen, descripcion)=>{
    return fetch("https://64b5e595f3dbab5a95c7bafb.mockapi.io/productos",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,categoria,precio,imagen,descripcion, id: uuid.v4()}),
    });
};

const eliminarProducto =(id)=>{
    return fetch(`https://64b5e595f3dbab5a95c7bafb.mockapi.io/productos/${id}`,{
        method: "DELETE",
    });
};

const detalleProducto = (id)=>{
    return fetch(`https://64b5e595f3dbab5a95c7bafb.mockapi.io/productos/${id}`)
    .then((repuesta)=> repuesta.json()
    );
};

const actualizarProducto= (nombre,categoria,precio,imagen,descripcion, id)=>{
    return fetch(`https://64b5e595f3dbab5a95c7bafb.mockapi.io/productos/${id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,categoria,precio,imagen,descripcion})
    })
    .then((repuesta)=> repuesta)
    .catch((error)=> console.log(error));
};


export const clientetServices ={
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};