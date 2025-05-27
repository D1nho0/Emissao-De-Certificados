        function toggleDropdown() {
            document.getElementById("dropdownMenu").classList.toggle("show");
        }
        
        // Fechar o dropdown se clicar fora dele
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
