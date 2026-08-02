// C&T Technology — shared JS
document.addEventListener('DOMContentLoaded', () => {
  // Đánh dấu link nav đang active theo pathname
  const path = location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') !== '/' && path.startsWith(a.getAttribute('href'))) {
      a.style.color = 'var(--pine)';
      a.style.fontWeight = '700';
    }
  });

  // Mobile hamburger menu
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
    };
    const openMenu = () => {
      toggle.setAttribute('aria-expanded', 'true');
      navLinks.classList.add('is-open');
    };
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }
});
