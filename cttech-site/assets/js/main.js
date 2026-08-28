// C&T Technology — shared JS
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.getElementById('nav-links');
  if (navLinks && !navLinks.querySelector('a[href="/product/"]')) {
    const li = document.createElement('li');
    li.innerHTML = '<a href="/product/">HemaFit</a>';
    navLinks.insertBefore(li, navLinks.firstElementChild);
  }

  if (location.pathname === '/' || location.pathname === '/index.html') {
    const nav = document.querySelector('nav');
    if (nav && !document.querySelector('.hema-banner')) {
      const bar = document.createElement('div');
      bar.className = 'hema-banner';
      bar.innerHTML = '<div class="wrap hema-banner-inner"><span>Sản phẩm AI: <b>HemaFit</b> — ESM-2 + clonal fitness cho tín hiệu nguy cơ ung thư máu</span><a href="/product/">Xem product page (EN) →</a></div>';
      nav.insertAdjacentElement('afterend', bar);
    }
  }

  const path = location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href !== '/' && path.startsWith(href)) {
      a.style.color = 'var(--pine)';
      a.style.fontWeight = '700';
    }
  });

  const toggle = document.querySelector('.nav-toggle');
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
