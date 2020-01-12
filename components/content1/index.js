import React, { Component } from 'react';
import './style.css';

class index extends Component {
    curriculo() {

        window.open("https://drive.google.com/open?id=1GRLCWfd6TioEL1JBYd2pB15b8HgGwljT", "_blank")
    }
    contato() {
        window.location.href = "#footer";
    }
     
    render() {
        return (
          <div>
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
                    <img alt="imagem do fundo do site" className="p2-fundo" src="/static/f2-fundo.png" />
                </section>
          </div>  
        );
    }
}

export default index;