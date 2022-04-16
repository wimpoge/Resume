class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
}
    render() {
        this.innerHTML = ` 
        <nav class="fixed-top">
        <a href="#">My Portfolio</a>
        <ul>
            <li><a href="#">About Me</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#skill">Skill</a></li>
        </ul>
    </nav>
        `
    }
}

customElements.define("nav-bar", NavBar);