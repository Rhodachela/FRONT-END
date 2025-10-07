/* const input = document.querySelector("input");
input.setAttribute("placeholder", "Modified placeholder");

input.addEventListener("click", () => {
    
    const header = document.getElementsByTagName("h2").item(0);
    header.firstChild.data = "A dynamic document";

    const para = document.getElementsByTagName("p").item(0);
    para.firstChild.data = "This is the new paragraph.";

    const newText = document.createTextNode("This is the second paragraph");

    const newElement = document.createElement("p");
    newElement.appendChild(newText);

    para.parentNode.appendChild(newElement);

}); */

/* function generateNewTable(){
    // Creating a table element and a tbody element
    const tbl = document.createElement("table");
    const tblbody = document.createElement("tbody");

    // Creating all cells
    for (let i = 0; i < 2; i++){
        // Create a table row
        const row = document.createElement("tr");
        
        for (let j = 0; j < 2; j++){
             // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`Cell in row ${i}, Column ${j}`);

            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // Add the row now to the test of the table body
        tblbody.appendChild(row);
    }

        // Now add the tblbody to the table
        tbl.appendChild(tblbody);

        // Now append the table to the body
        document.body.appendChild(tbl);

        // Set the border attribute of table to 2
        tbl.setAttribute("border", "2");

}
document 
    .querySelector("input[type = button]")
    .addEventListener("click", generateNewTable);
*/

function setBackgroundColor(){
    const paragraphs = document.getElementsByTagName("p");
    const secondPara = paragraphs[1];

    secondPara.style.background = "aqua";
}
document.querySelector("input").addEventListener("click", setBackgroundColor);