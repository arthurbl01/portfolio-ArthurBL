import React, { Component } from 'react';
import './style.css';

class navbar extends Component {
    render() {
        return (
            <div>
                <section className="navbar">
                    <div className="container">
                        <div className="menu">
                            <img alt="logo arthur bl" className="logo" src="/static/logo.png" />
                        </div>
                        <img alt="imagem de fundo" className="p1-fundo" src="/static/p1-fundo.png" />
                    </div>
                </section>
            </div>
        );
    }
}

export default navbar;