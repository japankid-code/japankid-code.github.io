// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function formSubmit(event) {
    event.preventDefault(); // stops form submission action
    var table = document.getElementById('pixelCanvas');
    table.innerHTML = "";  // table element gets cleared here
	var rows = document.getElementById("inputHeight").value;
    var cols = document.getElementById("inputWidth").value;
    makeGrid(rows, cols);
    return false;
}

function makeGrid(rows, cols) {
    var table = document.getElementById('pixelCanvas');
    var colorPicker = document.getElementById("colorPicker");
    for (r=0; r<rows; r++) {
        var row = table.insertRow(r);
        for (c=0; c<cols; c++) {
            var cell = row.insertCell(c);
            var mouseIsDown = false
            cell.addEventListener('mousedown', function(){mouseIsDown = true})
            cell.addEventListener('mouseup', function(){mouseIsDown = false})
            cell.addEventListener('mousemove', e => {
                if (mouseIsDown){
                    e.target.style.background = colorPicker.value;
                }
            })
        };
    };
};

makeGrid(200, 100);