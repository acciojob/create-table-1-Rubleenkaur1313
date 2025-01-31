function insert_Row() {
    / Get the table by its ID
    var table = document.getElementById("sampleTable");
    
    // Create a new row
    var newRow = table.insertRow();

    // Create a new cell for the left side
    var leftCell = newRow.insertCell(0);
    leftCell.innerHTML = "New Cell1"; // Set the value for the left cell

    // Create a new cell for the right side
    var rightCell = newRow.insertCell(1);
    rightCell.innerHTML = "New Cell2"; // Set the value for the right cell
}

