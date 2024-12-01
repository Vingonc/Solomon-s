const labels = [
    '1°',
    '2°',
    '3°',
    '4°',
    '5°',
    '6°',
    '7°',
    '8°',
    '9°',
];

const estadoAulas =[
    'Pendente',
    'Realizadas',
]

const data = {
    labels: labels,
    datasets: [{
        label: 'Meta Atingida',
        data: [2, 3, 0, 1, 5, 8, 6, 2, 1],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        tension: 0.3,
        fill: true,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
    },
    {
        label: 'Meta Ideal',
        data: [5, 5, 5, 5, 5, 5, 5, 5, 5],
        borderColor: 'rgb(79, 122, 63)',
        borderWidth: 1,
        fill: false,
        pointBackgroundColor: 'rgb(79, 122, 63)',
    },
    {
        label: 'Meta Mínima',
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1],
        borderColor: 'rgb(242, 172, 172)',
        borderWidth: 1,
        fill: false,
        pointBackgroundColor: 'rgb(242, 172, 172)',
    }]
}

const aulas = {
    labels: estadoAulas,
    datasets: [{
        label: 'Pendetes',
        backgroundColor: 'rgb(242, 172, 172)',
        borderColor: 'rgb(242, 172, 172)',
        data: [50, 0],
    },
    {
        label: 'Realizadas',
        backgroundColor: 'rgb(79, 122, 63)',
        borderColor: 'rgb(79, 122, 63)',
        data: [0, 10],
    }]
}

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                labels: {
                    color: 'black', // Cor do texto da legenda
                    generateLabels: function(chart) {
                        // Mantém as cores iguais às linhas do gráfico
                        return chart.data.datasets.map(function(dataset, i) {
                            return {
                                text: dataset.label,
                                fillStyle: dataset.borderColor, // Quadrado com a mesma cor da borda
                                strokeStyle: dataset.borderColor,
                                lineWidth: dataset.borderWidth,
                                datasetIndex: i
                            };
                        });
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false // Remove as linhas de grade verticais
                }
            },
            y: {
                grid: {
                    display: false // Remove as linhas de grade horizontais
                }
            }
        }
    }
}

const config2 = {
    type: 'bar',
    data: aulas,
    options: {
        plugins: {
            legend: {
                labels: {
                    color: 'black', // Cor do texto da legenda
                    generateLabels: function(chart) {
                        // Mantém as cores iguais às linhas do gráfico
                        return chart.data.datasets.map(function(dataset, i) {
                            return {
                                text: dataset.label,
                                fillStyle: dataset.borderColor, // Quadrado com a mesma cor da borda
                                strokeStyle: dataset.borderColor,
                                lineWidth: dataset.borderWidth,
                                datasetIndex: i
                            };
                        });
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false // Remove as linhas de grade verticais
                }
            },
            y: {
                grid: {
                    display: false // Remove as linhas de grade horizontais
                }
            }
        }
    }
}



const myChart = new Chart(
    document.getElementById('myChart'),
    config
)

const chartMetas = new Chart(
    document.getElementById('chartMetas'),
    config2
)


// Selecionando o botão de toggle e o menu lateral
const menuToggle = document.getElementById('menu_toggle');
const sideMenu = document.getElementById('side_menu');

// Adicionando evento de clique para abrir/fechar o menu
menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
});


// Seleciona os elementos do menu e do ícone
const menu = document.getElementById('menu_estudos');
const toggleIcon = document.getElementById('toggle_icon');

// Alterna a visibilidade e a rotação ao clicar no ícone
toggleIcon.addEventListener('click', function () {
    menu.classList.toggle('hidden'); // Adiciona ou remove a classe 'hidden'
    
    // Aplica rotação de 180 graus ou retorna à posição original
    toggleIcon.style.transform = menu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
});

// Muda o conteúdo de Aulas com base na matéria selecionada
const selectMateria = document.getElementById('materia')

selectMateria.addEventListener('change', function() {
    const materia = selectMateria.value

    if(materia == 'teologia'){
        document.getElementById('materias').innerHTML = 
        `<div id="titulo_materia">
                            <p>Teologia</p>
                        </div>
                        <ul id="submenu">
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=2'>Aula 1 - A IMPORTÂNCIA DA DOUTRINA BÍBLICA</a>
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=5'>Aula 2 - INTERPRETAÇÃO BÍBLICA</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=6'>Aula 3 - A EXISTÊNCIA DE DEUS</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=ekf46Kpnvlc&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=7'>Aula 4 - O MISTÉRIO DA TRINDADE</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=11'>Aula 5 - A CRIAÇÃO</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=16'>Aula 6 - A VOLTA DE JESUS</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=20'>Aula 7 - O BATISMO EM ÁGUA</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=27'>Aula 8 - CRIAÇÃO E QUEDA DO HOMEM</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=29'>Aula 9 - O NOVO NASCIMENTO</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=38'>Aula 10 - A JUSTIFICAÇÃO</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=36'>Aula 11 - A SANTIFICAÇÃO</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=40'>Aula 12 - A GLORIFICAÇÃO</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=53'>Aula 13 - OS DONS DO ESPÍRITO</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=67'>Aula 14 - A LEITURA BÍBLICA</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=66'>Aula 15 - POR QUE ORAR?</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=68'>Aula 16 - O JEJUM</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=KmpucxGB1jA&list=PLZ4pKq9EIdzxzr5269KlYThKXeEVL6BVf'>Aula 17 - A História do Cristianismo | Episódio 01</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=xyE4U2oFbGU&list=PLZ4pKq9EIdzxzr5269KlYThKXeEVL6BVf&index=2'>Aula 18 - A História do Cristianismo | Episódio 2</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=mjgNsyPDA4k&list=PLZ4pKq9EIdzxzr5269KlYThKXeEVL6BVf&index=3'>Aula 19 - A História do Cristianismo | Episódio 3</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=mjgNsyPDA4k&list=PLZ4pKq9EIdzxzr5269KlYThKXeEVL6BVf&index=4'>Aula 20 - A História do Cristianismo | Episódio 4</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=mjgNsyPDA4k&list=PLZ4pKq9EIdzxzr5269KlYThKXeEVL6BVf&index=5'>Aula 21 - A História do Cristianismo | Episódio 5</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=mjgNsyPDA4k&list=PLZ4pKq9EIdzxzr5269KlYThKXeEVL6BVf&index=6'>Aula 22 - A História do Cristianismo | Episódio 6</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=mjgNsyPDA4k&list=PLZ4pKq9EIdzxzr5269KlYThKXeEVL6BVf&index=7'>Aula 23 - A História do Cristianismo | Episódio Extra</a
                            </li>
                            <div id="separador"></div>
                        </ul>`
    } else if (materia == 'financas'){
        document.getElementById('materias').innerHTML =
        `<div id="titulo_materia">
                            <p>Finanças</p>
                        </div>
                        <ul id="submenu">
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=1ulzj3dJ4EA'>Aula 1 - Como funciona a economia?</a>
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=nQ22jWH75WQ'>Aula 2 - Previdência Social</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=a6V3ys4xEQU'>Aula 3 - CLT</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=xzkiUwM8cz0'>Aula 4 - Imposto</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=W_kfS2boa_Y'>Aula 5 - Como funciona a bolsa de valores?</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=PtAkxzMhobQ'>Aula 6 - Como começar a investir</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=eMDgWLWOX84'>Aula 7 - Como montar uma carteira de investimentos</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=-sGOvusS5NI'>Aula 8 - Investimentos iniciais</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=z3fTzc0q10M'>Aula 9 - Fundos Imobiliarios</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=R4X1Ktv16bA'>Aula 10 - Cripto moedas</a
                            </li>
                            <div id="separador"></div>
                        </ul>`
    } else if (materia == 'politica'){
        document.getElementById('materias').innerHTML =
        `<div id="titulo_materia">
                            <p>Politica</p>
                        </div>
                        <ul id="submenu">
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=nJlL0C4LTUs'>Aula 1 - Os espectros políticos</a>
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=90N6xRU58Vo'>Aula 2 - Sistema politico brasileiro</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=0oRGiD9Birs'>Aula 3 - O que é o Anarcocaptalismo</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=img7c4DUOlI'>Aula 4 - Revolução industrial</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=OHrriEnWdGw'>Aula 5 - Revolução francesa</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=zgXxNbOuUIg'>Aula 6 - Revolução russa</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=KhbqKPb-k4I'>Aula 7 - O Holomodor</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=QzDkhz-4zHs'>Aula 8 - Russia x Ucrânia</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=qJvgXqKYeKg'>Aula 9 - Israel x Hamas</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=wuD8cShgWb8'>Aula 10 - Geopolítica da América do Sul</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=uvnBt5Qsfh4'>Aula 11 - Terceira guerra?</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=iYoHysNjJT0'>Aula 12 - Coreia do Norte</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=yTenWQHRPIg'>Aula 13 - 1964</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=Ue77esm5Kqs'>Aula 14 - O teatro das tesouras</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=4aqhPpHlm1c'>Aula 15 - O teatro das tesouras | Parte 2</a
                            </li>
                            <div id="separador"></div>
                        </ul>`
    } else if (materia == 'desenvolvimento'){
        document.getElementById('materias').innerHTML =
        `<div id="titulo_materia">
                            <p>Desenvolvimento Pessoal</p>
                        </div>
                        <ul id="submenu">
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=MN9ZjjB9800'>Aula 1 - Rotina de sono</a>
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=oBy0vFnPcps'>Aula 2 - Postura</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=yoQ48gCiD08'>Aula 3 - Exercícios</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=451BoWEb7bI'>Aula 4 - Dicas para Exercicios</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=miGOf-EPBwo'>Aula 5 - Guia completo do desenvolvimento</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=DykuOqEnYYM'>Aula 6 - Dessexualizar o Seu Cérebro</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=v9Id3UnTVlk'>Aula 7 - Leiturar</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=uy7XLzAaww4'>Aula 8 - Distrações</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=_NIBRyOqBAQ'>Aula 9 - Estilo minimalista</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=A_xG3HSZ8Ac'>Aula 10 - Comunicação</a
                            </li>
                            <div id="separador"></div>
                        </ul>`
    } else if (materia == 'programacao'){
        document.getElementById('materias').innerHTML =
        `<div id="titulo_materia">
                            <p>Programação</p>
                        </div>
                        <ul id="submenu">
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=A1BaZr82XJI'>Aula 1 - Dicas e caminhos da para a programação</a>
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=jgQjeqGRdgA&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=2'>Aula 2 - HTML e CSS</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=1-w1RfGIov4&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1'>Aula 3 - Javascript</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=xEKo29OWILE&list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA'>Aula 4 - Git e GitHub</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=KvPtIl-Gz2E&list=PLHz_AreHm4dlaTyjolzCFC6IjLzO8O0XV'>Aula 5 - Segurança da Informação</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=iT6E92Kt38o&list=PLHz_AreHm4dn1JHgN9wpbIUhzZmycYQXW'>Aula 6 - Hardware</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=6nN2EglOqCM&list=PLHz_AreHm4dlIXleu20uwPWFOSswqLYbV'>Aula 7 - Linux</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.youtube.com/watch?v=jQMbuK6URws&list=PLHz_AreHm4dm24MhlWJYiR_Rm7TFtvs6S'>Aula 8 - Inteligência artificial</a
                            </li>
                            <div id="separador"></div>
                            <li><a href = 'https://www.w3schools.com'>Extra - Site para ajuda</a
                            </li>
                            <div id="separador"></div>
                        </ul>`
    } 
})
