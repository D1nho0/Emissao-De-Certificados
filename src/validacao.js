
const bancoDeCertificados = [
    {
        codigo: "EMC-2025-SECU-6153",
        nome: "Cláudio Bernardo",
        curso: "Segurança da Informação",
        data: "15/03/2023",
        horas: "12 horas",
        status: "valido"
    },
    {
        codigo: "EMC-2025-DATA-7392",
        nome: "Cláudio Bernardo",
        curso: "Banco de Dados Fundamentais",
        data: "22/05/2023",
        horas: "20 horas",
        status: "valido"
    },
    {
        codigo: "EMC-2025-WEBX-4281",
        nome: "Cláudio Bernardo",
        curso: "Introdução à Programação Web",
        data: "15/03/2025",
        horas: "40 horas",
        status: "valido"
    }
];


let certificadoAtual = null;

function validarCertificado() {
    const codigo = document.getElementById('codigoCertificado').value.trim();
    const containerResultado = document.getElementById('containerResultado');
    const tituloResultado = document.getElementById('tituloResultado');
    const detalhesCertificado = document.getElementById('detalhesCertificado');
    const btnGerarCertificado = document.getElementById('btnGerarCertificado');
    
    if (!codigo) {
        alert("Por favor, insira o código do certificado.");
        return;
    }
    
    if (codigo.startsWith("EMC-")) {
        certificadoAtual = bancoDeCertificados.find(cert => cert.codigo === codigo);
        
        if (certificadoAtual) {
            containerResultado.className = "result-container valid-certificate";
            tituloResultado.textContent = "Certificado Válido - Emitido para Você";
            detalhesCertificado.innerHTML = `
                <div class="info-item">
                    <span class="info-label">Nome:</span>
                    <span>${certificadoAtual.nome}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Curso:</span>
                    <span>${certificadoAtual.curso}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Data de Conclusão:</span>
                    <span>${certificadoAtual.data}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Carga Horária:</span>
                    <span>${certificadoAtual.horas}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Código:</span>
                    <span class="codigo-certificado">${certificadoAtual.codigo}</span>
                </div>
            `;
            
            // Mostrar botão de download apenas para certificados válidos
            btnGerarCertificado.style.display = 'block';
            btnGerarCertificado.onclick = gerarCertificado;
        } else {
            mostrarCertificadoInvalido("Código de certificado não reconhecido");
            btnGerarCertificado.style.display = 'none';
        }
    } else {
        mostrarCertificadoInvalido("Formato de código inválido");
        btnGerarCertificado.style.display = 'none';
    }
    
    containerResultado.style.display = "block";
    containerResultado.scrollIntoView({ behavior: 'smooth' });
}

async function gerarCertificado() {
    if (!certificadoAtual) return;

    const { PDFDocument, rgb, StandardFonts } = PDFLib;

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]); 

    // Fundo do certificado
    const corFundo = rgb(1, 0.988, 0.937); 
    page.drawRectangle({
        x: 0,
        y: 0,
        width: 600,
        height: 400,
        color: corFundo,
        opacity: 1,
        borderWidth: 0,
    });

    // Fontes
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Cabeçalho
    page.drawText('CERTIFICADO', {
        x: 180,
        y: 320,
        size: 30,
        font: fontBold,
        color: rgb(0, 0.2, 0.4), 
    });

    // Texto do certificado
    page.drawText('Conferimos que', {
        x: 220,
        y: 270,
        size: 14,
        font: fontRegular,
        color: rgb(0, 0, 0), 
    });

    page.drawText(certificadoAtual.nome, {
        x: 220,
        y: 240,
        size: 18,
        font: fontBold,
        color: rgb(0, 0.2, 0.4),
    });

    page.drawText('concluiu com êxito o curso de', {
        x: 170,
        y: 210,
        size: 14,
        font: fontRegular,
        color: rgb(0, 0, 0), 
    });

    page.drawText(certificadoAtual.curso, {
        x: 220,
        y: 180,
        size: 16,
        font: fontBold,
        color: rgb(0, 0.2, 0.4),
    });

    page.drawText(`Carga horária: ${certificadoAtual.horas}`, {
        x: 220,
        y: 150,
        size: 12,
        font: fontRegular,
        color: rgb(0.3, 0.3, 0.3),
    });

    page.drawText(`Data de conclusão: ${certificadoAtual.data}`, {
        x: 220,
        y: 130,
        size: 12,
        font: fontRegular,
        color: rgb(0.3, 0.3, 0.3),
    });

    page.drawText(`Código do certificado: ${certificadoAtual.codigo}`, {
        x: 180,
        y: 100,
        size: 10,
        font: fontRegular,
        color: rgb(0.5, 0.5, 0.5),
    });

    // Rodapé
    page.drawText('EMCWeb - Educação e Tecnologia', {
        x: 180,
        y: 50,
        size: 12,
        font: fontBold,
        color: rgb(0, 0.2, 0.4),
    });

    // Gerar e baixar o PDF
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    saveAs(blob, `Certificado_${certificadoAtual.nome.replace(/\s+/g, '_')}_${certificadoAtual.curso.replace(/\s+/g, '_')}.pdf`);
}