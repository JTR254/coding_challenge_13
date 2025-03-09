// Task 1 - Base Structure Created
    // done in HTML and style.css

// Task 2 - Employee Cards Dynamic Addition

function addEmployee (name, position) { // creates function that adds Employee to the dashboard
    const employeeContainer = document.getElementById ("employeeContainer");
    
    const employeeCard = document.createElement("div"); // creates new "div" element
    employeeCard.setAttribute("class", "metric-card");

    const heading = document.createElement("h2"); // employee's name appears in a heading format
    heading.textContent = name;

    const paragraph = document.createElement("p"); // employee's position appears in a paragraph format
    paragraph.textContent = position;

    const removeButton = document.createElement("button"); // creates remove button to remove the employee card
    removeButton.setAttribute ("class", "remove-btn");
    removeButton.textContent = "Remove"; // puts the word "removed" inside the button
    removeButton.addEventListener("click", () => { // function so when remove is clicked, the card disappears.\
        employeeContainer.removeChild(employeeCard);
    });

    employeeCard.appendChild(heading); // adds the child element (heading) to the parent element (employeeCard)
    employeeCard.appendChild(paragraph); // adds the child element (paragraph) to the parent element (employeeCard)
    employeeCard.appendChild(removeButton); // adds the child element (removeButton) to the parent element (employeeCard)

    employeeContainer.appendChild(employeeCard); // adds the child element (employeeCard) to the parent element (employeeContainer)
}