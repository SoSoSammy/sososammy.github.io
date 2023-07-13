const form = document.querySelector("form");
const loadingSpinner = document.querySelector(".loading-spinner");
const submitResponse = document.querySelector(".submit-response");

// Initialize EmailJS
emailjs.init("kjx2rcKOb6IRZKwGe"); // public key

// When the form is submitted
form.addEventListener("submit", function (e) {
  // Prevent page refresh
  e.preventDefault();

  // Show loading spinner
  loadingSpinner.style.display = "flex";

  // Hide form
  form.style.display = "none";

  // Send the form
  emailjs
    .sendForm("contact_service", "contact_form", this)
    .then(
      () => {
        console.log("Success!");
        // Set response to success message
        submitResponse.innerHTML = "<p>✅ Message sent!</p>";
        submitResponse.style.display = "block";
      },
      (error) => {
        console.log("Failed...", error);
        // Set response to error message
        submitResponse.innerHTML = `<p>❌ An error occurred: ${error.text}</p>`;
        submitResponse.style.display = "block";
      }
    )
    .finally(() => {
      // Hide loading spinner
      loadingSpinner.style.display = "none";
    });
});
