document.addEventListener("DOMContentLoaded", function() {
    // Get all accept and reject buttons
    const acceptButtons = document.querySelectorAll(".accept-btn");
    const rejectButtons = document.querySelectorAll(".reject-btn");

    // Function to handle accept action
    acceptButtons.forEach(button => {
        button.addEventListener("click", function() {
            const row = this.closest("tr"); // Get the row of the clicked button
            const statusCell = row.querySelector("td:nth-child(5)"); // Get the status cell
            statusCell.textContent = "Accepted"; // Change the status to Accepted
            row.classList.add("accepted"); // Optionally, add a class for styling
            this.disabled = true; // Disable the accept button once clicked
            row.querySelector(".reject-btn").disabled = true; // Disable the reject button as well
        });
    });

    // Function to handle reject (delete) action
    rejectButtons.forEach(button => {
        button.addEventListener("click", function() {
            const row = this.closest("tr"); // Get the row of the clicked button
            row.remove(); // Remove the row from the table
        });
    });
});
