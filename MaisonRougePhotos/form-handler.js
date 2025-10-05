
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('y').textContent = new Date().getFullYear();
  const htmlEl = document.documentElement;
  const toggle = document.getElementById('toggleLang');
  if (toggle) {
    toggle.addEventListener('click', () => {
      htmlEl.dataset.lang = htmlEl.dataset.lang === 'fr' ? 'en' : 'fr';
      toggle.textContent = htmlEl.dataset.lang === 'fr' ? 'FR / EN' : 'EN / FR';
    });
  }

  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  const banner = document.getElementById('banner');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    msg.textContent = htmlEl.dataset.lang === 'fr' ? 'Envoi…' : 'Sending…';
    try {
      const resp = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if (resp.ok) {
        form.reset();
        showBanner('success', htmlEl.dataset.lang === 'fr'
          ? '✅ Message envoyé avec succès!'
          : '✅ Message sent successfully!');
      } else {
        showBanner('error', htmlEl.dataset.lang === 'fr'
          ? '⚠️ Erreur: écrivez à isabelzaza@gmail.com'
          : '⚠️ Error: please email isabelzaza@gmail.com');
      }
    } catch (e) {
      showBanner('error', htmlEl.dataset.lang === 'fr'
        ? '⚠️ Connexion impossible.'
        : '⚠️ Network issue.');
    }
  });

  function showBanner(type, text) {
    banner.className = type;
    banner.textContent = text;
    banner.style.display = 'block';
    setTimeout(() => banner.style.display = 'none', 4000);
  }
});
