// Scroll reveal using IntersectionObserver
// Handles .reveal, .reveal-left, .reveal-right

document.addEventListener('DOMContentLoaded', () => {
  const targets: Element[] = [];
  ['reveal', 'reveal-left', 'reveal-right'].forEach(cls => {
    document.querySelectorAll(`.${cls}`).forEach(el => targets.push(el));
  });

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  targets.forEach(el => observer.observe(el));
});
