// ENVOIE DE MESSAGE

function sendStatusUpdate(type) {
  console.log("Envoi d'un message de type ",type)
  let idPlayer = getIdPlayer();
  let namePlayer = getNamePlayer();
  let maxHP = getMaxHp();
  let currentHp = getCurrentHp();
  let urlImage = getUrlIconPlayer();  
  let finalCommand;

  if (type === "online"){
   finalCommand = 
    "systeme: " + "online:" +
    "idPlayer: " + idPlayer + ", " +
    "namePlayer: " + namePlayer + ", " +
    "maxHP: " + maxHP + ", " +
    "currentHP: " + currentHp + ", " +
    "urlImage: " + urlImage;
  } 
  else {
    finalCommand = 
    "systeme: " +
    "idPlayer: " + idPlayer + ", " +
    "namePlayer: " + namePlayer + ", " +
    "maxHP: " + maxHP + ", " +
    "currentHP: " + currentHp + ", " +
    "urlImage: " + urlImage;
  }


    getChatInput().value = finalCommand;
    getChatInput().dispatchEvent(getFakeEnterPress()); 
    console.log('message envoyé :', finalCommand);

}

window.sendStatusUpdate = sendStatusUpdate;