/**
 * GESA – Gruppo Ecologico Selvino Aviatico
 * Main JavaScript – mobile nav, scroll effects
 */
(function () {
  'use strict';

  /* ── Mobile navigation ── */
  const toggle   = document.getElementById('navToggle');
  const drawer   = document.getElementById('navMobile');
  const body     = document.body;

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (drawer.classList.contains('open') &&
          !drawer.contains(e.target) &&
          !toggle.contains(e.target)) {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      }
    });
  }

  /* ── Active nav link ── */
  const path = window.location.pathname;
  document.querySelectorAll('.nav-desktop a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('http')) return;
    const hrefClean = href.replace(/\/$/, '');
    const pathClean = path.replace(/\/$/, '');
    if (hrefClean && pathClean.startsWith(hrefClean)) a.classList.add('active');
  });

  /* ── Scroll-reveal ── */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    // Fallback: show all immediately
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

  /* ── Header scroll shadow ── */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 10
        ? '0 4px 20px rgba(0,0,0,0.1)'
        : '';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
