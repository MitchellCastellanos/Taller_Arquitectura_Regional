document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initNavbarScroll();
  initQuotesCarousel();
  initHeroEntrance();
  initHeroParallax();
  initSoftFloatElements();
  initScrollProgress();
  initSmoothInternalLinks();
});

/* =========================================================
   LOADER (ROBUSTO)
========================================================= */
function initLoader() {
  window.addEventListener("load", () => {
    const loader = document.querySelector(".site-loader");

    const minVisibleTime = 650;

    setTimeout(() => {
      if (loader) {
        loader.classList.add("is-hidden");
      }

      document.body.classList.remove("is-loading");
      document.body.classList.add("is-ready");
    }, minVisibleTime);
  });
}

/* =========================================================
   NAVBAR SCROLL
========================================================= */
function initNavbarScroll() {
  const header = document.getElementById("header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* =========================================================
   QUOTES CAROUSEL
========================================================= */
function initQuotesCarousel() {
  const carousel = document.getElementById("quotesCarousel");
  const dotsContainer = document.getElementById("quotesDots");

  if (!carousel || !dotsContainer) return;

  const slides = carousel.querySelectorAll(".quote-card");
  const dots = dotsContainer.querySelectorAll("button");

  if (!slides.length || !dots.length) return;

  let current = 0;
  let interval = null;
  const AUTO_TIME = 5000;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === index);
    });

    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function startAuto() {
    stopAuto();
    interval = setInterval(nextSlide, AUTO_TIME);
  }

  function stopAuto() {
    if (interval) clearInterval(interval);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startAuto();
    });
  });

  carousel.addEventListener("mouseenter", stopAuto);
  carousel.addEventListener("mouseleave", startAuto);

  showSlide(0);
  startAuto();
}

/* =========================================================
   HERO ENTRANCE (CINEMÁTICO)
========================================================= */
function initHeroEntrance() {
  const hero = document.querySelector(".hero, .inner-hero");
  if (!hero) return;

  requestAnimationFrame(() => {
    hero.classList.add("is-entered");
  });
}

/* =========================================================
   HERO PARALLAX (SMOOTH RAF)
========================================================= */
function initHeroParallax() {
  const heroes = document.querySelectorAll(".hero, .inner-hero");
  if (!heroes.length) return;

  let ticking = false;

  const update = () => {
    const scrollY = window.scrollY;

    heroes.forEach((hero) => {
      const rect = hero.getBoundingClientRect();
      const heroTop = rect.top + scrollY;
      const heroHeight = hero.offsetHeight;
      const distance = scrollY - heroTop;

      if (distance < -heroHeight || distance > heroHeight * 1.2) return;

      const progress = clamp(distance / heroHeight, -0.25, 1);

      const img = hero.querySelector(".hero__media img, .inner-hero__media img");
      if (img) {
        const y = progress * 28;
        const scale = 1.04 + Math.abs(progress) * 0.015;
        img.style.transform = `translateY(${y}px) scale(${scale})`;
      }

      const text = hero.querySelector(".hero__text, .inner-hero__text");
      if (text) {
        text.style.transform = `translateY(${progress * -10}px)`;
      }

      const meta = hero.querySelector(".hero__meta");
      if (meta) {
        meta.style.transform = `translateY(${progress * -14}px)`;
      }
    });

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* =========================================================
   FLOAT ELEMENTS (SUAVE)
========================================================= */
function initSoftFloatElements() {
  const items = document.querySelectorAll(".float-soft");
  if (!items.length) return;

  let ticking = false;

  const update = () => {
    const scrollY = window.scrollY;

    items.forEach((item, index) => {
      const speed = Number(item.dataset.floatSpeed || 0.035);
      const offset = (scrollY * speed) + (index * 4);
      item.style.transform = `translateY(${offset}px)`;
    });

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* =========================================================
   SCROLL PROGRESS
========================================================= */
function initScrollProgress() {
  const root = document.documentElement;

  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;

    root.style.setProperty("--scroll-progress", progress.toFixed(4));
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* =========================================================
   SMOOTH LINKS
========================================================= */
function initSmoothInternalLinks() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

/* =========================================================
   HELPERS
========================================================= */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
