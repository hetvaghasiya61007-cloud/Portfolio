// main.js: Navbar hamburger, active link, page load animations

document.addEventListener('DOMContentLoaded', function () {

  // Modern hamburger menu with ARIA and smooth toggle
  const toggle = document.getElementById('navbarToggle');
  const links = document.getElementById('navbarLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const isOpen = links.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu on link click (mobile)
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 800 && links.classList.contains('open')) {
          links.classList.remove('open');
          toggle.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Active link indicator
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.navbar__links a').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Page load fade-in for all premium sections
  document.querySelectorAll('main, .hero, .section, .projects__grid, .projects__card, .about__intro-content, .about__card, .about__details, .contact__form, .contact__info').forEach(el => {
    el.classList.add('fade-in');
  });
});
