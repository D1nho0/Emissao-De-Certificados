function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

function fazerLogout() {

    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('token');
    

    window.location.href = 'file:///F:/p.de.certificados/index.html';
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


document.addEventListener('DOMContentLoaded', function() {
    const logoutLink = document.getElementById('logoutLink');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            fazerLogout();
        });
    }
});