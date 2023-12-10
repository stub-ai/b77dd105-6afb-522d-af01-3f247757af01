class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<p>© 2022 My App</p>`;
    }
}

customElements.define('footer-component', FooterComponent);