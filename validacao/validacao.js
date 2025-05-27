// Banco de dados simulado de certificados
const certificateDatabase = [
    {
        code: "EMC-2023-ABCD-1234",
        name: "Cláudio Bernardo",
        course: "Gestão do Tempo",
        date: "15/03/2023",
        hours: "12 horas",
        status: "valid"
    },
    {
        code: "EMC-2023-WXYZ-5678",
        name: "Luis Eduardo",
        course: "Excel Básico",
        date: "22/05/2023",
        hours: "20 horas",
        status: "valid"
    },
    {
        code: "EMC-2023-QWER-9012",
        name: "Ana Paula",
        course: "Comunicação Eficaz",
        date: "10/07/2023",
        hours: "10 horas",
        status: "revoked"
    }
];

function validateCertificate() {
    const code = document.getElementById('certificateCode').value.trim();
    const resultContainer = document.getElementById('resultContainer');
    const resultTitle = document.getElementById('resultTitle');
    const certificateDetails = document.getElementById('certificateDetails');
    
    if (!code) {
        alert("Por favor, insira o código do certificado.");
        return;
    }
    
    // Busca o certificado no banco de dados
    const certificate = certificateDatabase.find(cert => cert.code === code);
    
    if (certificate) {
        if (certificate.status === "valid") {
            resultContainer.className = "result-container valid-certificate";
            resultTitle.textContent = "Certificado Válido";
            certificateDetails.innerHTML = `
                <div class="info-item">
                    <span class="info-label">Nome:</span>
                    <span>${certificate.name}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Curso:</span>
                    <span>${certificate.course}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Data de Emissão:</span>
                    <span>${certificate.date}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Carga Horária:</span>
                    <span>${certificate.hours}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Código:</span>
                    <span>${certificate.code}</span>
                </div>
            `;
        } else {
            resultContainer.className = "result-container invalid-certificate";
            resultTitle.textContent = "Certificado Inválido";
            certificateDetails.innerHTML = `
                <p>Este certificado foi revogado e não é mais válido.</p>
                <div class="info-item">
                    <span class="info-label">Motivo:</span>
                    <span>Cancelamento pelo emissor</span>
                </div>
            `;
        }
    } else {
        resultContainer.className = "result-container invalid-certificate";
        resultTitle.textContent = "Certificado Não Encontrado";
        certificateDetails.innerHTML = `
            <p>Nenhum certificado foi encontrado com o código informado.</p>
            <p>Por favor, verifique o código e tente novamente.</p>
        `;
    }
    
    resultContainer.style.display = "block";
    
    // Rolar até o resultado
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}