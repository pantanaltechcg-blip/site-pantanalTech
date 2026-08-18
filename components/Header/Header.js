class Header extends HTMLElement {
    connectedCallback() {
        const isInPages = window.location.pathname.includes("/pages/");
        const assetBase = isInPages ? "../" : "";
        const homeHref = isInPages ? "../index.html" : "index.html";
        const quemSomosHref = isInPages ? "quemsomos.html" : "pages/quemsomos.html";
        const projetosHref = isInPages ? "projetos.html" : "pages/projetos.html";

        this.innerHTML = `
            <header class="cabecalho">
                <img src="${assetBase}assets/logo-pantanaltech.png" class="logo" alt="Logo">

                <nav class="menu">
                    <a href="${homeHref}" class="menu-link">Home</a>
                    <a href="${quemSomosHref}" class="menu-link">Quem Somos</a>
                    <a href="${projetosHref}" class="menu-link">Projetos</a>

                    <a class="menu-btn" href="https://mail.google.com/mail/?view=cm&fs=1&to=pantanaltech.cg@ifms.edu.br&su=Quero%20começar%20um%20projeto&body=Olá,%20gostaria%20de%20iniciar%20um%20projeto%20com%20a%20Pantanal%20Tech.%20Podemos%20agendar%20uma%20reunião?"
                        target="_blank" rel="noopener noreferrer">Fale Conosco</a>
                    </nav>
            </header>
        `;
    }
}

customElements.define("header-component", Header);
