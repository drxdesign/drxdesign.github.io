// Scroll reveal using IntersectionObserver
// Handles .reveal, .reveal-left, .reveal-right with optional .delay-* classes

document.addEventListener('DOMContentLoaded', () => {
  const revealClasses = ['reveal', 'reveal-left', 'reveal-right'];

  const targets: Element[] = [];
  revealClasses.forEach(cls => {
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
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => observer.observe(el));
});
