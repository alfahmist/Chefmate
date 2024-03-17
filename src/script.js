const overlay = document.querySelector("#overlay");
const closed = document.querySelector("#close");
const loginButton = document.querySelector("#loginButton");
const login = document.querySelector("#login");

closed.addEventListener("click", function () {
  overlay.style.display = "none";
});

loginButton.addEventListener("click", function () {
  overlay.style.display = "flex";
});

overlay.addEventListener("click", function (e) {
  if (!login.contains("e.target")) {
    overlay.style.display = "none";
  }
});
