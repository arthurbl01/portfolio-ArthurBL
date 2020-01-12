import React, { Component } from 'react';
import Head from 'next/head';

import Navbar from '../components/navbar/';
import Content1 from '../components/content1';
import Content2 from '../components/content2';
import Content3 from '../components/content3';
import Content4 from '../components/content4';
import Footer from '../components/footer';

class index extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Arthur BL - Desenvolvedor Web</title>
                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Arthur BL - Desenvolvedor Web" />
                    <meta property="og:description" content="Olá! Eu trabalho como desenvolvedor web, programador PHP e WordPress, na criação de sites e sistemas web." />
                    <meta property="og:site_name" content="Arthur BL" />
                    <meta property="og:image" content="/Assets/imagem-seo.jpg" />
                </Head>
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

export default index;