        function atualizarRelatorios() {
            const periodo = document.getElementById('periodo').value;
            const curso = document.getElementById('curso').value;
            

            alert(`Relatórios atualizados para o período: ${periodo} e curso: ${curso}`);
            
        }


        const certificatesCtx = document.getElementById('certificatesChart').getContext('2d');
        new Chart(certificatesCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Certificados Emitidos',
                    data: [45, 59, 73, 91, 84, 103],
                    backgroundColor: 'rgba(75, 192, 192, 0.7)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Quantidade'
                        }
                    }
                }
            }
        });

        const usersCtx = document.getElementById('usersChart').getContext('2d');
        new Chart(usersCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Usuários Ativos',
                    data: [850, 920, 1020, 1100, 1150, 1248],
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 800,
                        title: {
                            display: true,
                            text: 'Usuários'
                        }
                    }
                }
            }
        });

        const popularCoursesCtx = document.getElementById('popularCoursesChart').getContext('2d');
        new Chart(popularCoursesCtx, {
            type: 'doughnut',
            data: {
                labels: ['Programação Web', 'Design Gráfico', 'Marketing Digital', 'Ciência de Dados', 'Inglês Técnico'],
                datasets: [{
                    data: [320, 180, 150, 90, 60],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });

        const completionRateCtx = document.getElementById('completionRateChart').getContext('2d');
        new Chart(completionRateCtx, {
            type: 'radar',
            data: {
                labels: ['Programação Web', 'Design Gráfico', 'Marketing Digital', 'Ciência de Dados', 'Inglês Técnico'],
                datasets: [{
                    label: 'Taxa de Conclusão',
                    data: [85, 72, 90, 65, 78],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                }
            }
        });


        document.getElementById('logoutLink').addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Deseja realmente sair do sistema?')) {

                window.location.href = '../../index.html';
            }
        });