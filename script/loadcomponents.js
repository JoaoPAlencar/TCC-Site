(()=>{
    //Adquire o elemento do Footer e Header a ser modificado
    const menu = document.getElementById("menu");
    const footer = document.querySelector("#footer");

    //Altera o HTML interno do Header
    menu.innerHTML = `
        <img src = "ressource/Test-logo.png"/>
        <nav>
            <ul>
                <li><a href = "index.html" class="index">Inicio</a></li>
                <li><a href = "news.html" class="news">Noticias</a></li>
                <li><a target="_blank" href = "https://store.steampowered.com/?l=portuguese" class="buy">Comprar</a></li>
                <li><a href = "about.html" class="about">Sobre</a></li>
                <li><a href = "credits.html" class="credits">Créditos</a></li>
            </ul>
        </nav>
    `;

    //Altera o HTML interno do Footer
    footer.innerHTML = `
        <div class ="footer">
            <div class="footer_element">
                <img src="ressource/Logotipo_Empresa.png">
            </div>

            <div class="footer_element">
                <a href="">Termos de uso</a>
                <!--<a href="">Sobre nós</a>-->
            </div>
            
            <div class="footer_element">
                <ul>
                    <li><h4>Contate-nós</h4></a></li>
                    <li><a href=""><img src="ressource/Twitter_logo.png">Twitter</a></li>
                    <li><a href=""><img src="ressource/Instagram_logo.png">Instagram</a></li>
                    <li><a href=""><img src="ressource/Discord_logo.png">Discord</a></li>
                </ul>
            </div>
        </div>
    `;
})();