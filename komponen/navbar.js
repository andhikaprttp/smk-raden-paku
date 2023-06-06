// Navbar SMK RADEN PAKU
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuToggle.addEventListener("click", () => {
  const expanded =
    mobileMenuToggle.getAttribute("aria-expanded") === "true" || false;
  mobileMenuToggle.setAttribute("aria-expanded", !expanded);
  mobileMenu.hidden = expanded;
});
//  TEKNIK KOMPUTER DAN JARINGAN 
