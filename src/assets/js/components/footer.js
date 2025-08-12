// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
  var div = document.createElement("div");
  div.innerHTML = `
    <!-- Rodapé -->
    <footer class="footer bg-dark text-white pt-5">
        <div class="container">
            <div class="row gy-4">

                <!-- Logo e descrição -->
                <div class="col-lg-4">
                    <img src="./src/assets/img/wg-news-logo-white.png" alt="WG News" class="footer-logo mb-3"
                        style="max-width: 180px;">
                    <p class="small">
                        Jornalismo independente e de qualidade para a região do Alto Tietê.
                        Notícias que importam, reportagens que fazem a diferença.
                    </p>
                    <div class="social-links mt-3">
                        <a href="#" class="me-2"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="me-2"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="me-2"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="me-2"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                <!-- Editorias -->
                <div class="col-lg-3 col-md-6">
                    <h5 class="fw-bold mb-3">Editorias</h5>
                    <div class="row">
                        <div class="col-6">
                            <ul class="list-unstyled footer-links">
                                <li><a href="politica.html">Política</a></li>
                                <li><a href="economia.html">Economia</a></li>
                                <li><a href="educacao.html">Educação</a></li>
                                <li><a href="saude.html">Saúde</a></li>
                                <li><a href="seguranca.html">Segurança</a></li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="list-unstyled footer-links">
                                <li><a href="esportes.html">Esportes</a></li>
                                <li><a href="tecnologia.html">Tecnologia</a></li>
                                <li><a href="cultura.html">Cultura</a></li>
                                <li><a href="meio-ambiente.html">Meio Ambiente</a></li>
                                <li><a href="clima.html">Clima</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Links Rápidos -->
                <div class="col-lg-2 col-md-6">
                    <h5 class="fw-bold mb-3">Links Rápidos</h5>
                    <ul class="list-unstyled footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="eleicoes.html">Eleições</a></li>
                        <li><a href="#">Anuncie</a></li>
                        <li><a href="#">Termos de Uso</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                    </ul>
                </div>

                <!-- Contato -->
                <div class="col-lg-3">
                    <h5 class="fw-bold mb-3">Contato</h5>
                    <ul class="list-unstyled footer-contact small">
                        <li><i class="fas fa-map-marker-alt me-2"></i> Rua Exemplo, 123 - Centro, Itaquaquecetuba/SP
                        </li>
                        <li><i class="fas fa-phone me-2"></i> (11) 4002-8922</li>
                        <li><i class="fas fa-envelope me-2"></i> contato@wgnnews.com.br</li>
                    </ul>
                    <div class="footer-newsletter mt-3">
                        <h6 class="fw-bold">Receba nossas notícias</h6>
                        <form>
                            <div class="input-group">
                                <input type="email" class="form-control" placeholder="Seu e-mail"
                                    aria-label="Seu e-mail">
                                <button class="btn btn-primary" type="submit">OK</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Linha divisória -->
            <hr class="my-4 border-light">

            <!-- Créditos -->
            <div class="row align-items-center">
                <div class="col-md-6">
                    <p class="mb-0 small">&copy; 2026 WG News. Todos os direitos reservados.</p>
                </div>
                <div class="col-md-6 text-md-end small">
                    <a href="#">Termos de Uso</a> |
                    <a href="#">Política de Privacidade</a> |
                    <a href="#">Anuncie</a>
                </div>
            </div>
        </div>
    </footer>
  
          `;

  document.body.appendChild(div);
}

adicionarLoginAoDOM();
