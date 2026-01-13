(function () {
  const el = document.getElementById('status');
  if (!el) return;
  const now = new Date();
  el.textContent = `Client JS loaded at: ${now.toLocaleString()}`;
})();
