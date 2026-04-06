document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button");

    // Simple mock submission
    btn.textContent = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
      status.textContent =
        "Inquiry sent successfully! We will contact you soon.";
      status.style.color = "#10B981"; // Success Green
      form.reset();

      btn.textContent = "Send Inquiry";
      btn.disabled = false;

      setTimeout(() => {
        status.textContent = "";
      }, 3000);
    }, 1500);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
