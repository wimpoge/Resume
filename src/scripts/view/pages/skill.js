AOS.init();


class Skill extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() { 
        this.innerHTML = `     
            <div data-aos="fade-up">
                    <div class="skill" id="skill">
                        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" style="width: 100px; height: 100px;" alt="HTML" title="HTML">
                          
                            
                        </li>
                        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" style="width: 75px; height: 100px;" alt="CSS" title="CSS">
                       
                        </li>
                        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" style="width: 80px; height: 80px;" alt="Javascript" title="Javascript">
                      
                            </li>
                        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" style="width: 100px; height: 100px;" alt="Next.JS" title="Next.JS">
                       </li>
                        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/1280px-Arduino_Logo.svg.png" style="width: 100px; height:100px;" alt="Arduino" title="Arduino">
                        </li>
                    </div>
            <div>          
            `
    }
}

customElements.define("the-skill", Skill);