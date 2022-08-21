function getPlayerById(name, selectButton) {
  const playerElement = document.getElementById(name);
  const playerName = playerElement.innerText;

  const playerList = document.getElementById("bestPlayer");

  const li = document.createElement("li");
  li.textContent = playerName;
  playerList.appendChild(li);

  let selectButtonElement = document.getElementById(selectButton);
  selectButtonElement.disabled = true;
  selectButtonElement.style.opacity = "50%";
}
