export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const topbarH = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--topbar-h'),
    10,
  ) || 58;

  const top = el.getBoundingClientRect().top + window.scrollY - topbarH - 16;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}
