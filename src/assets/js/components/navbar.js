// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
  var div = document.createElement("div");
  div.innerHTML = `
    <!-- Barra de Navegação Modernizada - WG News -->
<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top" aria-label="Navegação principal">
    <div class="container-fluid container-lg">
        <!-- Logo com acessibilidade e dark mode -->
    <a class="navbar-brand d-flex align-items-center" href="index.html" aria-label="WG News - Página Inicial">
        <picture>
            <!-- Logo padrão -->
            <img src="./src/assets/img/wg-news-logo.png" alt="WG News - Notícias em tempo real" 
                 class="logo-navbar-img me-2" loading="lazy" style="width: 100px; height: 120px">
        </picture>
    </a>

        <!-- Botão mobile com ícone animado -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMainContent"
                aria-controls="navbarMainContent" aria-expanded="false" aria-label="Alternar navegação">
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-text ms-2 d-none d-sm-inline">Menu</span>
        </button>

        <!-- Conteúdo principal da navbar -->
        <div class="collapse navbar-collapse" id="navbarMainContent">
            <!-- Links de navegação agrupados por categorias -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">
                        <i class="fas fa-home fa-fw me-1"></i> 
                        <span class="nav-link-text">Home</span>
                        <span class="visually-hidden">(página atual)</span>
                    </a>
                </li>
                
                <!-- Grupo: Política e Economia -->
                <li class="nav-item dropdown dropdown-hover">
                    <a class="nav-link dropdown-toggle" href="#" id="politicaEconomiaDropdown" role="button" 
                       aria-expanded="false" data-bs-toggle="dropdown">
                        <i class="fas fa-landmark fa-fw me-1"></i>
                        <span class="nav-link-text">Política</span>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="politicaEconomiaDropdown">
                        <li><a class="dropdown-item" href="politica.html">
                            <i class="fas fa-landmark fa-fw me-2"></i>Política Nacional
                        </a></li>
                        <li><a class="dropdown-item" href="economia.html">
                            <i class="fas fa-chart-line fa-fw me-2"></i>Economia
                        </a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="eleicoes.html">
                            <i class="fas fa-vote-yea fa-fw me-2"></i>Eleições
                        </a></li>
                    </ul>
                </li>
                
                <!-- Grupo: Sociedade -->
                <li class="nav-item dropdown dropdown-hover">
                    <a class="nav-link dropdown-toggle" href="#" id="sociedadeDropdown" role="button" 
                       aria-expanded="false" data-bs-toggle="dropdown">
                        <i class="fas fa-users fa-fw me-1"></i>
                        <span class="nav-link-text">Sociedade</span>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="sociedadeDropdown">
                        <li><a class="dropdown-item" href="educacao.html">
                            <i class="fas fa-graduation-cap fa-fw me-2"></i>Educação
                        </a></li>
                        <li><a class="dropdown-item" href="saude.html">
                            <i class="fas fa-heartbeat fa-fw me-2"></i>Saúde
                        </a></li>
                        <li><a class="dropdown-item" href="seguranca.html">
                            <i class="fas fa-shield-alt fa-fw me-2"></i>Segurança
                        </a></li>
                    </ul>
                </li>
                
                <!-- Itens individuais importantes -->
                <li class="nav-item">
                    <a class="nav-link" href="esportes.html">
                        <i class="fas fa-running fa-fw me-1"></i>
                        <span class="nav-link-text">Esportes</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="tecnologia.html">
                        <i class="fas fa-microchip fa-fw me-1"></i>
                        <span class="nav-link-text">Tecnologia</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="cultura.html">
                        <i class="fas fa-paint-brush fa-fw me-1"></i>
                        <span class="nav-link-text">Cultura</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="meio-ambiente.html">
                        <i class="fas fa-leaf fa-fw me-1"></i>
                        <span class="nav-link-text">Meio Ambiente</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="clima.html">
                        <i class="fas fa-cloud-sun fa-fw me-1"></i>
                        <span class="nav-link-text">Clima</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

        `;

  document.body.appendChild(div);
}

adicionarLoginAoDOM();
