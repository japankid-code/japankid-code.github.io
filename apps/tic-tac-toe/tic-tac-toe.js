
var buttons = document.querySelectorAll("button");
console.log(buttons)

for (i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e.target);
  });
}


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


