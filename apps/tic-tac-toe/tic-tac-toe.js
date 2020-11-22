


// var buttons = document.querySelectorAll("button");

// for (const button in buttons) {
//     button.addEventListener("click", function(changeImage)}


function changeImage() {
    var image = document.getElementById('ttt_image');
    if (image.src.match("blank.png")) {
        image.src = "X.png";
    }
    else if (image.src.match("X.png")) {
        image.src = "O.png";
    }
    else {
        image.src = "blank.png"
    }
  }