// (Optional) If you later want parallax or timeline transitions we can hook here.
// For now this file is intentionally minimal.
console.debug("COVER masthead ready");

(function(){
    const root = document;
    const slides = Array.from(root.querySelectorAll('.hero-figure .slide'));
    const dots = Array.from(root.querySelectorAll('.hero-figure .dot'));
    if (!slides.length || !dots.length) return;

    let index = slides.findIndex( s => s.classList.contains('is-active'));
    if (index < 0) index = 0;

    const show = (n) => {
        index = (n + slides.length) % slides.length;
        slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
        dots.forEach((d, i) => d.setAttribute('aria-selected', String(i == index)));
    };

    dots.forEach((btn, i) => {
        btn.addEventListener('click', () => show(i));
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') show(index - 1);
        if (e.key === 'ArrowRight') show(index + 1);
    });
})();