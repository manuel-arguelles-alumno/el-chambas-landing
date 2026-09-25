// Content stays visible by default so fast loads, crawlers and full-page captures
// never see an apparently empty section. The observer is intentionally additive:
// it can mark elements as visible for optional CSS polish without hiding content.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".method-card, .section-intro, .video-frame, .principle-section")
    .forEach((element) => observer.observe(element));
}
