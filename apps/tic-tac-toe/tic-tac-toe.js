var buttons = document.querySelectorAll(".button");
var last_move = "o";

for (const button of buttons) {
  button.addEventListener("click", function (e) {
    if (!eligibleMove(e)) {
      alert("ALREADY PLAYED");
      return;
    }

    var move = last_move == "o" ? "x" : "o";
    e.target.innerHTML = move;
    if (checkWin(e, move)) {
      alert("YOU WON");
      resetGame();
    }
    last_move = move;
  });
}

function checkWin(e, move) {
  if (checkSameRowWin(e, move)) {
    console.log("Same row Win");
    return true;
  }

  if (checkVerticalRow(e, move)) {
    console.log("Vertical win");
    return true;
  }

  if (checkDiagonalWin(e, move)) {
    console.log("Diagonal win");
    return true;
  }
}

function resetGame() {
  for (let btn of Array.from(document.querySelectorAll("button"))) {
    btn.innerHTML = "";
  }
}

function checkVerticalRow(e, move) {
  const cellIndex = e.target.parentElement.cellIndex;
  var trs = e.target.closest("table tbody").children;
  for (let tr of Array.from(trs)) {
    for (let td of Array.from(tr.children)) {
      if (td.cellIndex != cellIndex) {
        continue;
      }
      var btn = td.querySelector(".button");
      if (btn.innerHTML != move) {
        return false;
      }
    }
  }

  return true;
}

function checkDiagonalWin(e, move) {
  const cellIndex = e.target.parentElement.cellIndex;
  const rowIndex = e.target.closest("tr").rowIndex;
  if (![0, 2].includes(cellIndex)) {
    return false;
  }

  if (![0, 2].includes(rowIndex)) {
    return false;
  }

  if (cellIndex == 0 && rowIndex == 0) {
    const possibleWins = [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
    if (!checkDiagonal(e, move, possibleWins)) {
      return false;
    }
  }
  
  if (cellIndex == 2 && rowIndex == 0) {
    const possibleWins = [
      [0, 2],
      [1, 1],
      [2, 0],
    ];
    if (!checkDiagonal(e, move, possibleWins)) {
      return false;
    }
  }
  
  if (cellIndex == 0 && rowIndex == 2) {
    const possibleWins = [
      [2, 0],
      [1, 1],
      [0, 2],
    ];
    if (!checkDiagonal(e, move, possibleWins)) {
      return false;
    }
  }
  
   if (cellIndex == 2 && rowIndex == 2) {
    const possibleWins = [
      [2, 2],
      [1, 1],
      [0, 0],
    ];
    if (!checkDiagonal(e, move, possibleWins)) {
      return false;
    }
  }
  
  return true;
}

function checkDiagonal(e, move, Moves) {
  const trs = e.target.closest("table tbody").children;
  for (let tr of Array.from(trs)) {
    for (let td of Array.from(tr.children)) {
      var btn = td.querySelector(".button");
      for (let win of Array.from(Moves)) {
        const row = win[0];
        const cell = win[1];
        if (tr.rowIndex == row && td.cellIndex == cell) {
          if (btn.innerHTML != move) {
            return false;
          }
        }
      }
      var btn = td.querySelector(".button");
    }
  }

  return true;
}

function checkSameRowWin(e, move) {
  var tds = e.target.closest("tr").children;
  for (let td of Array.from(tds)) {
    var btn = td.querySelector(".button");
    if (btn.innerHTML != move) {
      return false;
    }
  }

  return true;
}

function eligibleMove(e) {
  if (e.target.innerHTML == "") {
    return true;
  }

  return false;
}