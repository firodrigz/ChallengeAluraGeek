document.getElementById("btnBuscar").addEventListener("click", () => {
    const busqueda = document.getElementById("header-input").value;
    if (busqueda.trim() !== "") {
      window.location.href = `screens/busqueda.html?query=${encodeURIComponent(busqueda)}`;
    }
  });