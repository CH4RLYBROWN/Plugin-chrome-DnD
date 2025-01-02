//  CREATION DE LA COLONNE DE GAUCHE
function creationLeftColumn(timbre) {
  // Préparation et suppression de l'ancien setup
  const divCharacterCol = document.querySelector("#character-col");
  const playerButton = document.querySelector(
    `aside[data-id="${getIdPlayer()}"]`
  );
  const divs = document.querySelectorAll("#left-column, #character-list");
  divs.forEach((div) => {
    div.style.display = "none";
  });

  // Préparation div player
  playerButton.className = "div-player avatar-container";
  playerButton.style.backgroundImage = `url('${getUrlIconPlayer()}')`;
  playerButton.firstElementChild.remove();
  playerButton.firstElementChild.style.width = "100%";
  playerButton.addEventListener("click", () => {
    openProfileSheet();
    
  });

  

  // Custom input jet de dés
  const textDiceCtn = document.createElement("div");
  textDiceCtn.className = "dice-roll-input";
  const inputRoll = document.createElement("input");
  inputRoll.type = "text";
  inputRoll.placeholder = "lancer custom";
  inputRoll.className = "dice-roll-input";
  inputRoll.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      customRollDice(inputRoll.value);
      inputRoll.value = "";
    }
  });
  textDiceCtn.appendChild(inputRoll);
  // Création Div lancé de dés
  const diceCtn = document.createElement("div");
  diceCtn.className = "dice-table";
  // Dé 4
  const diceDiv4 = document.createElement("div");
  diceDiv4.className = "dice-table-item";
  diceCtn.appendChild(diceDiv4);
  const diceIcon4 = document.createElement("i");
  diceIcon4.className = "fas fa-dice-d4 dice-fa";
  diceDiv4.appendChild(diceIcon4);
  diceDiv4.addEventListener("click", () => {
    diceGridRolls(4);
  });
  // Dé 6
  const diceDiv6 = document.createElement("div");
  diceDiv6.className = "dice-table-item";
  diceCtn.appendChild(diceDiv6);
  const diceIcon6 = document.createElement("i");
  diceIcon6.className = "fas fa-dice-d6 dice-fa";
  diceDiv6.appendChild(diceIcon6);
  diceDiv6.addEventListener("click", () => {
    diceGridRolls(6);
  });
  // Dé 10
  const diceDiv10 = document.createElement("div");
  diceDiv10.className = "dice-table-item";
  diceCtn.appendChild(diceDiv10);
  const diceIcon10 = document.createElement("i");
  diceIcon10.className = "fas fa-dice-d10 dice-fa";
  diceDiv10.appendChild(diceIcon10);
  diceDiv10.addEventListener("click", () => {
    diceGridRolls(10);
  });
  // Dé 20
  const diceDiv20 = document.createElement("div");
  diceDiv20.className = "dice-table-item";
  diceCtn.appendChild(diceDiv20);
  const diceIcon20 = document.createElement("i");
  diceIcon20.className = "fas fa-dice-d20 dice-fa";
  diceDiv20.appendChild(diceIcon20);
  diceDiv20.addEventListener("click", () => {
    diceGridRolls(20);
  });
  // Dé 100
  const diceDiv100 = document.createElement("div");
  diceDiv100.className = "dice-table-item";
  diceCtn.appendChild(diceDiv100);
  const diceIcon100 = document.createElement("i");
  diceIcon100.className = "fas fa-dice dice-fa";
  diceDiv100.appendChild(diceIcon100);
  diceDiv100.addEventListener("click", () => {
    diceGridRolls(100);
  });

  const privateRollSwitch = document.createElement("div");
  privateRollSwitch.className = "dice-table-item rolling-public";
  privateRollSwitch.textContent = "ALL";
  diceCtn.appendChild(privateRollSwitch);
  privateRollSwitch.addEventListener("click", () => {
    switchPrivate(privateRollSwitch);
  });

  // Avantage/Désavantage
  const advDiv = document.createElement("div");
  advDiv.className = "dice-table-item normal-color avantage-button";
  setHasAvantage("normal");
  advDiv.textContent = getHasAvantage();
  advDiv.addEventListener("click", () => {
    switchAvantage(advDiv);
  });


  // Jets de Caractéristiques
/*   const abiltyDiceCtn = document.createElement("div");
  abiltyDiceCtn.className = "ability-dice-table";
  // Dé de Force
  const diceForce = document.createElement("div");
  diceForce.className = "ability-table-item";
  diceForce.textContent = "For.";
  abiltyDiceCtn.appendChild(diceForce);
  diceForce.addEventListener("click", () => {
    abilityRolls(getStrengthModifier());
  });
  // Dé de Dextérité
  const diceDexterity = document.createElement("div");
  diceDexterity.className = "ability-table-item";
  diceDexterity.textContent = "Dex.";
  abiltyDiceCtn.appendChild(diceDexterity);
  diceDexterity.addEventListener("click", () => {
    abilityRolls(getDexterityModifier());
  });
  // Dé de Constitution
  const diceConstitution = document.createElement("div");
  diceConstitution.className = "ability-table-item";
  diceConstitution.textContent = "Cons.";
  abiltyDiceCtn.appendChild(diceConstitution);
  diceConstitution.addEventListener("click", () => {
    abilityRolls(getConstitutionModifier());
  });
  // Dé de Intelligence
  const diceIntelligence = document.createElement("div");
  diceIntelligence.className = "ability-table-item";
  diceIntelligence.textContent = "Int.";
  abiltyDiceCtn.appendChild(diceIntelligence);
  diceIntelligence.addEventListener("click", () => {
    abilityRolls(getIntelligenceModifier());
  });
  // Dé de Sagesse
  const diceWisdom = document.createElement("div");
  diceWisdom.className = "ability-table-item";
  diceWisdom.textContent = "Sag.";
  abiltyDiceCtn.appendChild(diceWisdom);
  diceWisdom.addEventListener("click", () => {
    abilityRolls(getWisdomModifier());
  });
  // Dé de Charisme
  const diceCharisma = document.createElement("div");
  diceCharisma.className = "ability-table-item";
  diceCharisma.textContent = "Cha.";
  abiltyDiceCtn.appendChild(diceCharisma);
  diceCharisma.addEventListener("click", () => {
    abilityRolls(getCharismaModifier());
  }); */

  // Création et ajout des Divs
  const column = document.createElement("div");
  column.className = "left-column";
  column.appendChild(playerButton);
  column.appendChild(textDiceCtn);
  column.appendChild(diceCtn);
  column.appendChild(advDiv);
  // column.appendChild(abiltyDiceCtn);


  // Ajout de la colonne gauche à la page
  document.body.appendChild(column);
}


function openProfileSheet() {
  const profileSheet = document.querySelector(".popin.sheet");
  if (isProfileVisible()) {
    profileSheet.style.display = "none";
    setProfileVisible(false);
  } else {
    profileSheet.style.display = "block";
    setProfileVisible(true);
  }
}


window.creationLeftColumn = creationLeftColumn;