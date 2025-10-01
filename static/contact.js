function validateContact() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Name is Missing!");
        return false;
    } else if (!isNaN(name)) {
        alert("Name cannot be a number.");
                return false;
    }
    
    if (email === "") {
        alert("Email is Missing!");
        return false;
    }

    if (subject === "") {
        alert("Subject is Missing!");
        return false;
    }

    if (message === "") {
        alert("Message is Missing!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
