const btnLupa2 = document.querySelector(".header__lupa2");
const btnLupa = document.querySelector(".header__lupa");
const barraBuscar = document.querySelector(".header__buscar");

function Lupa2() {
    barraBuscar.classList.add("miclase");
    btnLupa2.classList.add("lupaNone2");
    btnLupa.classList.add("lupaNone");

    

}

function quitarClases() {
    barraBuscar.classList.remove("miclase");
    btnLupa2.classList.remove("lupaNone2");
    btnLupa.classList.remove("lupaNone");

}

function clicFueraDeSeccion(event) {
    if (!barraBuscar.contains(event.target)) {
      quitarClases();
    }
  }

  btnLupa2.addEventListener("click", Lupa2);
  window.addEventListener("scroll", quitarClases);
  document.addEventListener("mousedown", clicFueraDeSeccion);