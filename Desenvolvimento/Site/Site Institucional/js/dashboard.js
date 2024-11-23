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

const myChart = new Chart(
    document.getElementById('myChart'),
    config
)