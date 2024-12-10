// الحقول والأزرار
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const togglePasswordButton = document.getElementById('togglePassword');
const toggleConfirmPasswordButton = document.getElementById('toggleConfirmPassword');
const message = document.getElementById('message');

// إظهار/إخفاء كلمة المرور
togglePasswordButton.addEventListener('click', () => {
  const currentType = passwordField.getAttribute('type');
  passwordField.setAttribute('type', currentType === 'password' ? 'text' : 'password');
  togglePasswordButton.textContent = currentType === 'password' ? '🙈' : '👁️';
});

toggleConfirmPasswordButton.addEventListener('click', () => {
  const currentType = confirmPasswordField.getAttribute('type');
  confirmPasswordField.setAttribute('type', currentType === 'password' ? 'text' : 'password');
  toggleConfirmPasswordButton.textContent = currentType === 'password' ? '🙈' : '👁️';
});

// التحقق من تطابق كلمة المرور
confirmPasswordField.addEventListener('input', () => {
  if (confirmPasswordField.value === passwordField.value) {
    message.textContent = 'كلمة المرور متطابقة ✅';
    message.style.color = 'green';
  } else {
    message.textContent = 'كلمة المرور غير متطابقة ❌';
    message.style.color = 'red';
  }
});
