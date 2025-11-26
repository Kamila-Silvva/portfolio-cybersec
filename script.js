// 1. Smooth Scroll (Rolagem suave ao clicar no menu)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Alternar Tema (Dark/Light)
const toggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

// Verifica se já tinha uma preferência salva
if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleBtn.textContent = 'CYBER_MODE';
}

toggleBtn.addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        // Volta para o Dark (Cyber)
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = 'Modo Claro';
    } else {
        // Muda para o Light
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = 'Modo Escuro';
    }
});

const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    // Regra simples
    if(nome.length < 3 || !email.includes('@')) {
        feedback.style.color = 'red';
        feedback.textContent = '[ERROR] Dados inválidos. Verifique inputs.';
        return;
    }

    // Sucesso
    feedback.style.color = '#bc13fe'; // Cor Neon
    feedback.textContent = '[SUCCESS] Payload enviado ao servidor.';
    form.reset();
});