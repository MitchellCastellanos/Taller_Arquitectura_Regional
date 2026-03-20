document.addEventListener("DOMContentLoaded", () => {
  injectSiteComponents();
  setCurrentYear();
});

function injectSiteComponents() {
  const navbarMount = document.getElementById("site-navbar");
  const footerMount = document.getElementById("site-footer");
  const loaderMount = document.getElementById("site-loader");
  const whatsappMount = document.getElementById("site-whatsapp");

  if (loaderMount) {
    loaderMount.innerHTML = getLoaderMarkup();
  }

  if (navbarMount) {
    navbarMount.innerHTML = getNavbarMarkup();
    setActiveNavLink();
    bindMobileMenu();
  }

  if (footerMount) {
    footerMount.innerHTML = getFooterMarkup();
  }

  if (whatsappMount) {
    whatsappMount.innerHTML = getWhatsappMarkup();
  }
}

function getNavbarMarkup() {
  return `
    <header class="site-header" id="header">
      <div class="container-wide site-header__inner">
        <a href="index.html" class="brand" aria-label="Go to homepage">
          <img src="assets/logo/ar-logo-white.png" alt="+AR logo" class="brand__logo">
          <div class="brand__text">
            <span class="brand__mark">+AR</span>
            <span class="brand__sub">taller arquitectura regional</span>
          </div>
        </a>

        <button class="menu-toggle" id="menuToggle" aria-label="Open navigation menu" aria-expanded="false">
          <span></span>
          <span></span>
        </button>

        <nav class="site-nav" id="siteNav" aria-label="Main navigation">
          <a href="index.html" data-page="index">Inicio</a>
          <a href="obras.html" data-page="obras">Obras</a>
          <a href="servicios.html" data-page="servicios">Servicios</a>
          <a href="contacto.html" data-page="contacto">Contacto</a>
          <a href="contacto.html" class="btn btn-primary site-nav__cta">Solicitar proyecto</a>
        </nav>
      </div>
    </header>
  `;
}

function getFooterMarkup() {
  return `
    <footer class="site-footer">
      <div class="container-wide">
        <div class="site-footer__grid">
          <div class="site-footer__brand">
            <a href="index.html" class="brand brand--footer" aria-label="Go to homepage">
              <img src="assets/logo/ar-logo-white.png" alt="+AR logo" class="brand__logo">
              <div class="brand__text">
                <span class="brand__mark">+AR</span>
                <span class="brand__sub">taller arquitectura regional</span>
              </div>
            </a>

            <p>
              Arquitectura contemporánea con sensibilidad material, claridad espacial
              y una presencia pensada para habitarse como una obra.
            </p>
          </div>

          <div>
            <h3 class="site-footer__title">Navegación</h3>
            <ul class="site-footer__list">
              <li><a href="index.html">Inicio</a></li>
              <li><a href="obras.html">Obras</a></li>
              <li><a href="servicios.html">Servicios</a></li>
              <li><a href="contacto.html">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 class="site-footer__title">Cobertura</h3>
            <ul class="site-footer__list">
              <li>Guanajuato</li>
              <li>Querétaro</li>
              <li>Consulta inicial por WhatsApp</li>
              <li>Atención por proyecto</li>
            </ul>
          </div>

          <div>
            <h3 class="site-footer__title">Contacto</h3>
            <ul class="site-footer__list">
              <li><a href="https://www.instagram.com/taller_arquitectura_regional/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://wa.me/5210000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:contacto@tallararquitectura.com">contacto@tallararquitectura.com</a></li>
            </ul>
          </div>
        </div>

        <div class="site-footer__bottom">
          <p>© <span id="currentYear"></span> +AR — Taller Arquitectura Regional</p>
          <p>
  Website crafted by 
  <a href="https://www.gabansolutions.ca" target="_blank" rel="noopener noreferrer" class="footer-credit">
    GABAN
  </a>
</p>
        </div>
      </div>
    </footer>
  `;
}

function getLoaderMarkup() {
  return `
    <div class="site-loader" aria-hidden="true">
      <div class="site-loader__mark">+AR</div>
      <div class="site-loader__line"></div>
    </div>
  `;
}

function getWhatsappMarkup() {
  return `
    <a
      href="https://wa.me/5210000000000"
      class="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open WhatsApp chat"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.54 0 .21 5.3.21 11.82c0 2.08.54 4.11 1.57 5.91L0 24l6.46-1.69a11.8 11.8 0 0 0 5.6 1.43h.01c6.52 0 11.85-5.3 11.85-11.82 0-3.16-1.23-6.13-3.4-8.44ZM12.07 21.7h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.83 1 1.02-3.73-.24-.38a9.78 9.78 0 0 1-1.51-5.2c0-5.42 4.42-9.83 9.86-9.83 2.62 0 5.08 1.02 6.93 2.88a9.73 9.73 0 0 1 2.88 6.95c0 5.42-4.43 9.88-9.85 9.88Zm5.39-7.36c-.29-.15-1.7-.84-1.97-.93-.26-.1-.45-.15-.64.15-.19.29-.73.93-.89 1.12-.16.19-.33.22-.62.08-.29-.15-1.2-.44-2.29-1.4-.85-.76-1.42-1.7-1.58-1.99-.16-.29-.02-.45.12-.59.12-.12.29-.33.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.08-.15-.64-1.55-.88-2.13-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43 0 1.43 1.03 2.81 1.17 3 .15.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z"/>
      </svg>
    </a>
  `;
}

function setActiveNavLink() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const pageMap = {
    "index.html": "index",
    "obras.html": "obras",
    "servicios.html": "servicios",
    "contacto.html": "contacto"
  };

  const currentPage = pageMap[path];
  if (!currentPage) return;

  const links = document.querySelectorAll(".site-nav a[data-page]");
  links.forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add("is-active");
    }
  });
}

function bindMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("siteNav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("modal-open", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("modal-open");
    });
  });
}

function setCurrentYear() {
  const yearNode = document.getElementById("currentYear");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
}
