(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CArthur%20Barros%5CDesktop%5Cprojeto%5Cpages%5Cindex.js!./":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CArthur%20Barros%5CDesktop%5Cprojeto%5Cpages%5Cindex.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

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
/* harmony import */ var _public_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/style.css */ "./public/style.css");
/* harmony import */ var _public_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Arthur Barros\\Desktop\\projeto\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* CSS */



class index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  projetos() {
    window.open("https://dribbble.com/arthurbarros4", "_blank");
  }

  curriculo() {
    window.open("https://drive.google.com/open?id=1uJBSaCONVA-P0TsRnWk9ufdgYSQnuA00", "_blank");
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
        lineNumber: 30
      },
      __self: this
    }, __jsx("section", {
      className: "navbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("div", {
      className: "menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("img", {
      alt: "logo arthur bl",
      className: "logo",
      src: "/Assets/logo.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), __jsx("img", {
      alt: "imagem de fundo",
      className: "p1-fundo",
      src: "/Assets/p1-fundo.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }))), __jsx("section", {
      className: "content1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("div", {
      className: "dados-content1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("h1", {
      className: "titulo-dados-content1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, " Desenvolvedor "), __jsx("h1", {
      className: "titulo-dados-content1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, " Web "), __jsx("h3", {
      className: "sobre-dados-content1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, " Ol\xE1! Eu trabalho como desenvolvedor web, programador PHP e WordPress, na cria\xE7\xE3o de sites e sistemas web. "))), __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("button", {
      className: "btn-primary",
      id: "btn-curriculo",
      onClick: this.curriculo,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-download",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, " "), " CURR\xCDCULO"), __jsx("button", {
      className: "btn-secundary",
      onClick: this.contato,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-paper-plane",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, " "), " CONTATO"))), __jsx("img", {
      alt: "imagem do fundo do site",
      className: "p2-fundo",
      src: "/Assets/f2-fundo.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), __jsx("section", {
      className: "content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("img", {
      alt: "icone de desenvolvimento front-end",
      className: "img-item-content2",
      src: "/Assets/front.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), __jsx("h1", {
      className: "titulo-item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, " Dev. Front - End "), __jsx("h3", {
      className: "sub-titulo-item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, " CSS - Sass - Bootstrap - ReactJS ")), __jsx("div", {
      className: "item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("img", {
      alt: "icone de design UI e UX",
      className: "img-item-content2",
      src: "/Assets/ux-design.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), __jsx("h1", {
      className: "titulo-item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, " Design UI & UX "), __jsx("h3", {
      className: "sub-titulo-item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, " Photoshop - Illustrator - XD ")), __jsx("div", {
      className: "item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("img", {
      alt: "icone de linguagens de programa\xE7\xE3o",
      className: "img-item-content2",
      src: "/Assets/html-coding.png",
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
    }, " Programador "), __jsx("h3", {
      className: "sub-titulo-item-content2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, " PHP - JavaScript ")))), __jsx("section", {
      className: "content3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("div", {
      className: "dados",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("h1", {
      className: "titulo-mim-content3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Sobre mim :)"), __jsx("h2", {
      className: "subtitulo-content3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Conhe\xE7a quem voc\xEA est\xE1 contratando."), __jsx("h3", {
      className: "sobre-mim-content3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Meu nome \xE9 Arthur sou Cearense da cidade de Barbalha, tenho 24 anos, sou casado e estudante de An\xE1lise e desenvolvimento de sistemas pela faculdade Pit\xE1goras. Sou um grande amante da computa\xE7\xE3o e hoje destino meus estudos e trabalhos em desenvolvimento web com foco em Front-end e Design de interfaces. Baixe meu curr\xEDculo e conhe\xE7a mais sobre mim.")), __jsx("div", {
      className: "img-content-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("img", {
      alt: "Imagem de pessoas desenvolvendo um projeto",
      className: "img-content3",
      src: "/Assets/imagemcontent3.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })))), __jsx("section", {
      className: "Content4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("h1", {
      className: "titulo-content4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "Projetos"), __jsx("h3", {
      className: "sub-titulo-content4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Conhe\xE7a alguns dos meus trabalhos rec\xE9m lan\xE7ados")), __jsx("div", {
      className: "imagens-projetos",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx("img", {
      alt: "imagem de um projeto",
      className: "img-projeto",
      src: "/Assets/samsung.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }), __jsx("img", {
      alt: "imagem de um projeto",
      className: "img-projeto",
      src: "/Assets/sparito.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    })), __jsx("div", {
      className: "container-btn-content4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx("button", {
      onClick: this.projetos,
      className: "btn-primary-content4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx("i", {
      className: "fab fa-dribbble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }), " Mais Projetos"))), __jsx("section", {
      className: "footer",
      id: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("h1", {
      className: "titulo-contato",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Contato"), __jsx("h3", {
      className: "sub-titulo-contato",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "Aqui voc\xEA pode entrar em contato  comigo "), __jsx("div", {
      className: "container-icones-contato",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("img", {
      onClick: this.whatsapp,
      alt: "imagem do whatsapp",
      className: "icones-redes",
      src: "/Assets/whatsapp.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }), __jsx("img", {
      onClick: this.facebook,
      alt: "imagem do facebook",
      className: "icones-redes",
      src: "/Assets/facebook.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }), __jsx("img", {
      onClick: this.linkedin,
      alt: "imagem do linkedIn",
      className: "icones-redes",
      src: "/Assets/linkedin.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 1:
/*!**************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CArthur%20Barros%5CDesktop%5Cprojeto%5Cpages%5Cindex.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CArthur%20Barros%5CDesktop%5Cprojeto%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CArthur%20Barros%5CDesktop%5Cprojeto%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[1,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=index.js.map