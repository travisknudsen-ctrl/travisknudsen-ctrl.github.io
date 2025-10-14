
document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(h => {
        h.style.opacity = 0;
        setTimeout(() => {
            h.style.transition = 'opacity 1.5s';
            h.style.opacity = 1;
        }, 100);
    });
});
