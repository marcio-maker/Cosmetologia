document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.classList.toggle('active');
    });
});

document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        document.getElementById('sidebar').classList.remove('active');
    });
});

// Menu Lateral
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const sidebarLinks = sidebar.querySelectorAll('a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});

// Acordeão
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = content.classList.contains('active');

        // Fechar todos os acordeões
        document.querySelectorAll('.accordion-content').forEach(c => {
            c.classList.remove('active');
        });
        document.querySelectorAll('.accordion-header').forEach(h => {
            h.classList.remove('active');
        });

        // Abrir o clicado, se não estava ativo
        if (!isActive) {
            content.classList.add('active');
            header.classList.add('active');
        }
    });
});

// Navegação suave para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const accordionHeader = targetSection.querySelector('.accordion-header');
        const accordionContent = targetSection.querySelector('.accordion-content');

        // Abrir o acordeão correspondente
        document.querySelectorAll('.accordion-content').forEach(c => {
            c.classList.remove('active');
        });
        document.querySelectorAll('.accordion-header').forEach(h => {
            h.classList.remove('active');
        });
        accordionContent.classList.add('active');
        accordionHeader.classList.add('active');

        // Rolagem suave
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Modo Escuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.textContent = body.dataset.theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', body.dataset.theme);
});

// Carregar tema salvo
const savedTheme = localStorage.getItem('theme') || 'light';
body.dataset.theme = savedTheme;
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
