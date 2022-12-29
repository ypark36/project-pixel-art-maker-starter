// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    const heightValue = document.getElementById('inputHeight').value;
    const widthValue = document.getElementById('inputWidth').value; 
    const table = document.getElementById('pixelCanvas');

    for (let row = 0; row < heightValue; row++) {
        const newTr = document.createElement('tr');
        for (let col = 0; col < widthValue; col++) {
            const newTd = document.createElement('td');
            newTd.addEventListener('click', function() {
                const colorValue = document.getElementById('colorPicker').value;
                newTd.style.backgroundColor = colorValue;
            })
            newTr.appendChild(newTd);
        }
        table.appendChild(newTr);
    }
}

function removeGrid() {
    const table = document.getElementById('pixelCanvas');
    const rowCount = table.rows.length;
    if (rowCount) {
        for (let num = 0; num < rowCount; num++) {
            table.deleteRow(0);
        }
    }
}

document.addEventListener('submit', function(event) {
    event.preventDefault();
    removeGrid();
    makeGrid();
})