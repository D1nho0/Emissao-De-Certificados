function abrirModal(idModal) {
    const modal = document.getElementById(`${idModal}-modal`);
    if (modal) {
        modal.style.display = "block";
    }
}

function fecharModal(idModal) {
    const modal = document.getElementById(`${idModal}-modal`);
    if (modal) {
        modal.style.display = "none";
    }
}


window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}


document.getElementById("logoutLink").addEventListener("click", function(e) {
    e.preventDefault();

    alert("Logout realizado com sucesso!");

    window.location.href = "../../index.html";
});


function inicializarGraficos() {

    if (document.getElementById("certificatesChart")) {
        const ctxCertificados = document.getElementById('certificatesChart').getContext('2d');
        new Chart(ctxCertificados, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Certificados Emitidos',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(54, 162, 235, 0.5)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    if (document.getElementById("usersChart")) {
        const ctxUsuarios = document.getElementById('usersChart').getContext('2d');
        new Chart(ctxUsuarios, {
            type: 'pie',
            data: {
                labels: ['Alunos', 'Professores', 'Administradores'],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(255, 206, 86, 0.5)'
                    ]
                }]
            },
            options: {
                responsive: true
            }
        });
    }
}


document.addEventListener("DOMContentLoaded", function() {
    inicializarGraficos();
    

    document.querySelectorAll('.btn-icon.fa-edit').forEach(btn => {
        btn.addEventListener('click', function() {
            const linha = this.closest('tr');
            const id = linha.cells[0].textContent;
            alert(`Editar item com ID: ${id}`);
        });
    });
    
    document.querySelectorAll('.btn-icon.fa-trash-alt').forEach(btn => {
        btn.addEventListener('click', function() {
            const linha = this.closest('tr');
            const id = linha.cells[0].textContent;
            if (confirm(`Tem certeza que deseja excluir o item com ID: ${id}?`)) {
                linha.remove();
                alert('Item excluído com sucesso!');
            }
        });
    });
});