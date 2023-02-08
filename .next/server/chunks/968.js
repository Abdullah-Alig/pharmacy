"use strict";
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 5968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$R": () => (/* binding */ feedbackTwoActive),
/* harmony export */   "GZ": () => (/* binding */ productActive),
/* harmony export */   "M4": () => (/* binding */ clientLogo),
/* harmony export */   "dL": () => (/* binding */ productActiveTwo),
/* harmony export */   "zk": () => (/* binding */ newsSlider)
/* harmony export */ });
/* unused harmony export categoryActive */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Arrow = ({ arrowCls , onClick , icon  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: arrowCls,
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: icon
        })
    });
};
const productActive = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, 
    ]
};
const clientLogo = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2
            }
        }, 
    ]
};
const categoryActive = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    speed: 1000,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        arrowCls: "slider-prev slick-arrow",
        icon: "fas fa-chevron-left"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        arrowCls: "slider-next slick-arrow",
        icon: "fas fa-chevron-right"
    }),
    focusOnSelect: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, 
    ]
};
const productActiveTwo = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, 
    ]
};
const feedbackTwoActive = {
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    dots: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                variableWidth: false
            }
        }, 
    ]
};
const newsSlider = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                variableWidth: false
            }
        }, 
    ]
};


/***/ })

};
;