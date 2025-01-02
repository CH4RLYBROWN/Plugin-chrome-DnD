function creationPlayersSection() {
  const section = document.createElement("div");
  section.className = "section-player";
  document.body.appendChild(section);
}

function updatePlayerSection() {
  const section = document.querySelector('.section-player');
  section.innerHTML = '';
  
  const playersIconCtn = document.createElement("div");
  playersIconCtn.className = "players-icon-ctn";
  
  if (getPlayer1IsCreated()) {
      const div1 = document.createElement("div");
      div1.className = "players";
      div1.style.backgroundImage = `url(${getUrlImagePlayer1()})`;
      
      const hp1 = document.createElement('div');
      hp1.className = 'hp-mate';
      hp1.textContent = `${getCurrentHpPlayer1()}/${getMaxHpPlayer1()}`;
      div1.appendChild(hp1);
      
      section.style.width = '7.5vh'
      playersIconCtn.appendChild(div1);
  }
  
  if (getPlayer2IsCreated()) {
      const div2 = document.createElement("div");
      div2.className = "players";
      div2.style.backgroundImage = `url(${getUrlImagePlayer2()})`;
      
      const hp2 = document.createElement('div');
      hp2.className = 'hp-mate';
      hp2.textContent = `${getCurrentHpPlayer2()}/${getMaxHpPlayer2()}`;
      div2.appendChild(hp2);
      
      section.style.width = '15vh'
      playersIconCtn.appendChild(div2);
  }
  
  if (getPlayer3IsCreated()) {
      const div3 = document.createElement("div");
      div3.className = "players";
      div3.style.backgroundImage = `url(${getUrlImagePlayer3()})`;
      
      const hp3 = document.createElement('div');
      hp3.className = 'hp-mate';
      hp3.textContent = `${getCurrentHpPlayer3()}/${getMaxHpPlayer3()}`;
      div3.appendChild(hp3);
      
      section.style.width = '22.5vh'
      playersIconCtn.appendChild(div3);
  }
  
  if (getPlayer4IsCreated()) {
      const div4 = document.createElement("div");
      div4.className = "players";
      div4.style.backgroundImage = `url(${getUrlImagePlayer4()})`;
      
      const hp4 = document.createElement('div');
      hp4.className = 'hp-mate';
      hp4.textContent = `${getCurrentHpPlayer4()}/${getMaxHpPlayer4()}`;
      div4.appendChild(hp4);
      
      section.style.width = '30vh'
      playersIconCtn.appendChild(div4);
  }

  section.appendChild(playersIconCtn);
  section.appendChild(playersIconCtn);
  document.body.appendChild(section);
}

window.creationPlayersSection = creationPlayersSection;
window.updatePlayerSection = updatePlayerSection;