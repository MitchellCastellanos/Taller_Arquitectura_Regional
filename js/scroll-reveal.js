document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal();
});

function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");
  const revealGroups = document.querySelectorAll("[data-reveal-group]");

  if (!revealItems.length && !revealGroups.length) return;

  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    revealGroups.forEach((group) => {
      group.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
    });
    return;
  }

  applyAutoStagger(revealGroups);

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const target = entry.target;
        target.classList.add("is-visible");
        obs.unobserve(target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  document.querySelectorAll(".reveal").forEach((item) => {
    observer.observe(item);
  });
}

function applyAutoStagger(groups) {
  groups.forEach((group) => {
    const items = group.querySelectorAll(".reveal");
    if (!items.length) return;

    const baseDelay = Number(group.dataset.revealDelay || 90);
    const stepDelay = Number(group.dataset.revealStep || 110);

    items.forEach((item, index) => {
      if (item.classList.contains("delay-1") ||
          item.classList.contains("delay-2") ||
          item.classList.contains("delay-3")) {
        return;
      }

      item.style.transitionDelay = `${baseDelay + index * stepDelay}ms`;
    });
  });
}
