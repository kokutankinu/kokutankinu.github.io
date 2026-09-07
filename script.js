const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const rareFullBodyPreview = document.querySelector('.reveal-image-wrap img');
if (rareFullBodyPreview) {
  rareFullBodyPreview.src = 'assets/game/rare-fullbody-preview.webp?v=20260907-2';
}
