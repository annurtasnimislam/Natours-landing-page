document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("toggle");
  const iconContainer = document.getElementById("toggle-icon");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      iconContainer.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      iconContainer.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
});
