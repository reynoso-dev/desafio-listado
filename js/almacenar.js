const item = document.getElementById('item');
const agregar = document.getElementById('agregar');
const contenedor = document.getElementById('contenedor')
const limpiar = document.getElementById('limpiar')


function verLista() {
    const listaGuardada = localStorage.getItem('listaGuardada');
    if (listaGuardada) {
        contenedor.innerHTML = listaGuardada;
    }
}

function guardarLista() {
    localStorage.setItem('listaGuardada', contenedor.innerHTML);
}

function agregarItem() {
    const itemTexto= item.value;

    if (itemTexto.trim() != '') {
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = itemTexto;
        contenedor.appendChild(nuevoItem);
        item.value = '';
        guardarLista()
    }
}

agregar.addEventListener('click', agregarItem);

verLista();

limpiar.addEventListener('click', function() {
    contenedor.innerHTML = '';
    localStorage.removeItem('listaGuardada');
});