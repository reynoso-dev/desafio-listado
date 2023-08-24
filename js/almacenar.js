function cargarLista() {
    const listaGuardada = localStorage.getItem('listaItems');
    if (listaGuardada) {
      const contenedor = document.getElementById('contenedor');
      contenedor.innerHTML = listaGuardada;
    }
  }
  
  // Función para guardar la lista de ítems en el almacenamiento local
  function guardarLista() {
    const contenedor = document.getElementById('contenedor');
    const listaItems = contenedor.innerHTML;
    localStorage.setItem('listaItems', listaItems);
  }
  
  // Función para agregar un nuevo ítem a la lista
  function agregarItem() {
    const itemInput = document.getElementById('item');
    const nuevoItem = itemInput.value.trim(); 
    
    if (nuevoItem !== '') {
      const contenedor = document.getElementById('contenedor');
      const nuevoElemento = document.createElement('li');
      nuevoElemento.classList.add('list-group-item');
      nuevoElemento.textContent = nuevoItem;
      contenedor.appendChild(nuevoElemento);
  
      guardarLista(); // Guardar la lista actualizada en el almacenamiento local
      itemInput.value = ''; // Limpiar el campo de entrada
    }
  }
