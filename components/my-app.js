class MyApp extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <app-header></app-header>
            <app-content></app-content>
            <app-footer></app-footer>
        `;
    }
}

customElements.define('my-app', MyApp);