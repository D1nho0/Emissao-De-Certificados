document.addEventListener('DOMContentLoaded', function() {
    const recoveryForm = document.getElementById('recoveryForm');
    const emailInput = document.getElementById('recovery-email');
    const submitButton = document.querySelector('.login-button');

    // Efeito hover no botão (consistente com outras telas)
    submitButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    
    submitButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });

    // Validação do formulário
    recoveryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset do estilo
        emailInput.style.borderColor = '#ddd';
        
        // Validação básica
        if (!emailInput.value) {
            emailInput.style.borderColor = 'red';
            alert('Por favor, insira seu email cadastrado');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailInput.style.borderColor = 'red';
            alert('Por favor, insira um email válido');
            return;
        }
        
        // Mostrar loading
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        
        // Simular envio (substitua por AJAX real)
        setTimeout(function() {
            alert('Link de recuperação enviado para ' + emailInput.value + '\nVerifique sua caixa de entrada.');
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Link';
            
            // Redirecionamento opcional
            // window.location.href = 'login.html';
        }, 2000);
    });
    
    // Validação em tempo real
    emailInput.addEventListener('input', function() {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {
            this.style.borderColor = '#1a73e8';
        }
    });
});