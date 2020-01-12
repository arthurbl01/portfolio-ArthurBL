import React, { Component } from 'react';
import './style.css';
class index extends Component {
    projetos() {
        window.open("https://dribbble.com/arthurbarros4", "_blank");
    }
    render() {
        return (
            <div>
                <section className="Content4">
                    <div className="container">
                        <h1 className="titulo-content4">Projetos</h1>
                        <h3 className="sub-titulo-content4">Conheça alguns dos meus trabalhos recém lançados</h3>
                    </div>
                    <div className="imagens-projetos">
                        <img alt="imagem de um projeto" className="img-projeto" src="/static/samsung.jpg" />
                        <img alt="imagem de um projeto" className="img-projeto" src="/static/sparito.jpg" />
                    </div>
                    <div className="container-btn-content4">
                        <button onClick={this.projetos} className="btn-primary-content4"><i className="fab fa-dribbble" /> Mais Projetos</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default index;