(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  // Apply saved theme immediately
  const saved = localStorage.getItem('theme') || 'light';
  root.setAttribute('data-theme', saved);
  btn.textContent = saved === 'dark' ? '☀ Light' : '☾ Dark';

  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    btn.textContent = next === 'dark' ? '☀ Light' : '☾ Dark';
  });
})();
