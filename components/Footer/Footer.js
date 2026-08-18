class Footer extends HTMLElement {
    connectedCallback() {
        const isInPages = window.location.pathname.includes("/pages/");
        const assetBase = isInPages ? "../" : "";
        const homeHref = isInPages ? "../index.html" : "index.html";
        const quemSomosHref = isInPages ? "quemsomos.html" : "pages/quemsomos.html";
        const projetosHref = isInPages ? "projetos.html" : "pages/projetos.html";

        this.innerHTML = `
            <footer class="rodape">
                <section class="rodape__container">
                    <div class="rodape__informacoes">
                        <img src="${assetBase}assets/logo-pantanaltech.jpeg" alt="Logo">

                        <span class="rodape__texto">
                            Empresa júnior de tecnologia do IFMS
                            Campo Grande. Transformamos ideias em
                            soluções digitais desde 2024.
                        </span>

                        <a href="https://www.instagram.com/pantanaltechej/"  id="instagram" target="_blank" class="rodape__link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5"/>
                                <circle cx="12" cy="12" r="4"/>
                                <circle cx="17.5" cy="6.5" r="1"/>
                            </svg>
                        </a>
                    </div>
                    
                    <div class="rodape__mapasite">
                        <h3 class="rodape__titulo">Mapa do site</h3>
                        <ul class="rodape__links">
                            <li><a href="${homeHref}" class="rodape__link">Home</a></li>
                            <li><a href="${quemSomosHref}" class="rodape__link">Quem Somos</a></li>
                            <li><a href="${projetosHref}" class="rodape__link">Projetos</a></li>
                            <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=pantanaltech.cg@ifms.edu.br&su=Quero%20começar%20um%20projeto&body=Olá,%20gostaria%20de%20iniciar%20um%20projeto%20com%20a%20Pantanal%20Tech.%20Podemos%20agendar%20uma%20reunião?"
                        target="_blank" rel="noopener noreferrer" class="rodape__link">Contato</a></li>
                        </ul>
                    </div>

                    <div class="rodape__contato">
                        <h3 class="rodape__titulo">Contato</h3>
                        <div class="contato-item">
                            <svg class="icone" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>

                            <p>Rua Taquari, 831 — Campo Grande, MS — CEP 79100-510</p>
                        </div>
                        <div class="contato-item">
                            <svg class="icone" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72l.38 2.65a2 2 0 0 1-.57 1.74L8.09 10.91a16 16 0 0 0 5 5l1.8-1.8a2 2 0 0 1 1.74-.57l2.65.38A2 2 0 0 1 22 16.92z"/>
                            </svg>

                            <p>(67) 9 9997-8805</p>
                        </div>
                        <div class="contato-item">
                            <svg class="icone" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="5" width="18" height="14" rx="2"/>
                                <path d="m3 7 9 6 9-6"/>
                            </svg>
                            <p>pantanaltech.cg@ifms.edu.br</p>
                        </div>
                    </div>
                </section>

                <section class="rodape__direitos">
                    <p class="rodape__texto">© 2024 PantanalTech. Todos os direitos reservados.</p>
                </section>
            </footer>
        `;
    }
}

customElements.define("footer-component", Footer);