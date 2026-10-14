const columnsForm = document.querySelector("#columnsForm");
const columnsMessage = document.querySelector("#columnsMessage");

columnsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  columnsMessage.textContent = "";
  columnsForm.classList.add("was-validated");

  if (!columnsForm.checkValidity()) {
    return;
  }

  columnsMessage.textContent = "Đã nhận lời nhắn của bạn! (Bản minh họa)";
  columnsForm.reset();
  columnsForm.classList.remove("was-validated");
});
