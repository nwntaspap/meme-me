export function getThemeToggle() {
  const doc = document.documentElement;
  const toggle = document.getElementById('toggle');

  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    doc.setAttribute('data-theme', theme);
  });
}
