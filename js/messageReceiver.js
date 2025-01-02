function listeningChat() {
  const chatContainer = document.querySelector("#chat-container-all");

  if (chatContainer) {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeType === Node.ELEMENT_NODE &&
              node.getAttribute("data-character-id") === getIdPlayer()
            ) {
              console.log("ce message vient de moi");
            } else if (
              node.nodeType === Node.ELEMENT_NODE &&
              node.classList.contains("with-username")
            ) {
              setTimeout(() => {
                let fullText = node.textContent;
                const usernameElement = node.querySelector(".username");
                if (usernameElement) {
                  fullText = fullText.replace(usernameElement.textContent, "");
                }
                parseMessage(fullText);
              }, 10);
            } else if (
              node.nodeType === Node.ELEMENT_NODE &&
              node.classList.contains("message")
            ) {
              parseMessage(node.textContent);
            }
          });
        }
      }
    });
    observer.observe(chatContainer, { childList: true });
  } else {
    console.error("L'élément 'chat-container' n'a pas été trouvé dans le DOM.");
  }
}

function parseMessage(message) {
  const chatContainer = document.querySelector("#chat-container-all");
  let online = false;
  if (message.startsWith("systeme: online:")) {
    online = true;
    systemeMessage(message, online);
    
  } else if (message.startsWith("systeme:")) {
    chatContainer.lastChild.style.display = "none";
    systemeMessage(message);
  }
}

function systemeMessage(message, online) {
  if (online === true) {
    sendStatusUpdate();
  }
  const regex =
    /idPlayer:\s*(\d+),\s*namePlayer:\s*([^,]+),\s*maxHP:\s*(\d+),\s*currentHP:\s*(\d+),\s*urlImage:\s*([^,]+)/;
  const match = message.match(regex);
  console.log('passage 1')
  if (match) {
    const idPlayer = match[1];
    const namePlayer = match[2];
    const maxHP = match[3];
    const currentHp = match[4];
    const urlImage = match[5];
    console.log(idPlayer);

    if (!getPlayer1IsCreated()) {
      setPlayer1Id(idPlayer);
      setNamePlayer1(namePlayer);
      setMaxHpPlayer1(maxHP);
      setCurrentHpPlayer1(currentHp);
      setUrlImagePlayer1(urlImage);
      setPlayer1IsCreated(true);
      updatePlayerSection();
  } else if (idPlayer === getPlayer1Id()) {
      console.log("Player 1 already exists with this ID.");
  } else if (!getPlayer2IsCreated()) {
      setPlayer2Id(idPlayer);
      setNamePlayer2(namePlayer);
      setMaxHpPlayer2(maxHP);
      setCurrentHpPlayer2(currentHp);
      setUrlImagePlayer2(urlImage);
      setPlayer2IsCreated(true);
      updatePlayerSection();
  } else if (idPlayer === getPlayer2Id()) {
      console.log("Player 2 already exists with this ID.");
  } else if (!getPlayer3IsCreated()) {
      setPlayer3Id(idPlayer);
      setNamePlayer3(namePlayer);
      setMaxHpPlayer3(maxHP);
      setCurrentHpPlayer3(currentHp);
      setUrlImagePlayer3(urlImage);
      setPlayer3IsCreated(true);
      updatePlayerSection();
  } else if (idPlayer === getPlayer3Id()) {
      console.log("Player 3 already exists with this ID.");
  } else if (!getPlayer4IsCreated()) {
      setPlayer4Id(idPlayer);
      setNamePlayer4(namePlayer);
      setMaxHpPlayer4(maxHP);
      setCurrentHpPlayer4(currentHp);
      setUrlImagePlayer4(urlImage);
      setPlayer4IsCreated(true);
      updatePlayerSection();
  } else if (idPlayer === getPlayer4Id()) {
      console.log("Player 4 already exists with this ID.");
  }
    console.log("regex success");
  } else {
    console.log("echec du regex");
  }
}

window.listeningChat = listeningChat;
