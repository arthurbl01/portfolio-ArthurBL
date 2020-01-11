webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_meta_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-meta-tags */ "./node_modules/react-meta-tags/lib/index.js");
/* harmony import */ var react_meta_tags__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_meta_tags__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/style.css */ "./public/style.css");
/* harmony import */ var _public_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_style_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Arthur Barros\\Desktop\\portfolio-ArthurBL\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* CSS */



class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    document.title = "Arthur BL - Desenvolvedor Web";
  }

  projetos() {
    window.open("https://dribbble.com/arthurbarros4", "_blank");
  }

  curriculo() {
    window.open("https://drive.google.com/open?id=1WnnE4JLl_x1q-Vh99yDqlkCd3UByJP7B", "_blank");
  }

  contato() {
    window.location.href = "#footer";
  }

  whatsapp() {
    window.open("https://api.whatsapp.com/send?phone=5588992272118&text=Ol%C3%A1!%20Tenho%20uma%20ideia.", "_blank");
  }

  facebook() {
    window.open("https://www.facebook.com/ArthurBLSonicEffects", "_blank");
  }

  linkedin() {
    window.open("https://www.linkedin.com/in/arthur-bl-703807170/", "_blank");
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(react_meta_tags__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("meta", {
      property: "og:type",
      content: "website",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx("meta", {
      name: "description",
      content: "Ol\xE1! Eu trabalho como desenvolvedor web, programador PHP e WordPress, na cria\xE7\xE3o de sites e sistemas web.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image",
      content: "/Assests/imagem-seo.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), __jsx("meta", {
      property: "og:url",
      content: "https://arthurbl.netlify.com/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), __jsx("meta", {
      property: "og:site_name",
      content: "Arthur BL - Desenvolvedor Web",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })), __jsx("section", {
      className: "navbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("img", {
      alt: "logo arthur bl",
      className: "logo",
      src: "/Assets/logo.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })))), __jsx("section", {
      className: "content1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("div", {
      className: "dados-content1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("h1", {
      className: "titulo-dados-content1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, " Desenvolvedor "), __jsx("h1", {
      className: "titulo-dados-content1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, " Web "), __jsx("h3", {
      className: "sobre-dados-content1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, " Ol\xE1! Eu trabalho como desenvolvedor web, programador PHP e WordPress, na cria\xE7\xE3o de sites e sistemas web. "))), __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("button", {
      className: "btn-primary",
      id: "btn-curriculo",
      onClick: this.curriculo,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-download",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, " "), " CURR\xCDCULO"), __jsx("button", {
      className: "btn-secundary",
      onClick: this.contato,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-paper-plane",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, " "), " CONTATO"))), __jsx("img", {
      alt: "imagem do fundo do site",
      className: "p2-fundo",
      src: "/Assets/f2-fundo.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })), __jsx("section", {
      className: "content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      className: "item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("img", {
      alt: "icone de desenvolvimento front-end",
      className: "img-item-content2",
      src: "/Assets/front.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), __jsx("h1", {
      className: "titulo-item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, " Dev. Front - End "), __jsx("h3", {
      className: "sub-titulo-item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, " CSS - Sass - Bootstrap - ReactJS ")), __jsx("div", {
      className: "item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("img", {
      alt: "icone de design UI e UX",
      className: "img-item-content2",
      src: "/Assets/ux-design.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), __jsx("h1", {
      className: "titulo-item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, " Design UI & UX "), __jsx("h3", {
      className: "sub-titulo-item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, " Photoshop - Illustrator - XD ")), __jsx("div", {
      className: "item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("img", {
      alt: "icone de linguagens de programa\xE7\xE3o",
      className: "img-item-content2",
      src: "/Assets/html-coding.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), __jsx("h1", {
      className: "titulo-item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, " Dev. Back - End "), __jsx("h3", {
      className: "sub-titulo-item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, " PHP - JavaScript ")))), __jsx("section", {
      className: "content3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("div", {
      className: "dados",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("h1", {
      className: "titulo-mim-content3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Sobre mim :)"), __jsx("h2", {
      className: "subtitulo-content3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Conhe\xE7a quem voc\xEA est\xE1 contratando."), __jsx("h3", {
      className: "sobre-mim-content3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "Meu nome \xE9 Arthur sou Cearense da cidade de Barbalha, tenho 24 anos, sou casado e estudante de An\xE1lise e desenvolvimento de sistemas pela faculdade Pit\xE1goras. Sou um grande amante da computa\xE7\xE3o e hoje destino meus estudos e trabalhos em desenvolvimento web com foco em Front-end e Design de interfaces. Baixe meu curr\xEDculo e conhe\xE7a mais sobre mim.")), __jsx("div", {
      className: "img-content-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("img", {
      alt: "Imagem de pessoas desenvolvendo um projeto",
      className: "img-content3",
      src: "/Assets/imagemcontent3.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })))), __jsx("section", {
      className: "Content4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx("h1", {
      className: "titulo-content4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "Projetos"), __jsx("h3", {
      className: "sub-titulo-content4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "Conhe\xE7a alguns dos meus trabalhos rec\xE9m lan\xE7ados")), __jsx("div", {
      className: "imagens-projetos",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("img", {
      alt: "imagem de um projeto",
      className: "img-projeto",
      src: "/Assets/samsung.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }), __jsx("img", {
      alt: "imagem de um projeto",
      className: "img-projeto",
      src: "/Assets/sparito.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    })), __jsx("div", {
      className: "container-btn-content4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("button", {
      onClick: this.projetos,
      className: "btn-primary-content4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("i", {
      className: "fab fa-dribbble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }), " Mais Projetos"))), __jsx("section", {
      className: "footer",
      id: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("h1", {
      className: "titulo-contato",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "Contato"), __jsx("h3", {
      className: "sub-titulo-contato",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "Aqui voc\xEA pode entrar em contato  comigo "), __jsx("div", {
      className: "container-icones-contato",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx("img", {
      onClick: this.whatsapp,
      alt: "imagem do whatsapp",
      className: "icones-redes",
      src: "/Assets/whatsapp.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }), __jsx("img", {
      onClick: this.facebook,
      alt: "imagem do facebook",
      className: "icones-redes",
      src: "/Assets/facebook.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), __jsx("img", {
      onClick: this.linkedin,
      alt: "imagem do linkedIn",
      className: "icones-redes",
      src: "/Assets/linkedin.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.226eb7cc68f88357d667.hot-update.js.map