const itemInput = document.getElementById("item");
const agregar = document.getElementById("agregar");
const contenedor = document.getElementById("contenedor");
const limpiar = document.getElementById("limpiar");
//obtener elementos del DOM

let items = JSON.parse(localStorage.getItem("items")) || [];
//prueba cargar lista de items almacenada localmente

function addItem() {
    const newItem = itemInput.value.trim();
    if (newItem !== "") {
      items.push(newItem);
      localStorage.setItem("items", JSON.stringify(items));
      itemInput.value = "";
      verLista();
    }
  }
//agregar nuevo item a la lista

function verLista() {
    contenedor.innerHTML = "";
    items.forEach(item => {
      const lista = document.createElement("lista");
      lista.textContent = item;
      contenedor.appendChild(lista);
    });
  }
//visualizar lista de items

  function limpiarLista() {
    items = [];
    localStorage.removeItem("items");
    verLista();
  }
//limpiar lista

agregar.addEventListener("click", addItem);
limpiar.addEventListener("click", limpiarLista);
//manejador de evento para el boton agregar y limpiar

verLista();
//visualizar la lista al cargar la página

