// Smooth scroll handling for anchor links to ensure clean framing
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (targetId === "#demo") {
        const videoFrame = targetEl.querySelector(".video-frame");
        if (videoFrame) {
          const vRect = videoFrame.getBoundingClientRect();
          const vTop = scrollTop + vRect.top;
          // Position so heading and full video player are comfortably visible
          const idealY = Math.max(0, vTop - 70);
          window.scrollTo({
            top: idealY,
            behavior: "smooth"
          });
        } else {
          const rect = targetEl.getBoundingClientRect();
          window.scrollTo({
            top: Math.max(0, scrollTop + rect.top - 24),
            behavior: "smooth"
          });
        }
      } else {
        const rect = targetEl.getBoundingClientRect();
        const offset = 32;
        window.scrollTo({
          top: Math.max(0, scrollTop + rect.top - offset),
          behavior: "smooth"
        });
      }

      if (history.pushState) {
        history.pushState(null, "", targetId);
      }
    }
  });
});

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

