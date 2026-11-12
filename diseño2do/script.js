var diapositivas = document.querySelectorAll(".diapositiva");
var botonAnterior = document.getElementById("btnAnterior");
var botonSiguiente = document.getElementById("btnSiguiente");
var contador = document.getElementById("contador");

var actual = 0;

function mostrar(n) {
  if (n < 0) {
    n = 0;
  }
  if (n > diapositivas.length - 1) {
    n = diapositivas.length - 1;
  }

  for (var i = 0; i < diapositivas.length; i++) {
    diapositivas[i].classList.remove("activa");
  }

  diapositivas[n].classList.add("activa");
  actual = n;

  contador.textContent = (n + 1) + " / " + diapositivas.length;
}

function siguiente() {
  mostrar(actual + 1);
}

function anterior() {
  mostrar(actual - 1);
}

botonSiguiente.onclick = siguiente;
botonAnterior.onclick = anterior;

document.addEventListener("keydown", function (evento) {
  if (evento.key === "ArrowRight" || evento.key === " ") {
    evento.preventDefault();
    siguiente();
  }
  if (evento.key === "ArrowLeft") {
    anterior();
  }
});

mostrar(0);