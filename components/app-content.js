class AppContent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <main>
                <p>This is the main content area. It will be updated dynamically based on routing.</p>
            </main>
        `;
    }
}

customElements.define('app-content', AppContent);