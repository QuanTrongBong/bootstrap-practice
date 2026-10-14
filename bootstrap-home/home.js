const homeForm = document.querySelector("#homeContactForm");
const homeFormMessage = document.querySelector("#homeFormMessage");

homeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  homeFormMessage.textContent = "";
  homeForm.classList.add("was-validated");

  if (!homeForm.checkValidity()) {
    return;
  }

  homeFormMessage.textContent = "Cảm ơn bạn đã liên hệ! (Bản minh họa)";
  homeForm.reset();
  homeForm.classList.remove("was-validated");
});
