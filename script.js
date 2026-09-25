const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".method-card, .section-intro, .video-frame, .principle-section").forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(18px)";
  element.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(element);
});

const style = document.createElement("style");
style.textContent = ".is-visible{opacity:1!important;transform:none!important}";
document.head.appendChild(style);
