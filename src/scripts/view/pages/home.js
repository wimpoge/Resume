import foto from "../../../styles/home.css";

AOS.init();

class Home extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() { 
        this.innerHTML = `   
        
        <div class="about-me">
            <div class="say-hi" data-aos="fade-right">
                <h2>Hi, Saya Muhamad Rafli</h2>
                <p>Web Developer</p>
                <p>Seorang yang sedikit menguasai bidang teknologi seperti koding, desain dan jaringan.</p>

                <div class="container">
                    <div class="row box">
                        <div class="col">
                        <p class="bi bi-person"> 22</p> 
                        <p class="bi bi-phone"> 081291584407</p> 
                        <p class="bi bi-geo-alt"> Depok, Indonesia</p> 
                        </div>
                        <div class="col">
                        <p class="bi bi-envelope"> muhamad.rafli.32e@gmail.com</p> 
                        <p class="bi bi-instagram"> pli.__</p> 
                        <p class="bi bi-linkedin"> www.linkedin.com/in/muhamad-rafli-80a3491b9/</p> 
                        </div>
                    </div>
                    <button><a href="../../../public/Profile.png" download>Download CV</a></button>
                </div>
            </div>

                <div class = "foto" data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500">
                </div>
        </div>
        `
}
}
customElements.define("ho-me", Home);