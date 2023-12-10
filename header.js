class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1>Welcome to My App</h1>`;
    }
}

customElements.define('header-component', HeaderComponent);