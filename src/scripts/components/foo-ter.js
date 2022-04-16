class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `

        <footer>
            <p class="text-center">Copyright &copy; 2020</p>
        </footer>
        `;
    }
}

customElements.define("foo-ter", Footer);