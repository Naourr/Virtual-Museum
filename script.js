// FADE UP ANIMATION START
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeUp 0.6s ease forwards`;
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(`
    h1, h2, h3, h4, h5, h6,
    p, a, span, li,
    img, button,
    header, footer, nav,
    section, article, div
`).forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});
// FADE UP ANIMATION END


// DARK/LIGHT MODE + HOME ICON START
const html = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');
const homeIcon = document.querySelector('.home-btn img');

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (toggleBtn) toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    if (homeIcon) homeIcon.src = theme === 'dark'
        ? '/assets/images/home-white.png'
        : '/assets/images/home-black.png';
}

// Load saved preference on every page
const saved = localStorage.getItem('theme') || 'light';
applyTheme(saved);

// Toggle on click
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', next);
        applyTheme(next);
    });
}
// DARK/LIGHT MODE + HOME ICON END