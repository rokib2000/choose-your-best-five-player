// check player list and count
function totalPlayers() {
  const bestPlayers = document.querySelectorAll("#bestPlayer > li");
  const totalPlayer = bestPlayers.length;
  return totalPlayer;
}

// Get player Name and add player list
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
  selectButtonElement.style.opacity = "40%";

  // player select validation
  const totalPlayer = totalPlayers();
  if (totalPlayer === 5) {
    selectButtonElement.disabled = false;
    selectButtonElement.style.opacity = "100%";
    alert("Five players have already been added!!");
    return 0;
  } else {
    playerList.appendChild(li);
  }
}

// Text Element value set
function setValueById(elementId, value) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = value;
}

// get data form Input Element

function getInputValueById(elementId) {
  const expenseInputElement = document.getElementById(elementId);
  const expenseInputString = expenseInputElement.value;

  //Input Field Validation
  if (isNaN(expenseInputString)) {
    alert("please Enter a Valid Number!!");
  }

  const expenseInput = parseFloat(expenseInputString);

  // reset input field
  // expenseInputElement.value = "";

  return expenseInput;
}

// get data form Element

function getElementDataById(elementId) {
  const expenseElementData = document.getElementById(elementId);
  const expenseElementDataString = expenseElementData.innerText;
  const expenseData = parseFloat(expenseElementDataString);

  return expenseData;
}
