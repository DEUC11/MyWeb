        // Get references to the form and the table body
        const form = document.getElementById("addProductForm");
        const productListTableBody = document.getElementById("productList").getElementsByTagName("tbody")[0];

        // Event listener for the form submission
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form from reloading the page

            // Get input values
            const productName = document.getElementById("productName").value;
            const productDescription = document.getElementById("productDescription").value;
            const productPrice = parseFloat(document.getElementById("productPrice").value).toFixed(2);
            const productQuantity = document.getElementById("productQuantity").value;
            const productImage = document.getElementById("productImage").value;

            // If no image URL is provided, use a default image
            const imageToUse = productImage || "https://via.placeholder.com/50"; // Default image

            // Create a new row for the product list
            const newRow = productListTableBody.insertRow();

            // Insert cells with the product data
            newRow.insertCell(0).textContent = productName;
            newRow.insertCell(1).textContent = productDescription;
            newRow.insertCell(2).textContent = `$${productPrice}`;
            newRow.insertCell(3).textContent = productQuantity;

            // Create image cell only if an image URL is provided or use default image
            const imgCell = newRow.insertCell(4);
            const productImageElement = document.createElement("img");
            productImageElement.src = imageToUse;
            productImageElement.alt = productName;
            productImageElement.style.maxWidth = "50px";
            imgCell.appendChild(productImageElement);

            // Create a delete button
            const deleteCell = newRow.insertCell(5);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.style.backgroundColor = "red";
            deleteButton.style.color = "white";
            deleteButton.style.border = "none";
            deleteButton.style.padding = "5px 10px";
            deleteButton.style.cursor = "pointer";

            // Event listener to delete the product
            deleteButton.addEventListener("click", function() {
                productListTableBody.deleteRow(newRow.rowIndex - 1); // Remove the row
            });

            deleteCell.appendChild(deleteButton);

            // Reset the form after submission
            form.reset();
        });