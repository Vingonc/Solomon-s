// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

function select_menu(sectionId) {
    const sectionMap = {
        link_home: 'section_home',
        link_missao: 'section_missao',
        link_sobre: 'section_sobre_mim'
    };

    // Obtém o ID da seção correspondente
    const sectionToScroll = sectionMap[sectionId];

    if (sectionToScroll) {
        // Se a seção for 'section_home', rola até o topo da página
        if (sectionId === 'link_home') {
            window.scrollTo({
                top: 0,              // Rola até o topo
                behavior: 'smooth'   // Rolagem suave
            });
        } else {
            // Rola até a seção específica
            document.getElementById(sectionToScroll).scrollIntoView({
                behavior: 'smooth',  // Rolagem suave
                block: 'start'       // Alinha ao topo da seção
            });
        }
    }
}

// DIRECIONAIS DA PÁGINA

//Função que encaminha o usuario para a página de login
function realizarLogin(){
    window.location.href = 'login.html'
}

//Função que encaminha o usuario para a página de cadastro
function realizarCadastro(){
    window.location.href = 'cadastro.html'
}

//Função que encaminha o usuario para o quiz
function direcionarQuiz(){
    const caminho = "file:///C:/Users/vinic/Desktop/Projetos/Projeto Individual/Solomon-s/Desenvolvimento/Site/Site Institucional/quiz.html"
    window.location.href = caminho
}

//Função que encaminha o usuario para a página principal
function direcionarHome(){
    window.location.href = 'index.html'
}



//Funções que encaminham o usuario para os capitulos de provérbios

function direcionarProverbios3() {
    window.open('https://www.bible.com/pt/bible/129/PRO.3.NVI', '_blank')
}

function direcionarProverbios8() {
    window.open('https://www.bible.com/pt/bible/129/PRO.8.NVI', '_blank')
}

function direcionarProverbios10() {
    window.open('https://www.bible.com/pt/bible/129/PRO.10.NVI', '_blank')
}

function direcionarProverbios22() {
    window.open('https://www.bible.com/pt/bible/129/PRO.22.NVI', '_blank')
}

function direcionarProverbios30() {
    window.open('https://www.bible.com/pt/bible/129/PRO.30.NVI', '_blank')
}

function direcionarProverbios31() {
    window.open('https://www.bible.com/pt/bible/129/PRO.31.NVI', '_blank')
}



// Pegando o elemento que contém todas as imagens (o carrossel)
const slider = document.getElementById("direcionador_proverbios")

// Pegando todas as imagens individuais dentro do carrossel
const items = document.querySelectorAll(".bar_versiculos")

// Calculando a largura de uma imagem, incluindo margens (largura total do elemento)
const itemWidth = items[0].offsetWidth + 40 // 40 é a margem entre as imagens

// Função para mover as imagens para a esquerda
function moverEsquerda() {
    // 1. Pegando a última imagem do carrossel
    const lastItem = slider.lastElementChild

    // 2. Movendo a última imagem para o início (antes da primeira imagem)
    slider.insertBefore(lastItem, slider.firstElementChild)

    // 3. Adicionando um efeito de transição para reposicionar as imagens suavemente
    slider.style.transition = "none"; // Removemos temporariamente a transição
    slider.style.transform = `translateX(-${itemWidth}px)` // Movemos uma imagem à esquerda

    // 4. Depois de um pequeno intervalo, ajustando para "voltar ao normal" com animação
    setTimeout(() => {
        slider.style.transition = "transform 0.5s ease" // Adiciona a transição suave
        slider.style.transform = "translateX(0)" // Restaura para a posição inicial
    });
}

// Função para mover as imagens para a direita
function moverDireita() {
    // 1. Pegando a primeira imagem do carrossel
    const firstItem = slider.firstElementChild

    // 2. Movendo a primeira imagem para o final do carrossel
    slider.appendChild(firstItem)

    // 3. Adicionando um efeito de transição para reposicionar as imagens suavemente
    slider.style.transition = "none"; // Removemos temporariamente a transição
    slider.style.transform = `translateX(${itemWidth}px)` // Movemos uma imagem à direita

    // 4. Depois de um pequeno intervalo, ajustando para "voltar ao normal" com animação
    setTimeout(() => {
        slider.style.transition = "transform 0.5s ease" // Adiciona a transição suave
        slider.style.transform = "translateX(0)" // Restaura para a posição inicial
    });
}
