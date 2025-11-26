# 🛡️ CyberSec Portfolio

> **Tema:** Portfólio Profissional.

![Status](https://img.shields.io/badge/Status-Completed-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 💻 Sobre o Projeto

Este projeto consiste em um **Single Page Application (SPA)** que atua simultaneamente como portfólio profissional e um e-book interativo sobre cibersegurança. O objetivo foi criar uma interface imersiva que reflita a identidade visual de um analista de **Blue Team**, utilizando tecnologias web modernas sem o uso de frameworks pesados.

O site apresenta um design responsivo "Mobile-First", acessibilidade aprimorada e funcionalidades interativas via JavaScript.

## Funcionalidades Principais

* *** Cyber Mode vs. Hidden Mode:** Sistema de troca de temas (Escuro/Claro) com persistência de dados via `localStorage`.
    * *Cyber Mode:* Estética hacker, fundo preto com grade e feixes de luz neon.
    * *Hidden Mode:* Modo claro corporativo para leitura facilitada.
* *** Efeitos Visuais Avançados (CSS Puro):**
    * Animação de digitação ("Typing Effect") no título principal.
    * Scanner de Rede: Um feixe de luz animado que percorre a tela (`::after` e `keyframes`).
    * Botões e Cards com brilho Neon (Glow effects).
* *** Formulário Funcional:** Integração com **Formspree** e **AJAX (Fetch API)** para envio real de e-mails sem recarregar a página, com validação de campos via JavaScript.
* *** Responsividade:** Layout adaptável para celulares, tablets e desktops utilizando **CSS Grid** e **Flexbox**.
* *** Multimídia:** Galeria de imagens com tratamento CSS (`object-fit`) e vídeo demonstrativo em loop integrado.

## Tecnologias Utilizadas

* **HTML5 Semântico:** Estruturação acessível e otimizada para SEO.
* **CSS3 Moderno:** Variáveis (`:root`), Grid Layout, Flexbox, Keyframes Animations e Media Queries.
* **JavaScript (ES6+):** Manipulação do DOM, Event Listeners, validação de formulários e controle de estado do tema.
* **FontAwesome:** Ícones vetoriais para links sociais.

## Estrutura de Arquivos

```text
/
├── index.html      # Estrutura principal e conteúdo
├── style.css       # Estilização, temas e animações
├── script.js       # Lógica, validação e interatividade
├── README.md       # Documentação do projeto
└── assets/            # Pasta de assets
    ├── perfil.jpg
    ├── Análise de Código e Scripts de Defesa.png
    ├── Dashboard Wazuh - Monitoramento de Segurança.png
    ├── Mapa de Ameaças em Tempo Real.png
    └── movie.mp4