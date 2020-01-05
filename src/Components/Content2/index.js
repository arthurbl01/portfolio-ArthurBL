import React, { Component } from 'react';
import './style.css';
import frontend from '../../Assets/front.png';
import uiux from '../../Assets/ux-design.png';
import programador from '../../Assets/html-coding.png';
class index extends Component {
  
    render() {
        return (
            <div >
                <section className="content2" >
                    <div className="container" >
                        <div className="item-content2" > 
                            <img alt="icone de desenvolvimento front-end" className="img-item-content2" src={frontend} />
                            <h1 className="titulo-item-content2" > Dev. Front - End </h1>
                            <h3 className="sub-titulo-item-content2" > CSS - Sass - Bootstrap - ReactJS </h3>
                        </div>
                        <div className="item-content2" >
                            <img alt="icone de design UI e UX" className="img-item-content2" src={uiux}/>
                            <h1 className="titulo-item-content2" > Design UI & UX </h1>
                            <h3 className="sub-titulo-item-content2" > Photoshop - Illustrator - XD </h3> 
                        </div>
                            <div className="item-content2">
                                <img alt="icone de linguagens de programação" className="img-item-content2" src={programador} />
                                <h1 className="titulo-item-content2" > Programador </h1>
                                <h3 className="sub-titulo-item-content2" > PHP - JavaScript </h3>
                            </div>
                        </div> 
                    </section> 
                    <a id="subirTopo"> Topo </a>
            </div>
                );
            }
        }
        
export default index;