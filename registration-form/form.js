const form = document.querySelector("#registrationForm");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const formMessage = document.querySelector("#formMessage");

confirmPassword.addEventListener("input", () => {
  confirmPassword.setCustomValidity(
    confirmPassword.value === password.value ? "" : "Mật khẩu xác nhận không khớp."
  );
});

password.addEventListener("input", () => {
  if (confirmPassword.value) {
    confirmPassword.setCustomValidity(
      confirmPassword.value === password.value ? "" : "Mật khẩu xác nhận không khớp."
    );
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "";
  confirmPassword.setCustomValidity(
    confirmPassword.value === password.value ? "" : "Mật khẩu xác nhận không khớp."
  );

  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add("was-validated");
    return;
  }

  formMessage.textContent = "Đăng ký thành công! (Bản minh họa)";
  form.reset();
  form.classList.remove("was-validated");
});
