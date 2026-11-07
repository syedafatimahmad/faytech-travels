const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle?.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navList?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navList.classList.remove('is-open'));
});
