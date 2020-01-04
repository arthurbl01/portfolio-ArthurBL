import React, { Component } from 'react';
import './style.css';
import projeto1 from '../../Assets/samsung.jpg';
import projeto2 from '../../Assets/sparito.jpg';
class Content4 extends Component {
    projetos(){
        window.location.href = ('https://dribbble.com/arthurbarros4');
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
                        <img alt="imagem de um projeto" className="img-projeto" src={projeto1} />
                        <img alt="imagem de um projeto" className="img-projeto" src={projeto2} />
                    </div>
                    <div className="container-btn-content4">
                        <button onClick={this.projetos} className="btn-primary-content4"><i className="fab fa-dribbble"/> Mais Projetos</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Content4;