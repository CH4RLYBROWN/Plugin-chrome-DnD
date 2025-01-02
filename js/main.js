// Buttons du popup
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: main,
      });
    });
  });

  document.getElementById("test").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: updateItems,
      });
    });
  });
});

function main() {
  const online = "online";
  settingVariables();
  creationLeftColumn();
  creationPlayersSection();
  setTimeout(sendStatusUpdate,100,online);
  setTimeout(calculPoids,100);
  manageInventory();
}





function test () {
  console.log(getNamePlayer(), getMaxHp(), getCurrentHp());
  const selectElement = document.querySelector('.widget.form-control[data-widget-id="diceThrow"]');
  console.warn(selectElement)
  let currentIndex = selectElement.selectedIndex;
  let newIndex = (currentIndex + 1) % selectElement.options.length;
  selectElement.selectedIndex = newIndex;
}


/*
2- commencer à implémenter la gestion de la nourriture
3- implémenter les rôles en exploration

IDEES:
Compter fleches, utilisations et récupération

*/