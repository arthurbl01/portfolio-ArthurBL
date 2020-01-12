import React, { Component } from 'react';
import './style.css'
class index extends Component {
    render() {
        return (
            <div>
                <section className="content2" >
                    <div className="container" >
                        <div className="item-content2" >
                            <img alt="icone de desenvolvimento front-end" className="img-item-content2" src="/static/front.png" />
                            <h1 className="titulo-item-content2" > Dev. Front - End </h1>
                            <h3 className="sub-titulo-item-content2" > CSS - Sass - Bootstrap - ReactJS </h3>
                        </div>
                        <div className="item-content2" >
                            <img alt="icone de design UI e UX" className="img-item-content2" src="/static/ux-design.png" />
                            <h1 className="titulo-item-content2" > Design UI & UX </h1>
                            <h3 className="sub-titulo-item-content2" > Photoshop - Illustrator - XD </h3>
                        </div>
                        <div className="item-content2">
                            <img alt="icone de linguagens de programação" className="img-item-content2" src="/static/html-coding.png" />
                            <h1 className="titulo-item-content2" > Dev. Back - End </h1>
                            <h3 className="sub-titulo-item-content2" > PHP - JavaScript </h3>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default index;