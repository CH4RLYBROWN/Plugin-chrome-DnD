// Création de tous les conteneurs

function setupUpdateUI(targetedParentDiv) {
  const updateInputsCtn = document.createElement("div");
  updateInputsCtn.className = "inputs-update-ctn";
  targetedParentDiv.appendChild(updateInputsCtn);

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
    applyItemUpdate(currentIndex);
  };

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

  const title = document.querySelector(".update-invt-title");
  const quantity = document.querySelector("#inputInvtQuantity");
  const weight = document.querySelector("#inputInvtWeight");
  const description = document.querySelector(".update-invt-description");

  // Met à jour les valeurs dans l'interface
  itemName.value = title.value;
  quantite.value = quantity.value;
  poids.value = weight.value;
  itemDescription.value = description.value;

  // Déclencher un événement 'input' et 'change' pour forcer la mise à jour de l'UI
  inputChangeEvent(itemName);
  inputChangeEvent(quantite);
  inputChangeEvent(poids);
  inputChangeEvent(itemDescription);

  // Simuler le clic sur le bouton de sauvegarde
  const itemCtn = document.querySelector(`[data-row-id="${rowId}"]`);
  const itemCtnCld = itemCtn.children[1].firstElementChild;
  const doneBtn = itemCtnCld.children[1]; // Assure-toi que c'est bien le bon bouton
  doneBtn.click();
  currentIndex++;
  console.log(index);
  setTimeout(displayRowId, 10, currentIndex);
}

window.setupUpdateUI = setupUpdateUI;
