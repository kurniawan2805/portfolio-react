const barMenu = document.getElementById("bar-menu");

barMenu.addEventListener("click", showMenu);
// let showMenu = false;

function showMenu() {
  const navMenu = document.getElementById("nav-menu");
  let cBarMenu = barMenu.children;
  if (navMenu.className === "main-nav") {
    // add css class show-menu when clicked
    navMenu.className += " show-menu";
    barMenu.classList.add("close");
  } else {
    navMenu.className = "main-nav";
    barMenu.classList.remove("close");
  }
}
