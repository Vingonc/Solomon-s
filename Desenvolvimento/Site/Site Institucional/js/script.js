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

function realizarLogin(){
    const caminho = "file:///C:/Users/vinic/Desktop/Projetos/Projeto%20Individual/Solomon-s/Desenvolvimento/Site/Site%20Institucional/auth/login.html";
    window.location.href = caminho;
}

function realizarCadastro(){
    const caminho = "file:///C:/Users/vinic/Desktop/Projetos/Projeto Individual/Solomon-s/Desenvolvimento/Site/Site Institucional/auth/auth.html"
    window.location.href = caminho;
}

function direcionarQuiz(){
    const caminho = "file:///C:/Users/vinic/Desktop/Projetos/Projeto Individual/Solomon-s/Desenvolvimento/Site/Site Institucional/quiz.html"
    window.location.href = caminho;
}