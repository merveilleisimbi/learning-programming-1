const button = document.getElementById("messageButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "The application is working!";
});