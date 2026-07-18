class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="cabecalho">
                <img src="../../assets/logo-pantanaltech.jpeg" class="logo" alt="Logo">

                <nav class="menu">
                    <a href="#" class="menu-link">Home</a>
                    <a href="#" class="menu-link">Quem Somos</a>
                    <a href="#" class="menu-link">Serviços</a>
                    <a href="#" class="menu-link">Projetos</a>

                    <button class="menu-btn">Fale Conosco</button>
                    </nav>
            </header>
        `;
    }
}

customElements.define("header-component", Header);
