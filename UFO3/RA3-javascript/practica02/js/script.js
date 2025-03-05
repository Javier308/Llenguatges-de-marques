
// 1️.
const botoAfegirElement = document.getElementById('afegirElement');
const llista = document.getElementById('llistaElements');
const input = document.getElementById('textElement');
let text = input.value.trim();

// 2️. Afegir funcionalitat al botó "Afegir Element"
botoAfegirElement.addEventListener('click', function() {
    text = input.value.trim();
    if (text !== "") {
        // Afegir només un element vàlid
        const nouElement = document.createElement('li');
        const spanText = document.createElement('span');
        spanText.className = 'editable';
        spanText.textContent = text;

        // 4️. Afegir botons "Editar" i "Eliminar" dins de cada <li>
        const botoEditar = document.createElement('button');
        botoEditar.textContent = 'Editar';
        botoEditar.className = 'editar';
        const botoEliminar = document.createElement('button');
        botoEliminar.textContent = 'Eliminar';
        botoEliminar.className = 'eliminar';

        nouElement.appendChild(spanText);
        nouElement.appendChild(botoEditar);
        nouElement.appendChild(botoEliminar);
        llista.appendChild(nouElement);

        // 5️. Fer que el text sigui editable en fer clic a "Editar"
        botoEditar.addEventListener('click', function() {
            const inputEdit = document.createElement('input'); // Crea un campo de entrada para editar el texto
            inputEdit.type = 'text';
            inputEdit.value = spanText.textContent;
            nouElement.insertBefore(inputEdit, spanText); // Inserta el campo de entrada antes del span
            nouElement.removeChild(spanText); // Elimina el span
            inputEdit.addEventListener('blur', function() {
                spanText.textContent = inputEdit.value; // Actualiza el texto del span con el valor del campo de entrada
                nouElement.insertBefore(spanText, inputEdit); // Inserta el span antes del campo de entrada
                nouElement.removeChild(inputEdit); // Elimina el campo de entrada
            });
        });

        // 6️. Canviar el color del text aleatòriament en fer-hi clic
        spanText.addEventListener('click', function() {
            const colors = ['red', 'blue', 'green', 'purple', 'orange'];
            const colorAleatori = colors[Math.floor(Math.random() * colors.length)];
            spanText.style.color = colorAleatori;
        });

        // 7️. Implementar funcionalitat per eliminar un element
        botoEliminar.addEventListener("click", function () {
            llista.removeChild(nouElement);
        });
    }
});