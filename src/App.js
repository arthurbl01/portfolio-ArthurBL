import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Content1 from './Components/Content1';
import Content2 from './Components/Content2';
import Content3 from './Components/Content3';
import Content4 from './Components/Content4';
import Footer from './Components/Footer';
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Content1 />
                <Content2 />
                <Content3 />
                <Content4 />
                <Footer />
            </div>
        );
    }
}

export default App;
