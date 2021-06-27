const userNameTextInput = document.querySelector("#username");
function login() {
  if (userNameTextInput.value === null) return false;
  localStorage.setItem("userName", userNameTextInput.value);
  setTimeout(window.location = './room', 100000)
}
