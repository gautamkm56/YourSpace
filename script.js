
/* ===== 1. Mobile navigation ===== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close the menu after clicking a navigation link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

/* ===== 2. Project detail buttons ===== */

const detailButtons = document.querySelectorAll(".details-button");

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    const details = card.querySelector(".project-details");
    const isHidden = details.hidden;

    if (isHidden) {
      details.textContent =
        button.dataset.details || "More information about this project.";
      details.hidden = false;
      button.textContent = "Show less −";
    } else {
      details.hidden = true;
      button.textContent = "View details +";
    }
  });
});

/* ===== 3. Contact form ===== */

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    formStatus.textContent =
      "Thanks for your message! This demo form is working, but messages are not sent anywhere yet.";

    contactForm.reset();
  });
}
