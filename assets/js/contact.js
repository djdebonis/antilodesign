(() => {
  const form = document.getElementById('contact-form');
  if (!form || !window.fetch) return;
  const button = form.querySelector('button[type="submit"]');
  const success = document.getElementById('contact-success');
  const error = document.getElementById('contact-error');
  let pending = false;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (pending || !form.reportValidity()) return;
    pending = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    success.hidden = true;
    error.hidden = true;
    try {
      const response = await fetch(form.action, {
        method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      success.hidden = false;
      success.focus();
    } catch (_) {
      error.hidden = false;
      error.focus();
    } finally {
      pending = false;
      button.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });
})();
