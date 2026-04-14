document.addEventListener("DOMContentLoaded", function () {
  // ===== HAMBURGER MENU =====
  const toggleButton = document.getElementById("nav-toggle");
  const mainMenu = document.getElementById("main-menu");

  if (toggleButton && mainMenu) {
    // Open / close menu on click
    toggleButton.addEventListener("click", function () {
      const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

      // Update ARIA states
      toggleButton.setAttribute("aria-expanded", !isExpanded);
      toggleButton.setAttribute(
        "aria-label",
        isExpanded ? "Open menu" : "Close menu",
      );

      // Prevent body scroll when menu is open (mobile)
      document.body.classList.toggle("no-scroll", !isExpanded);
    });

    // Close menu with Escape key
    document.addEventListener("keydown", function (event) {
      if (
        event.key === "Escape" &&
        mainMenu.classList.contains("nav__menu--open")
      ) {
        toggleButton.click();

        // Return focus to the button
        toggleButton.focus();
      }
    });
  }
});
