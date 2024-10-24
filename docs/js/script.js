// Alternância entre Modo Claro e Escuro
const toggleTheme = () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);

    // Alterar o ícone e texto do botão de acordo com o tema
    themeToggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙 ';
};

// Criar e Adicionar o Botão de Tema ao DOM
const themeToggleBtn = document.createElement('button');
themeToggleBtn.classList.add('theme-toggle');
themeToggleBtn.textContent = '🌙 '; // Padrão: claro
document.body.appendChild(themeToggleBtn);
themeToggleBtn.addEventListener('click', toggleTheme);

// Scroll Suave ao Clicar nos Links da Navegação
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

// Efeito de Zoom no Hover dos Botões CTA
document.querySelectorAll('.cta a, .botao-cta').forEach(cta => {
    cta.addEventListener('mouseenter', () => {
        cta.style.transform = 'scale(1.2)';
        cta.style.transition = 'transform 0.3s';
    });
    cta.addEventListener('mouseleave', () => {
        cta.style.transform = 'scale(1)';
    });
});

// Troca de Cores do Menu no Scroll (Adicionando Shadow)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

