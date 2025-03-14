// Seleccionem els elements del HTML
const caixa = document.querySelector(".caixa"); // Seleccionem la caixa
const slider = document.getElementById("sliderVelocitat");
const inputRadi = document.getElementById("inputRadi");
const btnRestablir = document.getElementById("reset");

// Variables globals per controlar l'estat de l'animació i el color
let animacioActivada = false;
let indexColor = 0;
let colors = ['red', 'green', 'blue', 'purple', 'orange'];
let formes = ['square', 'circle', 'triangle'];
let formaActual = 'square'; // Inicialment quadrat

// Funció per canviar el color de la caixa
function canviarColor() {
    caixa.style.backgroundColor = colors[indexColor];
    indexColor = (indexColor + 1) % colors.length;
}

// Funció per canviar la forma de la caixa
function canviarForma() {
    if (animacioActivada) {
        alert("No es pot canviar la forma mentre l'animació està activada.");
        return;
    }
    let indexForma = (formes.indexOf(formaActual) + 1) % formes.length;
    formaActual = formes[indexForma];
    aplicarForma();
}

// Funció per aplicar la forma actual a la caixa
function aplicarForma() {
    caixa.classList.remove('square', 'circle', 'triangle'); // Eliminar totes les formes
    caixa.classList.add(formaActual); // Afegir la nova forma
}

// Funció per activar/desactivar l'animació
function activarAnimacio() {
    animacioActivada = !animacioActivada;
    if (animacioActivada) {
        caixa.classList.add('animacio');
    } else {
        caixa.classList.remove('animacio');
    }
}

// Funció per modificar el radi del cercle
function modificarRadi() {
    if (formaActual !== 'circle') {
        alert("Només es pot aplicar el radi a un cercle.");
        return;
    }
    caixa.style.borderRadius = `${inputRadi.value}%`;
}

// Funció per restablir la configuració original
function restablirConfiguracio() {
    // Restablir color, forma, animació i radi
    caixa.style.backgroundColor = 'blue';
    formaActual = 'square';
    caixa.style.borderRadius = '0';
    aplicarForma();
    animacioActivada = false;
    caixa.classList.remove('animacio');
    slider.value = 2; // Restablir la velocitat a un valor per defecte
    inputRadi.value = 50; // Restablir radi
}

// Funció per controlar la velocitat de l'animació
function actualitzarVelocitat() {
    let velocitat = slider.value;
    caixa.style.animationDuration = `${velocitat}s`;
}

// Esdeveniments dels botons
document.getElementById("canviarColor").addEventListener("click", canviarColor);
document.getElementById("canviarForma").addEventListener("click", canviarForma);
document.getElementById("activarAnimacio").addEventListener("click", activarAnimacio);
inputRadi.addEventListener("input", modificarRadi);
btnRestablir.addEventListener("click", restablirConfiguracio);
slider.addEventListener("input", actualitzarVelocitat);

// Iniciar la caixa amb configuració inicial
aplicarForma();
caixa.style.backgroundColor = 'blue';
caixa.style.animationDuration = '2s'; // Velocitat inicial per a l'animació
