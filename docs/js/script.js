// Alternância entre Modo Claro e Escuro
const toggleTheme = () => {
    const currentTheme = document.body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);

    // Alterar o texto e ícone do botão de tema
    themeToggleBtn.textContent = newTheme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro';
};

// Criar e adicionar o botão de alternância de tema
const themeToggleBtn = document.createElement('button');
themeToggleBtn.classList.add('theme-toggle');
themeToggleBtn.textContent = '🌙 Modo Escuro';
document.body.appendChild(themeToggleBtn);
themeToggleBtn.addEventListener('click', toggleTheme);

// Scroll Suave para Links de Navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Efeito de Zoom no Hover dos CTAs
document.querySelectorAll('.cta a, .botao-cta').forEach(cta => {
    cta.addEventListener('mouseenter', () => {
        cta.style.transform = 'scale(1.2)';
        cta.style.transition = 'transform 0.3s';
    });
    cta.addEventListener('mouseleave', () => {
        cta.style.transform = 'scale(1)';
    });
});

// Sombra Dinâmica no Header ao Rolar a Página
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Depoimentos - Slider Horizontal
const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Aumentar a velocidade de rolagem
    slider.scrollLeft = scrollLeft - walk;
});
