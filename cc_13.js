// Task 1 - Base Structure Created
    // done in HTML and style.css

// Task 2 - Employee Cards Dynamic Addition

function addEmployee (name, position) { // creates function that adds Employee to the dashboard
    const employeeContainer = document.getElementById ("employeeContainer");
    
    const employeeCard = document.createElement("div"); // creates new "div" element
    employeeCard.setAttribute("class", "employee-card");

    const heading = document.createElement("h2"); // employee's name appears in a heading format
    heading.textContent = name;

    const paragraph = document.createElement("p"); // employee's position appears in a paragraph format
    paragraph.textContent = position;

    const removeButton = document.createElement("button"); // creates remove button to remove the employee card
    removeButton.setAttribute ("class", "remove-btn");
    removeButton.textContent = "Remove"; // puts the word "removed" inside the button
    removeButton.addEventListener("click", (event) => { // function so when remove is clicked, the card disappears.
         event.stopPropagation() // Task 4 - makes it so a targeted card is removed
        employeeContainer.removeChild(employeeCard);
    });

    const editButton = document.createElement("button"); // Task 5; creates an edit button
    editButton.setAttribute("class", "edit-btn");
    editButton.textContent = "Edit"; // puts the word edit in the button
    editButton.addEventListener("click", () => {
    editTicket(employeeCard, heading, paragraph);
    });

    const saveButton = document.createElement("button"); // Task 5; creates a save button
    saveButton.textContent = "Save"; // puts the word save in the button
    saveButton.addEventListener("click", () => {
    saveTicket(employeeCard, heading, paragraph);
    });

    employeeCard.appendChild(heading); // adds the child element (heading) to the parent element (employeeCard)
    employeeCard.appendChild(paragraph); // adds the child element (paragraph) to the parent element (employeeCard)
    employeeCard.appendChild(removeButton); // adds the child element (removeButton) to the parent element (employeeCard)
    employeeCard.appendChild(document.createElement("br")); // adds a line break
    employeeCard.appendChild(document.createElement("br")); // adds a line break
    employeeCard.appendChild(editButton)
    employeeCard.appendChild(document.createElement("br")); // adds a line break
    employeeCard.appendChild(document.createElement("br")); // adds a line break
    employeeCard.appendChild(saveButton); // Task 5 - adds a save button

    employeeContainer.appendChild(employeeCard); // adds the child element (employeeCard) to the parent element (employeeContainer)
    updateEmployeeCardBorder();// Task 3 - put function in this function in order to get the green borders to work
};

// Task 3 - Bulk Update on Employee Cards

function updateEmployeeCardBorder (){
const employeeCards = document.querySelectorAll(".employee-card"); // "selects .employee-card"
const employeeCardsArray = Array.from(employeeCards);
employeeCardsArray.forEach(employeeCard => { // for each employee card, update the border style to green
    
    employeeCard.style.border = "2px solid rgb(27, 177, 16)"
    });
}
addEmployee("Michael Jordan", "Accountant"); //added preexisting cards so the updated border has something to update
addEmployee("Stephen Curry", "Manager");

// Task 4 - Employee Card Removal with Event Bubbling

employeeContainer.addEventListener("click", () => {
    console.log("Employee card was clicked!"); // when the container is clicked, it says it was clicked in the console.
});

// Task 5 -  Inline Editing for Support Tickets
    // done above
