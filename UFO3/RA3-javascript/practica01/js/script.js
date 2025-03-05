
// PART1 Selecciona elements HTML utilitzant JavaScript.

// Selecciona l’element <h1> amb id="titol"
const titol = document.getElementById('titol');

// Selecciona l’element <p> amb class="paragraf"
const paragraf = document.querySelector('.paragraf');
//2
//Canvia el text del h1 per un altre
titol.textContent = 'Practica 1 Javier';

//Modifica el contingut del <p> i fes que tingui text en negreta.
paragraf.innerHTML = '<strong>Text en negreta</strong>';
//3

//Canvia el color del text del <h1>.
titol.style.color = 'blue';

// Modifica la mida de la lletra del <h1>
titol.style.fontSize = '36px';

//PART 2: Afegir Esdeveniments d’Usuari

//Seleccionar el boto
const botoCanviarText = document.getElementById('canviarText');

// Afegeix un esdeveniment de clic al botó
botoCanviarText.addEventListener('click', function() {
    // Canvia el text del títol
    titol.textContent = 'Hola';

    // Canvia el color del text del títol
    titol.style.color = 'red';
});

//PART 3: Afegir i Eliminar Elements
// Selecciona el botó amb id="afegirElement"
const botoAfegirElement = document.getElementById('afegirElement');

// Selecciona el botó amb id="eliminarElement"
const botoEliminarElement = document.getElementById('eliminarElement');

// Selecciona la llista <ul> amb id="llista"
const llista = document.getElementById('llista');

// Afegeix un esdeveniment de clic al botó per afegir un nou element <li>
botoAfegirElement.addEventListener('click', function() {
    const nouElement = document.createElement('li');
    nouElement.textContent = 'Apruebame por favor!';
    llista.appendChild(nouElement);
});

// Afegeix un esdeveniment de clic al botó per eliminar l’últim element <li>
botoEliminarElement.addEventListener('click', function() {
    if (llista.lastElementChild) {
        llista.removeChild(llista.lastElementChild);
    }
});
