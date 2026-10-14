const signupForm = document.querySelector("#carouselSignupForm");
const signupPassword = document.querySelector("#signupPassword");
const signupConfirm = document.querySelector("#signupConfirm");
const signupMessage = document.querySelector("#signupMessage");

function validateSignupPassword() {
  signupConfirm.setCustomValidity(
    signupConfirm.value === signupPassword.value ? "" : "Mật khẩu xác nhận chưa khớp."
  );
}

signupPassword.addEventListener("input", validateSignupPassword);
signupConfirm.addEventListener("input", validateSignupPassword);

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  signupMessage.textContent = "";
  validateSignupPassword();
  signupForm.classList.add("was-validated");

  if (!signupForm.checkValidity()) {
    return;
  }

  signupMessage.textContent = "Tài khoản minh họa đã được tạo thành công!";
  signupForm.reset();
  signupForm.classList.remove("was-validated");
});
