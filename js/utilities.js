function getPlayerById(name, selectButton) {
  // get player Name
  const playerElement = document.getElementById(name);
  const playerName = playerElement.innerText;

  // Select player Add list
  const playerList = document.getElementById("bestPlayer");
  const li = document.createElement("li");
  li.textContent = playerName;

  // selected player Button disabled
  let selectButtonElement = document.getElementById(selectButton);
  selectButtonElement.disabled = true;
  selectButtonElement.style.opacity = "50%";

  // player select validation
  const bestPlayers = document.querySelectorAll("#bestPlayer > li");
  const totalPlayer = bestPlayers.length;
  if (totalPlayer === 5) {
    selectButtonElement.disabled = false;
    selectButtonElement.style.opacity = "100%";
    alert("Five players have already been added!!");
    return 0;
  } else {
    playerList.appendChild(li);
  }
}
