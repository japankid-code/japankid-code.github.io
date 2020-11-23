

var buttons = document.querySelectorAll("button");
var last_move = "O.png";

console.log(buttons);

for (i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  console.log(buttons);
  button.addEventListener("click", function (e) {
    const move = last_move == "O.png" ? "X.png" : "O.png";
    if (e.target.tagName == "IMG") {
      e.target.src = move;
    } else {
      e.target.querySelector("img").src = move;
    }
    last_move = move;
  });
}

// var buttons = document.querySelectorAll("button");
// console.log(buttons)

// for (i = 0; i < buttons.length; i++) {
//   const button = buttons[i];
//   console.log(button);
//   button.addEventListener("click", function (e) {
//     console.log(e.target);
//   });
// }


// function changeImage() {
//     var image = document.getElementById('ttt_image');
//     if (image.src.match("blank.png")) {
//         image.src = "X.png";
//     }
//     else if (image.src.match("X.png")) {
//         image.src = "O.png";
//     }
//     else {
//         image.src = "blank.png"
//     }
//   }


