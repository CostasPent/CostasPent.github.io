(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme');
  function label() { btn.textContent = root.dataset.theme === 'dark' ? '[light]' : '[dark]'; }
  label();
  btn.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });

  var el = document.getElementById('typed');
  if (el && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var text = el.dataset.text, i = 0;
    el.textContent = '';
    (function step() {
      el.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(step, 60);
    })();
  }
})();
