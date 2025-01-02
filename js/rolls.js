function diceGridRolls(numberFaces) {
  const rollPrivate = getIsPrivate();
  switch (getHasAvantage()) {
    case "normal":
      if (rollPrivate) {
        getChatInput().value = `/gr 1d${numberFaces}`;
      } else {
        getChatInput().value = `/r 1d${numberFaces}`;
      }
      break;
    case "avantage":
      if (rollPrivate) {
        getChatInput().value = `/gr keeph(2d${numberFaces})`;
      } else {
        getChatInput().value = `/r keeph(2d${numberFaces})`;
      }
      break;
    case "desavantage":
      if (rollPrivate) {
        getChatInput().value = `/gr keepl(2d${numberFaces})`;
      } else {
        getChatInput().value = `/r keepl(2d${numberFaces})`;
      }
      break;
    default:
      console.log("État inconnu.");
  }
  getChatInput().dispatchEvent(getFakeEnterPress());
}

function customRollDice(inputText) {
  getChatInput().value = inputText;
  getChatInput().dispatchEvent(getFakeEnterPress());
}

/* function abilityRolls(abilityModifier) {
const private = getIsPrivate;
  switch (getHasAvantage()) {
    case "normal":
      if (private) {
        getChatInput().value = `/gr 1d20 +${abilityModifier}`;
        console.log('private')
      } else {
        getChatInput().value = `/r 1d20 +${abilityModifier}`;
      }
      break;
    case "avantage":
      if (private) { 
        getChatInput().value = `/gr keeph(2d20) + ${abilityModifier}`;
      } else {
      getChatInput().value = `/r keeph(2d20) + ${abilityModifier}`;
      }
      break;
    case "desavantage":
      if (private) {
        getChatInput().value = `/gr keepl(2d20) + ${abilityModifier}`;
      } else {
      getChatInput().value = `/r keepl(2d20) + ${abilityModifier}`;}
      break;
    default:
      console.log("État inconnu.");
  }
  getChatInput().dispatchEvent(getFakeEnterPress());
} */

function switchPrivate(div) {
  let isPrivate = getIsPrivate();
  if (!isPrivate) {
    div.classList.add("rolling-private");
    div.classList.remove("rolling-public");
    setIsPrivate(!isPrivate);
    div.textContent = "MJ";
    console.log("private: ", getIsPrivate());
  } else {
    div.classList.add("rolling-public");
    div.classList.remove("rolling-private");
    setIsPrivate(!isPrivate);
    console.log("public: ", getIsPrivate());
    div.textContent = "ALL";
  }
}

function switchAvantage(div) {
  let index = getAvantageStates().indexOf(getHasAvantage());
  if (index !== -1) {
    index = (index + 1) % getAvantageStates().length;
    setHasAvantage(getAvantageStates()[index]);
    div.textContent = getHasAvantage();
  }
  if (getHasAvantage() === "normal") {
    div.classList.remove("avantage-color");
    div.classList.remove("desavantage-color");
    div.classList.add("normal-color");
  } else if (getHasAvantage() === "avantage") {
    div.classList.add("avantage-color");
    div.classList.remove("desavantage-color");
    div.classList.remove("normal-color");
  } else if (getHasAvantage() === "desavantage") {
    div.classList.remove("avantage-color");
    div.classList.add("desavantage-color");
    div.classList.remove("normal-color");
  }
}

window.diceGridRolls = diceGridRolls;
window.customRollDice = customRollDice;
window.switchPrivate = switchPrivate;
window.switchAvantage = switchAvantage;
//window.abilityRolls = abilityRolls;
