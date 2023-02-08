"use strict";
exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 7835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);




class PhotoGallery extends (/* unused pure expression or super */ null && (Component)) {
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 5000,
            arrows: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        };
        return /*#__PURE__*/ _jsxs(Fragment, {
            children: [
                !this.props.noHeader && /*#__PURE__*/ _jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "gallery-header mb-35",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "row align-items-end",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "col-lg-8",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "section-title mb-25",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "sub-title mb-15",
                                                children: "Photo Gallery"
                                            }),
                                            /*#__PURE__*/ _jsx("h2", {
                                                children: "Insite Photo Gallery"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "col-lg-4 text-lg-right",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "slider-arrows mb-25",
                                        children: [
                                            /*#__PURE__*/ _jsx("button", {
                                                onClick: this.previous,
                                                className: "gallery-prev slick-arrow",
                                                children: /*#__PURE__*/ _jsx("i", {
                                                    className: "fas fa-arrow-left"
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("button", {
                                                onClick: this.next,
                                                className: "gallery-next slick-arrow",
                                                children: /*#__PURE__*/ _jsx("i", {
                                                    className: "fas fa-arrow-right"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ _jsxs(Slider, {
                        ...settings,
                        ref: (c)=>this.slider = c,
                        className: "gallery-active",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "gallery-item wow fadeInUp delay-0-2s",
                                children: [
                                    /*#__PURE__*/ _jsx("img", {
                                        src: "assets/images/gellery/gallery1.jpg",
                                        alt: "Gallery"
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "gallery-over",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "content",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        children: "Organic Fruits"
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        children: "Fresh Food"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx(Link, {
                                                href: "/portfolio-details",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    className: "details-btn",
                                                    children: /*#__PURE__*/ _jsx("i", {
                                                        className: "fas fa-arrow-right"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "gallery-item big-item wow fadeInUp delay-0-4s",
                                children: [
                                    /*#__PURE__*/ _jsx("img", {
                                        src: "assets/images/gellery/gallery2.jpg",
                                        alt: "Gallery"
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "gallery-over",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "content",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        children: "Organic Fruits Juice"
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        children: "Fresh Food & Vegetable"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx(Link, {
                                                href: "/portfolio-details",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    className: "details-btn",
                                                    children: /*#__PURE__*/ _jsx("i", {
                                                        className: "fas fa-arrow-right"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "gallery-item wow fadeInUp delay-0-6s",
                                children: [
                                    /*#__PURE__*/ _jsx("img", {
                                        src: "assets/images/gellery/gallery3.jpg",
                                        alt: "Gallery"
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "gallery-over",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "content",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        children: "Organic Fruits"
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        children: "Vegetable"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx(Link, {
                                                href: "/portfolio-details",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    className: "details-btn",
                                                    children: /*#__PURE__*/ _jsx("i", {
                                                        className: "fas fa-arrow-right"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "gallery-item wow fadeInUp delay-0-8s",
                                children: [
                                    /*#__PURE__*/ _jsx("img", {
                                        src: "assets/images/gellery/gallery4.jpg",
                                        alt: "Gallery"
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "gallery-over",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "content",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        children: "Organic Fruits"
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        children: "Fresh Food"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx(Link, {
                                                href: "/portfolio-details",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    className: "details-btn",
                                                    children: /*#__PURE__*/ _jsx("i", {
                                                        className: "fas fa-arrow-right"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    }
};


/***/ })

};
;