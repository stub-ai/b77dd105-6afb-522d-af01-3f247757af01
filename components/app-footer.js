class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>© 2022 My App</p>
            </footer>
        `;
    }
}

customElements.define('app-footer', AppFooter);