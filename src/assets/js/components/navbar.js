// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement("div");
    div.innerHTML = `
    <!-- Barra de Navegação Modernizada -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div class="container">
            <!-- Logo com acessibilidade -->
            <a class="navbar-brand d-flex align-items-center" href="#" aria-label="WG News - Página Inicial">
                <img src="./src/assets/img/wg-news-logo.png.png" alt="Logotipo WG News" class="logo-navbar-img me-2"
                    style="width: 100px; height: auto; max-width: 100%;">
            </a>

            <!-- Botão mobile com ícone melhorado -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Conteúdo da navbar -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <!-- Links de navegação -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">
                            <i class="fas fa-home me-1"></i> Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="politica.html">
                            <i class="fas fa-landmark me-1"></i> Política
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="economia.html">
                            <i class="fas fa-chart-line me-1"></i> Economia
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cultura.html">
                            <i class="fas fa-paint-brush me-1"></i> Cultura
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="esportes.html">
                            <i class="fas fa-running me-1"></i> Esportes
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="tecnologia.html">
                            <i class="fas fa-microchip me-1"></i> Tecnologia
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="saude.html">
                            <i class="fas fa-heartbeat me-1"></i> Saúde
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="educacao.html">
                            <i class="fas fa-graduation-cap me-1"></i> Educação
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="seguranca.html">
                            <i class="fas fa-shield-alt me-1"></i> Segurança
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="meio-ambiente.html">
                            <i class="fas fa-leaf me-1"></i> Meio Ambiente
                        </a>
                    </li>
                </ul>

                <!-- Barra de pesquisa melhorada -->
                <form class="d-flex" role="search">
                    <div class="input-group">
                        <input class="form-control border-end-0" type="search" placeholder="Buscar notícias..."
                            aria-label="Buscar notícias">
                        <button class="btn btn-light border-start-0" type="submit" aria-label="Pesquisar">
                            <i class="fas fa-search text-primary"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </nav>

        `;
  
    document.body.appendChild(div);
  }
  
  adicionarLoginAoDOM();