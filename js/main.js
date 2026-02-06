const loginToggle = document.getElementById('login-toggle');
const loginPanel = document.getElementById('login-panel');

if (loginToggle && loginPanel) {
  loginToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = loginPanel.classList.toggle('open');
    loginPanel.setAttribute('aria-hidden', String(!isOpen));
    loginToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', function (e) {
    if (!loginPanel.contains(e.target) && e.target !== loginToggle && loginPanel.classList.contains('open')) {
      loginPanel.classList.remove('open');
      loginPanel.setAttribute('aria-hidden', 'true');
      loginToggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && loginPanel.classList.contains('open')) {
      loginPanel.classList.remove('open');
      loginPanel.setAttribute('aria-hidden', 'true');
      loginToggle.setAttribute('aria-expanded', 'false');
      loginToggle.focus();
    }
  });
}

document.querySelectorAll('.contenido nav a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var href = this.getAttribute('href');
    var toggle = document.getElementById('toggle-menu');
    if (toggle) toggle.checked = false;
    window.location.href = href;
  });
});

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

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function (e) {
    const inputs = this.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = '#ff4d4f';
        isValid = false;
      } else {
        input.style.borderColor = '';
      }
    });

    if (!isValid) {
      e.preventDefault();
      alert('Por favor, completa todos los campos requeridos');
    }
  });

  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', function () {
      if (this.value.trim()) {
        this.style.borderColor = '';
      }
    });
  });
});

document.querySelectorAll('.faq article').forEach(article => {
  const title = article.querySelector('h4');
  if (title) {
    title.style.cursor = 'pointer';
    title.style.userSelect = 'none';
    const content = article.querySelector('p');
    const isOpen = article.classList.contains('open');
    
    if (!isOpen && content) {
      content.style.maxHeight = '0';
      content.style.overflow = 'hidden';
      content.style.transition = 'max-height 0.3s ease';
    }

    title.addEventListener('click', function () {
      if (content) {
        if (article.classList.contains('open')) {
          article.classList.remove('open');
          content.style.maxHeight = '0';
        } else {
          article.classList.add('open');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    });
  }
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', function() {
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });
    
    item.classList.toggle('active');
  });
});
