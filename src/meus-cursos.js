        function toggleDropdown() {
            document.getElementById("dropdownMenu").classList.toggle("show");
        }
        
        window.onclick = function(event) {
            if (!event.target.matches('.perfil')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }



// Banco de dados de certificados
const bancoDeCertificados = [
    {
        codigo: "EMC-2025-WEBX-4281",
        nome: "Cláudio Bernardo",
        curso: "Introdução à Programação Web",
        data: "15/03/2025",
        horas: "40 horas",
        status: "valido"
    },
    {
        codigo: "EMC-2025-DATA-7392",
        nome: "Cláudio Bernardo",
        curso: "Banco de Dados Fundamentais",
        data: "22/02/2025",
        horas: "30 horas",
        status: "valido"
    },
    {
        codigo: "EMC-2025-SECU-6153",
        nome: "Cláudio Bernardo",
        curso: "Segurança da Informação",
        data: "10/04/2025",
        horas: "35 horas",
        status: "valido"
    }
];


function emitirCertificado(codigo) {

    localStorage.setItem('certificadoAtual', codigo);
    

    const certificado = bancoDeCertificados.find(cert => cert.codigo === codigo);
    if (!certificado) {
        alert("Certificado não encontrado!");
        return false;
    }
    return true;
}


function carregarCertificado() {
    const codigo = localStorage.getItem('certificadoAtual');
    if (codigo) {
        document.getElementById('codigoCertificado').value = codigo;
        validarCertificado(); 
    }
}


function emitCertificate(code) {

    localStorage.setItem('currentCertificate', code);
    

    const certificado = certificadoDatabase.find(cert => cert.code === code);
    if (!certificado) {
        alert("Certificado não encontrado!");
        return false; 
    }
    return true;
}


function loadCertificate() {
    const codigo = localStorage.getItem('currentCertificate');
    if (codigo) {
        document.getElementById('certificateCode').value = code;
        validateCertificate(); 
    }
}