document.addEventListener("DOMContentLoaded", function () {
    const itemInput = document.getElementById("item");
    const addButton = document.getElementById("agregar");
    const itemList = document.getElementById("contenedor");
    const clearButton = document.getElementById("limpiar");
  
    // Se usa la funcion JSON.parse() para convertir texto en objeto JS
    const savedItems = JSON.parse(localStorage.getItem("items")) || [];
    savedItems.forEach(function (itemText) {
      addItemToList(itemText);
    });
  
    addButton.addEventListener("click", function () {
      const newItemText = itemInput.value.trim();
      if (newItemText !== "") {
        addItemToList(newItemText);
        itemInput.value = "";
  
        const savedItems = JSON.parse(localStorage.getItem("items")) || [];
        savedItems.push(newItemText);
        localStorage.setItem("items", JSON.stringify(savedItems));
      }
    });
  
    clearButton.addEventListener("click", function () {
      itemList.innerHTML = "";
      localStorage.removeItem("items");
    });
  
    function addItemToList(text) {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = text;
      itemList.appendChild(li);
    }
  });


