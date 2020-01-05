import React, { Component } from 'react';
/* CSS */
import '../public/style.css';

class Home extends Component {
    componentDidMount(){
        document.title = "Arthur BL - Desenvolvedor Web";
      }
    projetos() {
        window.open("https://dribbble.com/arthurbarros4", "_blank");
    }
    curriculo() {
  
        window.open("https://drive.google.com/open?id=1WnnE4JLl_x1q-Vh99yDqlkCd3UByJP7B", "_blank")
     }
     contato() {
         window.location.href = "#footer";
     }

     whatsapp(){
        window.open("https://api.whatsapp.com/send?phone=5588992272118&text=Ol%C3%A1!%20Tenho%20uma%20ideia.", "_blank")
    }
    facebook(){
        window.open("https://www.facebook.com/ArthurBLSonicEffects","_blank");
    }
    linkedin(){
        window.open("https://www.linkedin.com/in/arthur-bl-703807170/","_blank");
    }

    render() {
        return (
            <div>
                <section className="navbar">
                    <div className="container">
                        <div className="menu">
                            <img alt="logo arthur bl" className="logo" src="/Assets/logo.png" />
                        </div>
                        <img alt="imagem de fundo" className="p1-fundo" src="/Assets/p1-fundo.png" />
                    </div>



                </section>
                
                <section className="content1" >
                    <div className="container" >
                        <div className="dados-content1" >
                            <h1 className="titulo-dados-content1" > Desenvolvedor </h1>
                            <h1 className="titulo-dados-content1" > Web </h1>
                            <h3 className="sobre-dados-content1" > Olá! Eu trabalho como desenvolvedor web, programador PHP e WordPress,
            na criação de sites e sistemas web. </h3>
                        </div>
                    </div>
                    <div className="container" >
                        <div >
                            <button className="btn-primary" id="btn-curriculo" onClick={this.curriculo} target="_blank">
                                <i className="fas fa-download" > </i> CURRÍCULO
                            </button>
                            <button className="btn-secundary" onClick={this.contato} >
                                <i className="fas fa-paper-plane" > </i> CONTATO 
                            </button>
                        </div>
                    </div>
                    <img alt="imagem do fundo do site" className="p2-fundo" src="/Assets/f2-fundo.png" />
                </section>

                <section className="content2" >
                    <div className="container" >
                        <div className="item-content2" > 
                            <img alt="icone de desenvolvimento front-end" className="img-item-content2" src="/Assets/front.png" />
                            <h1 className="titulo-item-content2" > Dev. Front - End </h1>
                            <h3 className="sub-titulo-item-content2" > CSS - Sass - Bootstrap - ReactJS </h3>
                        </div>
                        <div className="item-content2" >
                            <img alt="icone de design UI e UX" className="img-item-content2" src="/Assets/ux-design.png"/>
                            <h1 className="titulo-item-content2" > Design UI & UX </h1>
                            <h3 className="sub-titulo-item-content2" > Photoshop - Illustrator - XD </h3> 
                        </div>
                            <div className="item-content2">
                                <img alt="icone de linguagens de programação" className="img-item-content2" src="/Assets/html-coding.png" />
                                <h1 className="titulo-item-content2" > Programador </h1>
                                <h3 className="sub-titulo-item-content2" > PHP - JavaScript </h3>
                            </div>
                        </div> 
                    </section> 

                    <section className="content3">
                    <div className="container">
                        <div className="dados">
                            <h1 className="titulo-mim-content3">Sobre mim :)</h1>
                            <h2 className="subtitulo-content3">Conheça quem você está contratando.</h2>
                            <h3 className="sobre-mim-content3">
                            Meu nome é Arthur sou Cearense da cidade de Barbalha, 
                            tenho 24 anos, sou casado e estudante de 
                            Análise e desenvolvimento de sistemas pela faculdade Pitágoras. 
                            Sou um grande amante da computação e hoje destino meus estudos e 
                            trabalhos em desenvolvimento web com foco em Front-end e Design de interfaces. 
                            Baixe meu currículo e conheça mais sobre mim.
                            </h3>
                        </div>
                        <div className="img-content-3">
                            <img alt="Imagem de pessoas desenvolvendo um projeto" className="img-content3" src="/Assets/imagemcontent3.png" />
                        </div>
                    </div>
                </section>

                
                <section className="Content4">
                    <div className="container">
                        <h1 className="titulo-content4">Projetos</h1>
                        <h3 className="sub-titulo-content4">Conheça alguns dos meus trabalhos recém lançados</h3>
                    </div>
                    <div className="imagens-projetos">
                        <img alt="imagem de um projeto" className="img-projeto" src="/Assets/samsung.jpg" />
                        <img alt="imagem de um projeto" className="img-projeto" src="/Assets/sparito.jpg" />
                    </div>
                    <div className="container-btn-content4">
                        <button onClick={this.projetos} className="btn-primary-content4"><i className="fab fa-dribbble" /> Mais Projetos</button>
                    </div>
                </section>
                <section className="footer" id="footer">
                    <div className="container">
                        <h1 className="titulo-contato">Contato</h1>
                        <h3 className="sub-titulo-contato">Aqui você pode entrar em contato  comigo </h3>
                        <div className="container-icones-contato">
                            <img onClick={this.whatsapp} alt="imagem do whatsapp" className="icones-redes" src="/Assets/whatsapp.png" />
                            <img onClick={this.facebook} alt="imagem do facebook" className="icones-redes" src="/Assets/facebook.png" />
                            <img onClick={this.linkedin}alt="imagem do linkedIn" className="icones-redes" src="/Assets/linkedin.png" />
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default Home;