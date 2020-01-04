import React, { Component } from 'react';
import './style.css';
import fundo1 from '../../Assets/p1-fundo.png';
import logo from '../../Assets/logo.png'
class Navbar extends Component {
    render() {
        return (
            <div>
                <section className="navbar">
                    <div className="container">
                        <div className="menu">
                            <img alt="logo arthur bl" className="logo" src={logo}/>
                        </div>
                        <img alt="imagem de fundo" className="p1-fundo" src={fundo1} />
                    </div>
                </section>
            </div>
        );
    }
}

export default Navbar;