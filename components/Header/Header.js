class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="cabecalho">
                <img src="../assets/logo-pantanaltech.jpeg" class="logo" alt="Logo">

                <nav class="menu">
                    <a href="index.html" class="menu-link">Home</a>
                    <a href="quemsomos.html" class="menu-link">Quem Somos</a>
                    <a href="projetos.html" class="menu-link">Projetos</a>

                    <a class="menu-btn" href="https://mail.google.com/mail/?view=cm&fs=1&to=pantanaltech.cg@ifms.edu.br&su=Quero%20começar%20um%20projeto&body=Olá,%20gostaria%20de%20iniciar%20um%20projeto%20com%20a%20Pantanal%20Tech.%20Podemos%20agendar%20uma%20reunião?"
                        target="_blank" rel="noopener noreferrer">Fale Conosco</a>
                    </nav>
            </header>
        `;
    }
}

customElements.define("header-component", Header);
