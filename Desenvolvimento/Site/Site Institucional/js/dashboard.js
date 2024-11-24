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