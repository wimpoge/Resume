class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `

        <footer>
            <p class="text-center">Copyright &copy; 2022</p>
        </footer>
        `;
    }
}

customElements.define("foo-ter", Footer);