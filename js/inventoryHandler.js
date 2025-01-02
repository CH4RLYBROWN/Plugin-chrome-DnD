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
  addItemBtn = document.createElement("button");
  addItemBtn.classList.add("inventory-btn", "add-item-inventory");
  addItemBtn.textContent = "Ajouter";
  gridButtons.appendChild(addItemBtn);
  updateInvBtn.addEventListener("click", () => {
    setTimeout(updateItems, 0);
  });
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

function setupUpdateUI(targetedParentDiv) {
  // Créer un champ de texte pour le titre
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Nom de l'objet:";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.className = "update-invt-title";
  titleInput.placeholder = "Nom de l'objet";

  // Créer un conteneur pour les quantités et poids
  const quantityContainer = document.createElement("div");

  // Créer les labels et inputs pour les quantités
  const quantityLabel1 = document.createElement("label");
  quantityLabel1.textContent = "Quantité:";
  quantityLabel1.className = "quantity-label";
  const quantityInput1 = document.createElement("input");
  quantityInput1.type = "number";
  quantityInput1.className = "update-invt-number";
  quantityInput1.id = "inputInvtQuantity";
  quantityInput1.placeholder = "Quantité";

  const quantityLabel2 = document.createElement("label");
  quantityLabel2.textContent = "Poids:";
  quantityLabel2.className = "quantity-label";
  const quantityInput2 = document.createElement("input");
  quantityInput2.type = "number";
  quantityInput2.className = "update-invt-number";
  quantityInput2.id = "inputInvtWeight";
  quantityInput2.placeholder = "Poids";

  // Ajouter les labels et inputs au conteneur
  quantityContainer.appendChild(quantityLabel1);
  quantityContainer.appendChild(quantityLabel2);
  quantityContainer.appendChild(quantityInput1);
  quantityContainer.appendChild(quantityInput2);

  // Créer un champ de texte pour la description (utiliser un textarea)
  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description:";
  const descriptionInput = document.createElement("textarea"); // Changer input en textarea
  descriptionInput.className = "update-invt-description";
  descriptionInput.placeholder = "Description";
  descriptionInput.style.resize = "vertical"; // Permet de redimensionner verticalement
  descriptionInput.rows = 4; // Nombre de lignes visibles par défaut

  // Créer un switch pour alterner entre "On" et "Off"
  const switchLabel = document.createElement("label");
  switchLabel.textContent = "Switch: ";
  const switchInput = document.createElement("input");
  switchInput.type = "checkbox";
  switchInput.className = "update-invt-switch";

  // Créer un bouton pour valider
  const validateButton = document.createElement("button");
  validateButton.className = "inputs-update-validate";
  validateButton.textContent = "Valider";
  validateButton.onclick = function () {
    // Action à effectuer lors du clic sur le bouton
    applyItemUpdate(currentIndex);
  };

  const updateInputsCtn = document.createElement("div");
  updateInputsCtn.className = "inputs-update-ctn";
  targetedParentDiv.appendChild(updateInputsCtn);

  // Ajouter tous les éléments au document
  updateInputsCtn.appendChild(titleLabel);
  updateInputsCtn.appendChild(titleInput);
  updateInputsCtn.appendChild(quantityContainer);
  updateInputsCtn.appendChild(descriptionLabel);
  updateInputsCtn.appendChild(descriptionInput);
  switchLabel.appendChild(switchInput);
  updateInputsCtn.appendChild(switchLabel);
  updateInputsCtn.appendChild(validateButton);
}

function applyItemUpdate(index) {
  rowId = rowIds[index];
  console.log(rowId);

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

  itemName.value = title.value;
  quantite.value = quantity.value;
  poids.value = weight.value;
  console.log(itemName.value, title.value);


  const itemCtn = document.querySelector(`[data-row-id="${rowId}"]`);
  const itemCtnCld = itemCtn.children[1].firstElementChild;
  const doneBtn = itemCtnCld.children[1];
  //setTimeout( clicking, 3000, doneBtn);  

  const getValue = document.querySelector(
    ".inventory-btn.add-item-inventory"
  );
  getValue.addEventListener('click', () => {
    console.log("VOICI LA VALEUR VALUE :", itemName.value)
  })

  // Ajouter un écouteur d'événement pour le clic
  doneBtn.addEventListener("click", () => {
      alert("Bouton cliqué ! Valeur actuelle : " + itemName.value);
  });

  // Simuler une saisie dans le champ de texte
  itemName.value = "Bonjour, monde!";
  const inputEvent = new InputEvent("input", {
      bubbles: true,
      data: "Bonjour, monde!",
      inputType: "insertText"
  });
  itemName.dispatchEvent(inputEvent);

  // Simuler un clic sur le bouton
  const clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
  });
    doneBtn.addEventListener("click", (event) => {
      console.log("Default prevented?", event.defaultPrevented);
      if (event.defaultPrevented) {
          event.preventDefault(); // Désactive le comportement par défaut
      }
  });



}

function clicking (element) {
  console.warn('button:' , element)
  element.click();
}


window.manageInventory = manageInventory;
window.updateItems = updateItems;
