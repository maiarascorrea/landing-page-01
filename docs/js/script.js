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
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const slidesPerView = 2; // Exibe 2 slides por vez
const totalSlides = Math.ceil(slider.children.length / slidesPerView); // Total de grupos de slides

// Atualiza o carrossel para mostrar os slides corretos
function updateCarousel(index) {
    const slideWidth = slider.querySelector('.slide').offsetWidth + 16; // Largura do slide + gap
    slider.style.transform = `translateX(-${index * slideWidth * slidesPerView}px)`;

    // Atualiza a bolinha ativa
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index % dots.length].classList.add('active');
}

// Navegação manual com bolinhas
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});

// Função para transição automática
function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Volta ao início após o último grupo
    updateCarousel(currentIndex);
}

// Inicia o carrossel automático a cada 3 segundos
let slideInterval = setInterval(autoSlide, 3000);

// Pausa o carrossel ao passar o mouse
slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', () => (slideInterval = setInterval(autoSlide, 3000)));

// Ajusta o carrossel ao redimensionar a janela
window.addEventListener('resize', () => updateCarousel(currentIndex));


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
