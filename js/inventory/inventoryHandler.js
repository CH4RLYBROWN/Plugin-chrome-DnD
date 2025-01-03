let currentIndex = 0;
let rowIds = [];

function manageInventory() {
  const inventoryDiv = document.querySelector(".books");
  inventoryDiv.firstElementChild.remove();
  inventoryDiv.classList.add("inventory-ctn");
  const gridButtons = document.createElement("div");
  const updateInvBtn = document.createElement("button");
  updateInvBtn.classList.add("inventory-btn", "update-inventory");
  updateInvBtn.textContent = "Update";
  gridButtons.appendChild(updateInvBtn);
  const addItemBtn = document.createElement("button");
  addItemBtn.classList.add("inventory-btn", "add-item-inventory");
  addItemBtn.textContent = "Ajouter";
  gridButtons.appendChild(addItemBtn);
  updateInvBtn.addEventListener("click", () => { updateItems(); });
  inventoryDiv.appendChild(gridButtons);
  setupUpdateUI(inventoryDiv);
}

function updateItems() {
  const updateCtn = document.querySelector(".inputs-update-ctn");
  updateCtn.style.display = "flex";
  const itemsSection = document.querySelector(
    '.widget.repeater[data-widget-id="items"]'
  );
  const sousSection = itemsSection.firstElementChild;
  const nextButton = document.querySelector(
    ".inventory-btn.add-item-inventory"
  );

  // Récupérer tous les rowIds
  Array.from(sousSection.children).forEach((child) => {
    const rowId = child.getAttribute("data-row-id");
    if (rowId) {
      rowIds.push(rowId);
    }
  });

  openItemEditSection();

  // Afficher le premier rowId
  displayRowId(currentIndex);

  // Ajouter un écouteur d'événements au bouton
  /* nextButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < rowIds.length) {
      displayRowId(currentIndex);
    } else {
      console.log("Tous les éléments ont été traités.");
    }
  }); */
}

function displayRowId(index) {
  const rowId = rowIds[index];
  const itemName = document.querySelector(
    `[data-widget-id="items.${rowId}.itemName"]`
  );
  const quantite = document.querySelector(
    `[data-widget-id="items.${rowId}.quantite"]`
  );
  const poids = document.querySelector(
    `[data-widget-id="items.${rowId}.taztjoqz"]`
  );
  const itemDescription = document.querySelector(
    `[data-widget-id="items.${rowId}.itemDescription"]`
  );
  const itemEquipped = document.querySelector(
    `[data-widget-id="items.${rowId}.itemEquipped"]`
  );

  const title = document.querySelector(".update-invt-title");
  const quantity = document.querySelector("#inputInvtQuantity");
  const weight = document.querySelector("#inputInvtWeight");
  const description = document.querySelector(".update-invt-description");
  title.value = itemName.value;
  quantity.value = quantite.value;
  weight.value = poids.value;
  description.value = itemDescription.value;
}




window.manageInventory = manageInventory;
window.updateItems = updateItems;
