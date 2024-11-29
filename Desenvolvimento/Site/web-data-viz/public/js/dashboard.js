const labels = [
    '16/11',
    '17/11',
    '18/11',
    '19/11',
    '20/11',
    '21/11',
    '22/11',
    '23/11',
    '24/11',
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


const materia = document.getElementById('materia').value

if(materia == 'teologia'){
    document.getElementById('materias').innerHTML = 
    `<div id="titulo_materia">
                        <p>Teologia</p>
                    </div>
                    <ul id="submenu">
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=2'>Aula 1 - A IMPORTÂNCIA DA DOUTRINA BÍBLICA</a> 
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=5'>Aula 2 - INTERPRETAÇÃO BÍBLICA</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=6'>Aula 3 - A EXISTÊNCIA DE DEUS</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=ekf46Kpnvlc&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=7'>Aula 4 - O MISTÉRIO DA TRINDADE</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=11'>Aula 5 - A CRIAÇÃO</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=16'>Aula 6 - A VOLTA DE JESUS</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=20'>Aula 7 - O BATISMO EM ÁGUA</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=27'>Aula 8 - CRIAÇÃO E QUEDA DO HOMEM</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=29'>Aula 9 - O NOVO NASCIMENTO</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=38'>Aula 10 - A JUSTIFICAÇÃO</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=36'>Aula 11 - A SANTIFICAÇÃO</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=40'>Aula 12 - A GLORIFICAÇÃO</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=53'>Aula 13 - OS DONS DO ESPÍRITO</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=67'>Aula 14 - A LEITURA BÍBLICA</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=66'>Aula 15 - POR QUE ORAR?</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=Y2enuVGKyCQ&list=PL7BFepC9j7U1egnY7Wk9ej-8T4aj2DStb&index=68'>Aula 16 - O JEJUM</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=KmpucxGB1jA&list=PLZ4pKq9EIdzxzr5269KlYThKXeEVL6BVf'>Aula 17 - A História do Cristianismo | Episódio 01</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=xyE4U2oFbGU&list=PLZ4pKq9EIdzxzr5269KlYThKXeEVL6BVf&index=2'>Aula 18 - A História do Cristianismo | Episódio 2</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=mjgNsyPDA4k&list=PLZ4pKq9EIdzxzr5269KlYThKXeEVL6BVf&index=3'>Aula 19 - A História do Cristianismo | Episódio 3</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=mjgNsyPDA4k&list=PLZ4pKq9EIdzxzr5269KlYThKXeEVL6BVf&index=4'>Aula 20 - A História do Cristianismo | Episódio 4</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=mjgNsyPDA4k&list=PLZ4pKq9EIdzxzr5269KlYThKXeEVL6BVf&index=5'>Aula 21 - A História do Cristianismo | Episódio 5</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=mjgNsyPDA4k&list=PLZ4pKq9EIdzxzr5269KlYThKXeEVL6BVf&index=6'>Aula 22 - A História do Cristianismo | Episódio 6</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=mjgNsyPDA4k&list=PLZ4pKq9EIdzxzr5269KlYThKXeEVL6BVf&index=7'>Aula 23 - A História do Cristianismo | Episódio Extra</a>
                            <input type="checkbox">
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
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=nQ22jWH75WQ'>Aula 2 - Previdência Social</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=a6V3ys4xEQU'>Aula 3 - CLT</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=xzkiUwM8cz0'>Aula 4 - Imposto</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=W_kfS2boa_Y'>Aula 5 - Como funciona a bolsa de valores?</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=PtAkxzMhobQ'>Aula 6 - Como começar a investir</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=eMDgWLWOX84'>Aula 7 - Como montar uma carteira de investimentos</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=-sGOvusS5NI'>Aula 8 - Investimentos iniciais</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=z3fTzc0q10M'>Aula 9 - Fundos Imobiliarios</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                        <li><a href = 'https://www.youtube.com/watch?v=R4X1Ktv16bA'>Aula 10 - Cripto moedas</a>
                            <input type="checkbox">
                        </li>
                        <div id="separador"></div>
                    </ul>`
} else if (materia == 'politica'){
    document.getElementById('materias').innerHTML =
    ``
}