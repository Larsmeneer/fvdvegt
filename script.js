// Glazenwasserij F. van der Vegt - kleine hulpjes voor de site

// 1. Licht/donker onthouden
(function () {
  var knop = document.getElementById('themaKnop');
  var wortel = document.documentElement;
  try {
    var bewaard = localStorage.getItem('fvdvegt-thema');
    if (bewaard === 'licht' || bewaard === 'donker') {
      wortel.setAttribute('data-theme', bewaard === 'licht' ? 'light' : 'dark');
    }
  } catch (e) { /* privacyvenster: gewoon het systeemthema volgen */ }

  if (!knop) return;
  knop.addEventListener('click', function () {
    var donkerNu = wortel.getAttribute('data-theme')
      ? wortel.getAttribute('data-theme') === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    var nieuw = donkerNu ? 'light' : 'dark';
    wortel.setAttribute('data-theme', nieuw);
    try { localStorage.setItem('fvdvegt-thema', nieuw === 'light' ? 'licht' : 'donker'); } catch (e) {}
  });
})();

// 2. Menu op mobiel
(function () {
  var knop = document.getElementById('menuKnop');
  var links = document.getElementById('navLinks');
  if (!knop || !links) return;
  knop.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    knop.setAttribute('aria-expanded', open ? 'true' : 'false');
    knop.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      knop.setAttribute('aria-expanded', 'false');
    }
  });
})();

// 3. Randje onder de kop zodra je scrolt
(function () {
  var kop = document.getElementById('kop');
  if (!kop) return;
  var meten = function () { kop.classList.toggle('vast', window.scrollY > 8); };
  meten();
  window.addEventListener('scroll', meten, { passive: true });
})();

// 4. Blokken rustig in beeld laten komen
(function () {
  var blokken = document.querySelectorAll('.reveal');
  if (!blokken.length) return;
  if (!('IntersectionObserver' in window)) {
    blokken.forEach(function (b) { b.classList.add('zichtbaar'); });
    return;
  }
  var kijker = new IntersectionObserver(function (rijen) {
    rijen.forEach(function (rij) {
      if (rij.isIntersecting) {
        rij.target.classList.add('zichtbaar');
        kijker.unobserve(rij.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  blokken.forEach(function (b) { kijker.observe(b); });
})();
