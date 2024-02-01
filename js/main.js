let navToggleCheckbox = document.querySelector("#hamburger-switch");
let navBtn = document.querySelector(".navigation__button");

navBtn.addEventListener("click", function () {
  if (navToggleCheckbox.checked) {
    navToggleCheckbox.setChecked = false;
  } else {
    navToggleCheckbox.setChecked = true;
  }
});
