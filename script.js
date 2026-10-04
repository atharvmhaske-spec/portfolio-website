// Small interactive effect for the personal portfolio

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".skill-card, .project-card, .education-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.08 });

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(12px)";
    card.style.transition = "opacity .5s ease, transform .5s ease";
    observer.observe(card);
  });
});
