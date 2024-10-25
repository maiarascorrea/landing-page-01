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

//Depoimentos
const slider = document.querySelector('.slider');
let currentIndex = 0;
const totalSlides = slider.children.length;
const slidesPerView = 2; // Mostrar dois slides por vez

// Função para atualizar o carrossel
function updateSlider() {
    const slideWidth = slider.children[0].offsetWidth + 16; // Inclui o gap
    const newTransform = -(currentIndex * slideWidth);
    slider.style.transform = `translateX(${newTransform}px)`;
}

// Navegação automática entre slides
function autoSlide() {
    // Calcula o próximo índice corretamente
    currentIndex = (currentIndex + 1) % Math.ceil(totalSlides / slidesPerView);
    updateSlider();
}

// Intervalo de troca automática a cada 3 segundos
setInterval(autoSlide, 3000);

// Suporte para navegação manual
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta a velocidade de rolagem
    slider.scrollLeft = scrollLeft - walk;
});

// Seleciona todas as perguntas do FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');

    questionButton.addEventListener('click', () => {
        // Fecha todas as outras respostas abertas
        faqItems.forEach(i => {
            if (i !== item) i.classList.remove('active');
        });

        // Alterna o estado ativo do item atual
        item.classList.toggle('active');
    });
});

// Função para detectar quando os elementos entram na tela
function handleScroll() {
    const cards = document.querySelectorAll('.fade-in');
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (cardPosition < screenPosition) {
            card.classList.add('show');
        }
    });
}

// Adiciona o evento de scroll
window.addEventListener('scroll', handleScroll);
