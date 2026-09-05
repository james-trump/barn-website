document.getElementById('year').textContent = new Date().getFullYear();

var nav = document.getElementById('siteNav');
function updateNav() {
  if (window.scrollY > 40) {
    nav.classList.add('is-solid');
  } else {
    nav.classList.remove('is-solid');
  }
}
updateNav();
window.addEventListener('scroll', updateNav, { passive: true });

var menuToggle = document.getElementById('menuToggle');
var navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', function () {
  var isOpen = navLinks.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

var form = document.getElementById('enquiryForm');
var successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var arrival = document.getElementById('arrival').value;
  var departure = document.getElementById('departure').value;
  if (arrival && departure && departure <= arrival) {
    alert('Please choose a departure date after the arrival date.');
    return;
  }

  var actionUrl = form.getAttribute('action');
  if (!actionUrl || actionUrl.indexOf('YOUR_FORM_ID') !== -1) {
    alert('The enquiry form needs a Formspree endpoint set up before it can send messages. See the setup note left in the code.');
    return;
  }

  var submitBtn = form.querySelector('button[type="submit"]');
  var originalLabel = submitBtn.textContent;
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;

  fetch(actionUrl, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(function (response) {
    if (response.ok) {
      form.reset();
      successMsg.classList.add('is-visible');
      form.style.display = 'none';
    } else {
      alert('Something went wrong sending your enquiry. Please try again, or email us directly.');
    }
  }).catch(function () {
    alert('Something went wrong sending your enquiry. Please try again, or email us directly.');
  }).finally(function () {
    submitBtn.textContent = originalLabel;
    submitBtn.disabled = false;
  });
});
