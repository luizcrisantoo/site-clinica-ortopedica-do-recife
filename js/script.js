/* script.js — script principal (clássico, funciona também em file://)
   Reúne menu, scroll/animações, filtro de especialidades e ano do rodapé. */
(function () {
  'use strict';

  /* ---------- Menu + header ---------- */
  function initMenu() {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.mobile-menu');
    var header = document.querySelector('.header');
    var body = document.body;

    function closeMenu() {
      if (!menu) return;
      menu.classList.remove('is-open');
      if (toggle) { toggle.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
      body.classList.remove('no-scroll');
    }

    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        var open = menu.classList.toggle('is-open');
        toggle.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        body.classList.toggle('no-scroll', open);
      });
      menu.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', closeMenu); });
    }
    window.addEventListener('resize', function () { if (window.innerWidth >= 900) closeMenu(); });

    if (header) {
      var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 12); };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  }

  /* ---------- Animações on-scroll + link ativo ---------- */
  function initScroll() {
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
      document.body.classList.add('reveal-ready');
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { io.observe(el); });
    }

    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
    var sections = navLinks.map(function (l) { return document.querySelector(l.getAttribute('href')); }).filter(Boolean);
    if (sections.length && 'IntersectionObserver' in window) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = '#' + entry.target.id;
            navLinks.forEach(function (l) { l.classList.toggle('is-active', l.getAttribute('href') === id); });
          }
        });
      }, { threshold: 0.5 });
      sections.forEach(function (s) { spy.observe(s); });
    }
  }

  /* ---------- Filtro do corpo clínico por especialidade ---------- */
  function initFilter() {
    var chips = Array.prototype.slice.call(document.querySelectorAll('.chipf'));
    var docs = Array.prototype.slice.call(document.querySelectorAll('.doc'));
    var empty = document.querySelector('.team-empty');
    if (!chips.length || !docs.length) return;

    function apply(filter) {
      chips.forEach(function (c) { c.classList.toggle('is-active', c.dataset.filter === filter); });
      var visible = 0;
      docs.forEach(function (d) {
        var show = filter === 'all' || d.dataset.spec === filter;
        d.hidden = !show;
        if (show) visible += 1;
      });
      if (empty) empty.hidden = visible !== 0;
    }

    chips.forEach(function (c) { c.addEventListener('click', function () { apply(c.dataset.filter); }); });

    document.querySelectorAll('.spec[data-spec]').forEach(function (card) {
      card.addEventListener('click', function () {
        apply(card.dataset.spec);
        var target = document.getElementById('corpo-clinico');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  function init() {
    initMenu();
    initScroll();
    initFilter();
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
