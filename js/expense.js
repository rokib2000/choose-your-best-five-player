document.getElementById("expense-calculate").addEventListener("click", function () {
  const playerExpense = getInputValueById("player-expense-input");

  const totalPlayer = totalPlayers();

  const playerExpenseTotal = playerExpense * totalPlayer;

  setValueById("players-expense", playerExpenseTotal);
});

document.getElementById("total-expense-calculate").addEventListener("click", function () {
  const managerExpense = getInputValueById("manager-expense-input");
  const coachExpense = getInputValueById("coach-expense-input");

  const totalPlayersExpense = getElementDataById("players-expense");

  const totalExpense = managerExpense + coachExpense + totalPlayersExpense;

  setValueById("total-expense", totalExpense);
});
