function toggleResponseForm() {
    var form = document.getElementById("response-form");
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

function submitResponse() {
    var responseText = document.getElementById("response-text").value;
    if (responseText.trim() === "") {
        alert("Please enter a response.");
        return;
    }
    alert("Response Submitted: " + responseText);
    document.getElementById("response-text").value = "";
    document.getElementById("response-form").style.display = "none";
}