const table = document.querySelector("#assignmentsTable");
const buttonInsert = document.querySelector("#buttonInsert");
let allInputs = document.querySelectorAll("input");
let rowNo = 2;
const classes = [];

// Default due time value
document.querySelector(".timeinput").value = "23:59";

// Add event listener to button
buttonInsert.addEventListener("click", () => {
	let allInputsFilled = true; // allInputsFilled to check if all inputs are filled
	let duplicateClass = false; // duplicateClass to check if the class is already in the table

	// Check if any inputs are empty
	for (let i = 0; i < allInputs.length; i++) {
		if (allInputs[i].value == "") {
			allInputsFilled = false;
		}
	}

	// If all inputs are filled, add a new row to the table
	if (allInputsFilled === true) {
		// Create a new row and add it to the table
		let row = table.insertRow(rowNo);
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		let cell3 = row.insertCell(2);
		let cell4 = row.insertCell(3);
		let cell5 = row.insertCell(4);
		let cell6 = row.insertCell(5);
		let cell7 = row.insertCell(6);

		cell1.innerText = document.querySelector(".assignmentName").value;
		cell2.innerText = document.querySelector(".className").value;
		cell3.innerText = document.querySelector(".dateinput").value;
		cell4.innerText = document.querySelector(".timeinput").value;
		cell5.innerText = document.querySelector(".priorityInput").value;
		cell6.innerText = document.querySelector(".estimatedTimeInput").value;
		cell7.innerText = document.querySelector(".status").value;

		// Check if the class is already in the table
		let classNameInput = document.querySelector(".className").value;
		for (let i = 0; i < classes.length; i++) {
			if (String(classes[i]) === String(classNameInput)) {
				duplicateClass = true;
			}
		}

		// If the class is not in the array, add it
		if (duplicateClass === false) {
			classes.push(classNameInput);
			let newOptionElement = document.createElement("OPTION");
			newOptionElement.setAttribute("value", classNameInput);
			let par = document.createTextNode(classNameInput);
			newOptionElement.appendChild(par);
			document.querySelector("#classes").appendChild(newOptionElement);
		}

		// Reset the inputs to default values
		document.querySelector(".assignmentName").value = "";
		document.querySelector(".className").value = "";
		document.querySelector(".dateinput").value = "";
		document.querySelector(".timeinput").value = "23:59";
		document.querySelector(".estimatedTimeInput").value = "";
		document.querySelector(".status").value = "Not Started";

		rowNo++;
	}
});
