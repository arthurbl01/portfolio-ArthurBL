import React, { Component } from 'react';
import './style.css';
class index extends Component {
    whatsapp() {
        window.open("https://api.whatsapp.com/send?phone=5588992272118&text=Ol%C3%A1!%20Tenho%20uma%20ideia.", "_blank")
    }
    facebook() {
        window.open("https://www.facebook.com/ArthurBLSonicEffects", "_blank");
    }
    linkedin() {
        window.open("https://www.linkedin.com/in/arthur-bl-703807170/", "_blank");
    }
    render() {
        return (
            <div>
                <section className="footer" id="footer">
                    <div className="container">
                        <h1 className="titulo-contato">Contato</h1>
                        <h3 className="sub-titulo-contato">Aqui você pode entrar em contato  comigo </h3>
                        <div className="container-icones-contato">
                            <img onClick={this.whatsapp} alt="imagem do whatsapp" className="icones-redes" src="/static/whatsapp.png" />
                            <img onClick={this.facebook} alt="imagem do facebook" className="icones-redes" src="/static/facebook.png" />
                            <img onClick={this.linkedin} alt="imagem do linkedIn" className="icones-redes" src="/static/linkedin.png" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default index;