
        const nomes = ["João Silva", "Maria Oliveira", "Carlos Souza", "Ana Pereira", "Pedro Costa", 
                      "Lucia Ferreira", "Marcos Santos", "Juliana Lima", "Fernando Rocha", "Patricia Almeida"];
        const sobrenomes = ["Silva", "Oliveira", "Souza", "Pereira", "Costa", "Ferreira", "Santos", "Lima", "Rocha", "Almeida"];
        const dominios = ["@gmail.com", "@hotmail.com", "@outlook.com", "@yahoo.com", "@emcweb.com"];
        const tiposUsuario = ["aluno", "professor", "admin"];
        const statusUsuario = ["ativo", "inativo"];


        function gerarUsuarioAleatorio(id) {
            const nome = nomes[Math.floor(Math.random() * nomes.length)];
            const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
            const nomeCompleto = `${nome} ${sobrenome}`;
            const email = `${nome.toLowerCase().replace(/\s/g, '')}.${sobrenome.toLowerCase()}${dominios[Math.floor(Math.random() * dominios.length)]}`;
            const tipo = tiposUsuario[Math.floor(Math.random() * tiposUsuario.length)];
            const status = statusUsuario[Math.floor(Math.random() * statusUsuario.length)];
            
            return {
                id,
                nome: nomeCompleto,
                email,
                tipo,
                status
            };
        }

  
        function renderizarTabelaUsuarios(usuarios) {
            const tabela = document.getElementById('tabelaUsuarios');
            tabela.innerHTML = '';
            
            usuarios.forEach(usuario => {
                const linha = document.createElement('tr');
                
                linha.innerHTML = `
                    <td>${usuario.id}</td>
                    <td>${usuario.nome}</td>
                    <td>${usuario.email}</td>
                    <td>${formatarTipoUsuario(usuario.tipo)}</td>
                    <td><span class="status-${usuario.status}">${formatarStatus(usuario.status)}</span></td>
                    <td>
                        <button class="btn-icon" onclick="editarUsuario(${usuario.id})"><i class="fas fa-edit"></i></button>
                        <button class="btn-icon" onclick="excluirUsuario(${usuario.id})"><i class="fas fa-trash-alt"></i></button>
                    </td>
                `;
                
                tabela.appendChild(linha);
            });
        }


        function formatarTipoUsuario(tipo) {
            const tipos = {
                'aluno': 'Aluno',
                'professor': 'Professor',
                'admin': 'Administrador'
            };
            return tipos[tipo] || tipo;
        }

        function formatarStatus(status) {
            return status === 'ativo' ? 'Ativo' : 'Inativo';
        }

  
        function editarUsuario(id) {
            alert(`Editar usuário com ID: ${id}`);

        }

        function excluirUsuario(id) {
            if (confirm(`Tem certeza que deseja excluir o usuário com ID: ${id}?`)) {
                usuarios = usuarios.filter(usuario => usuario.id !== id);
                renderizarTabelaUsuarios(usuarios);
                alert('Usuário excluído com sucesso!');
            }
        }


        let usuarios = [];
        for (let i = 1; i <= 10; i++) {
            usuarios.push(gerarUsuarioAleatorio(i));
        }

    
        document.getElementById('filtroTipoUsuario').addEventListener('change', filtrarUsuarios);
        document.getElementById('buscaUsuario').addEventListener('input', filtrarUsuarios);

        function filtrarUsuarios() {
            const filtroTipo = document.getElementById('filtroTipoUsuario').value;
            const termoBusca = document.getElementById('buscaUsuario').value.toLowerCase();
            
            let usuariosFiltrados = usuarios;
            
            if (filtroTipo !== 'todos') {
                usuariosFiltrados = usuariosFiltrados.filter(usuario => usuario.tipo === filtroTipo);
            }
            
            if (termoBusca) {
                usuariosFiltrados = usuariosFiltrados.filter(usuario => 
                    usuario.nome.toLowerCase().includes(termoBusca) || 
                    usuario.email.toLowerCase().includes(termoBusca)
                );
            }
            
            renderizarTabelaUsuarios(usuariosFiltrados);
        }


        document.getElementById('form-usuario').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const novoId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
            const novoUsuario = {
                id: novoId,
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                tipo: document.getElementById('tipo').value,
                status: document.getElementById('status').value
            };
            
            usuarios.push(novoUsuario);
            renderizarTabelaUsuarios(usuarios);
            fecharModal('novo-usuario');
            this.reset();
            
            alert('Usuário cadastrado com sucesso!');
        });

   
        renderizarTabelaUsuarios(usuarios);