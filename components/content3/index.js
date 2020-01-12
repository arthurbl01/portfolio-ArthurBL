import React, { Component } from 'react';
import './style.css';
class index extends Component {
    render() {
        return (
            <div>
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
                            <img alt="Imagem de pessoas desenvolvendo um projeto" className="img-content3" src="/static/imagemcontent3.png" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default index;