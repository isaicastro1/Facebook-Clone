const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("links")[0];

// Menu Button Opens and Closes
toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});