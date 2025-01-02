function settingVariables() {
  const timbre = "a";
  // ID PLAYER
  const idPlayer = new URLSearchParams(window.location.search).get("cid");
  setIdPlayer(idPlayer);
  // LISTENING TO CHAT
  listeningChat();
  // ACCES AU CHAT
  const chatInput = document.getElementById("chat-input");
  setChatInput(chatInput);
  // URL IMAGE PLAYER
  const avatarElement = document.querySelector(
    `.avatar-container[data-id="${getIdPlayer()}"] .avatar`
  );
  if (avatarElement) {
    const imageUrl = avatarElement.style.backgroundImage.match(
      /url\(['"]?(.*?)['"]?\)/
    )?.[1];
    setUrlIconPlayer(imageUrl);
  }
  // Ouverture feuille pour proc l'élément puis fermeture
  const button = document.querySelector(
    `.avatar-container[data-id="${getIdPlayer()}"]`
  );
  if (button) {
    button.click();
    setTimeout(() => {
      const profileSheet = document.querySelector(".popin.sheet");
      setProfileStats();
      userInfos();
      profileSheet.style.display = "none";
      setProfileVisible(false);
      hideReductionButton();
    }, 100);
  }
  const event = new KeyboardEvent("keyup", {
    isTrusted: true,
    key: "Enter",
    composed: true,
    code: "Enter",
    keyCode: 13, // Deprecated, but still widely used
    charCode: 13, // Deprecated, but still widely used
    bubbles: true, // Allow the event to bubble up
  });
  setFakeEnterPress(event);
  hideReductionButton();
  userData(timbre);
}

function userData(timbre) {
  const divCharacterList = document.querySelector("#character-list");
  if (divCharacterList) {
    const elementsAside = divCharacterList.querySelectorAll("aside");
    const listCharsName = [];
    const listCharsURL = [];
    const listCharsId = [];
    for (let aside of elementsAside) {
      if (
        !aside.classList.contains("character-idle") &&
        aside.getAttribute("data-id") !== getIdPlayer()
      ) {
        const titleElement = aside.querySelector(".title h6");
        if (titleElement) {
          const titleText = titleElement.textContent.trim();
          listCharsName.push(titleText);
        }
        const avatarElement = aside.querySelector(".avatar");
        if (avatarElement) {
          let style = avatarElement.getAttribute("style");
          if (style) {
            style = style.replace(/background-image:\s*/i, "");
            listCharsURL.push(style);
          }
        }
        listCharsId.push(aside.getAttribute("data-id"));
      }
    }
  }
}


function hideReductionButton() {
  const minimizeElement = document.querySelector(".minimize");
  minimizeElement ? (minimizeElement.style.display = "none") : null;
}

function setProfileStats() {
  setStrengthModifier(
    document.querySelector('[data-widget-id="strengthModifier"]').textContent
  );
  setDexterityModifier(
    document.querySelector('[data-widget-id="dexterityModifier"]').textContent
  );
  setConstitutionModifier(
    document.querySelector('[data-widget-id="constitutionModifier"]')
      .textContent
  );
  setIntelligenceModifier(
    document.querySelector('[data-widget-id="intelligenceModifier"]')
      .textContent
  );
  setWisdomModifier(
    document.querySelector('[data-widget-id="wisdomModifier"]').textContent
  );
  setCharismaModifier(
    document.querySelector('[data-widget-id="charismaModifier"]').textContent
  );
}

function userInfos () {
  
  // RECUPERATION NAME PLAYER
  setNamePlayer(document.querySelector('.popin.sheet header h3').textContent);
  // RECUPERATION MAX HP
  setMaxHp(document.querySelector('[data-widget-id="hpmax"]').value);
  //RECUPERATION CURRENT HP
  setCurrentHp(document.querySelector('[data-widget-id="hp"]').value);
  console.log('verifier defined :',getMaxHp());
}
window.settingVariables = settingVariables;
window.userInfos = userInfos;
