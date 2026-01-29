// Manejo mínimo del desplegable de inicio de sesión
const loginToggle = document.getElementById('login-toggle');
const loginPanel = document.getElementById('login-panel');

if (loginToggle && loginPanel) {
  loginToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = loginPanel.classList.toggle('open');
    loginPanel.setAttribute('aria-hidden', String(!isOpen));
    loginToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', function (e) {
    if (!loginPanel.contains(e.target) && e.target !== loginToggle && loginPanel.classList.contains('open')) {
      loginPanel.classList.remove('open');
      loginPanel.setAttribute('aria-hidden', 'true');
      loginToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Cerrar con Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && loginPanel.classList.contains('open')) {
      loginPanel.classList.remove('open');
      loginPanel.setAttribute('aria-hidden', 'true');
      loginToggle.setAttribute('aria-expanded', 'false');
      loginToggle.focus();
    }
  });
}

// Forzar navegación desde el menú desplegable en caso de que algún elemento superior bloquee el click
document.querySelectorAll('.contenido nav a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var href = this.getAttribute('href');
    // cerrar el menú si existe
    var toggle = document.getElementById('toggle-menu');
    if (toggle) toggle.checked = false;
    // navegar
    window.location.href = href;
  });
});

// Badge flotante y botón 'volver arriba'
const floatBadge = document.getElementById('float-badge');
const backTop = document.getElementById('back-to-top');

if (floatBadge) {
  floatBadge.addEventListener('click', function () {
    alert('¡Oferta especial! Escríbenos desde Contacto 😄');
  });
}

window.addEventListener('scroll', function () {
  if (!backTop) return;
  if (window.scrollY > 300) backTop.classList.add('show'); else backTop.classList.remove('show');
});

if (backTop) {
  backTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}