class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1>Welcome to My App</h1>
            </header>
        `;
    }
}

customElements.define('app-header', AppHeader);