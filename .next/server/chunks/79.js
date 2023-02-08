"use strict";
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 6774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6882);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);



const Counter = ({ end , decimals  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_1___default()), {
        end: end ? end : 100,
        duration: 3,
        decimals: decimals ? decimals : 0,
        children: ({ countUpRef , start  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default()), {
                onChange: start,
                delayedCall: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    "data-from": "0",
                    "data-to": end,
                    ref: countUpRef,
                    children: "count"
                })
            })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);


/***/ }),

/***/ 7079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-nice-select"
var external_react_nice_select_ = __webpack_require__(9051);
var external_react_nice_select_default = /*#__PURE__*/__webpack_require__.n(external_react_nice_select_);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const { 0: img , 1: setImg  } = (0,external_react_.useState)(false);
    const { 0: imgValue , 1: setImgValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("assets/images")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const components_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/components/VideoPopup.js



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: "https://www.youtube.com/embed/nfP5N9Yc72A?autoplay=1",
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const { 0: video , 1: setVideo  } = (0,external_react_.useState)(false);
    const { 0: videoValue , 1: setVideoValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("https://www.youtube.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const components_VideoPopup = (VideoPopup);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(0);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Counter.js
var Counter = __webpack_require__(6774);
;// CONCATENATED MODULE: ./src/layout/Footer.js



const Footer = ({ footer  })=>{
    switch(footer){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(DefaultFooter, {});
        case 3:
            return /*#__PURE__*/ jsx_runtime_.jsx(Footer3, {});
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(DefaultFooter, {});
    }
};
/* harmony default export */ const layout_Footer = (Footer);
const ScrollTopBtn = ()=>{
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        style: {
            display: "inline-block"
        },
        className: "scroll-top scroll-to-target",
        "data-target": "html",
        onClick: ()=>scrollTop(),
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "fas fa-angle-double-up"
        })
    });
};
const DefaultFooter = ()=>/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "main-footer bg-green text-white",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-top-newsletter py-80 mb-75"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row justify-content-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6 order-md-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget about-widget text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-logo mb-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logos/logo.png",
                                                    alt: "Logo"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "The mission of the AroMedBay is to provide accurate, up-to-date information on medicines and healthcare to help individuals make informed decisions about their health."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6 order-md-1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget menu-widget two-column",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "footer-title",
                                        children: "Quick Links"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "About Us"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/shop-grid",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Products"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/contact",
                                                    children: "Contact Us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/contact",
                                                    children: "Setting & Privacy"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6 order-md-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget contact-widget",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "footer-title",
                                        children: "Contact Us"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fal fa-map-marker-alt"
                                                    }),
                                                    "India"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "far fa-envelope"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "calto:+012(345)67899",
                                                        children: "+91-1234567890"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "far fa-phone"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "mailto:support@gmail.com",
                                                        children: "support@gmail.com"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "copyright-area pt-25 pb-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Copyright \xa9 2022 . All Rights Reserved."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "footer-menu",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact",
                                    children: "Setting & Privacy"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ScrollTopBtn, {})
                    ]
                })
            ]
        })
    }); // const Footer3 = () => (
 //   <footer className="main-footer footer-black text-white">
 //     <div className="container-fluid">
 //       <div className="footer-top-newsletter py-80 mb-75">
 //         <div className="section-title">
 //           <h2>Newsletter Subscribe</h2>
 //         </div>
 //         <form onSubmit={(e) => e.preventDefault()} action="#">
 //           <input type="email" placeholder="Email Address" required="" />
 //           <button className="theme-btn">
 //             subscribe now <i className="fas fa-angle-double-right" />
 //           </button>
 //         </form>
 //         <div className="happy-clients counter-item">
 //           <i className="flaticon-quote" />
 //           <b className="count-text" data-speed={3000} data-stop={56384}>
 //             <Counter end={56384} />
 //           </b>
 //           <span>Happy Clients</span>
 //         </div>
 //       </div>
 //       <div className="row justify-content-between">
 //         <div className="col-xl-5">
 //           <div className="row justify-content-between">
 //             <div className="col-sm-7">
 //               <div className="footer-widget about-widget">
 //                 <div className="footer-logo mb-30">
 //                   <Link href="/">
 //                     <a>
 //                       <img
 //                         src="assets/images/logos/logo-two-white.png"
 //                         alt="Logo"
 //                       />
 //                     </a>
 //                   </Link>
 //                 </div>
 //                 <p>
 //                   Sed ut perspiciatis unde omnis iste natus error sit voluptatem
 //                   accusantium doloremque laudantium, totam rem aperiam eaque
 //                   epsa quae abillo inventore veritatis quasi architecto
 //                 </p>
 //                 <div className="social-style-two pt-10">
 //                   <Link href="/contact">
 //                     <a>
 //                       <i className="fab fa-facebook-f" />
 //                     </a>
 //                   </Link>
 //                   <Link href="/contact">
 //                     <a>
 //                       <i className="fab fa-twitter" />
 //                     </a>
 //                   </Link>
 //                   <Link href="/contact">
 //                     <a>
 //                       <i className="fab fa-linkedin-in" />
 //                     </a>
 //                   </Link>
 //                   <Link href="/contact">
 //                     <a>
 //                       <i className="fab fa-youtube" />
 //                     </a>
 //                   </Link>
 //                 </div>
 //               </div>
 //             </div>
 //             <div className="col-sm-4">
 //               <div className="footer-widget menu-widget">
 //                 <h4 className="footer-title">Quick Links</h4>
 //                 <ul>
 //                   <li>
 //                     <Link href="/about">
 //                       <a>About Us</a>
 //                     </Link>
 //                   </li>
 //                   <li>
 //                     <Link href="/services">
 //                       <a>Services</a>
 //                     </Link>
 //                   </li>
 //                   <li>
 //                     <Link href="/portfolio-grid">
 //                       <a>Our Projects</a>
 //                     </Link>
 //                   </li>
 //                   <li>
 //                     <Link href="/farmers">
 //                       <a>Meet Farmers</a>
 //                     </Link>
 //                   </li>
 //                   <li>
 //                     <Link href="/blog-grid">
 //                       <a>Latest News</a>
 //                     </Link>
 //                   </li>
 //                   <li>
 //                     <Link href="/service-details">
 //                       <a>Vegetables</a>
 //                     </Link>
 //                   </li>
 //                 </ul>
 //               </div>
 //             </div>
 //           </div>
 //         </div>
 //         <div className="col-xl-7">
 //           <div className="row justify-content-between">
 //             <div className="col-lg-4 col-sm-6">
 //               <div className="footer-widget news-widget">
 //                 <h4 className="footer-title">Recent News</h4>
 //                 <ul>
 //                   <li>
 //                     <div className="image">
 //                       <img
 //                         src="assets/images/news/news-widget1.jpg"
 //                         alt="News"
 //                       />
 //                     </div>
 //                     <div className="content">
 //                       <h6>
 //                         <Link href="/blog-details">
 //                           Universal Principles User Experience
 //                         </Link>
 //                       </h6>
 //                       <span className="name">By Westfield</span>
 //                     </div>
 //                   </li>
 //                   <li>
 //                     <div className="image">
 //                       <img
 //                         src="assets/images/news/news-widget2.jpg"
 //                         alt="News"
 //                       />
 //                     </div>
 //                     <div className="content">
 //                       <h6>
 //                         <Link href="/blog-details">
 //                           Roll Out New Featuc Without Hurting
 //                         </Link>
 //                       </h6>
 //                       <span className="name">By Mendonca</span>
 //                     </div>
 //                   </li>
 //                 </ul>
 //               </div>
 //             </div>
 //             <div className="col-lg-4 col-sm-6">
 //               <div className="footer-widget contact-widget">
 //                 <h4 className="footer-title">Contact Us</h4>
 //                 <p>
 //                   Quis autem vel eum reprehenderit voluptate velit esse quamnue{" "}
 //                 </p>
 //                 <ul>
 //                   <li>
 //                     <i className="fal fa-map-marker-alt" />
 //                     53 Main Street, 2nd Mountain 3rd Floor, New York
 //                   </li>
 //                   <li>
 //                     <i className="far fa-phone" />
 //                     <a href="mailto:support@gmail.com">support@gmail.com</a>
 //                   </li>
 //                   <li>
 //                     <i className="far fa-envelope" />
 //                     <a href="calto:+012(345)67899">+012 (345) 678 99</a>
 //                   </li>
 //                 </ul>
 //               </div>
 //             </div>
 //             <div className="col-lg-4 col-sm-6">
 //               <div className="footer-widget gallery-widget">
 //                 <h4 className="footer-title">Gallery</h4>
 //                 <ul>
 //                   <li>
 //                     <a href="assets/images/widgets/gallery1.jpg">
 //                       <i className="fas fa-plus" />
 //                     </a>
 //                     <img
 //                       src="assets/images/widgets/gallery1.jpg"
 //                       alt="Gallery"
 //                     />
 //                   </li>
 //                   <li>
 //                     <a href="assets/images/widgets/gallery2.jpg">
 //                       <i className="fas fa-plus" />
 //                     </a>
 //                     <img
 //                       src="assets/images/widgets/gallery2.jpg"
 //                       alt="Gallery"
 //                     />
 //                   </li>
 //                   <li>
 //                     <a href="assets/images/widgets/gallery3.jpg">
 //                       <i className="fas fa-plus" />
 //                     </a>
 //                     <img
 //                       src="assets/images/widgets/gallery3.jpg"
 //                       alt="Gallery"
 //                     />
 //                   </li>
 //                   <li>
 //                     <a href="assets/images/widgets/gallery4.jpg">
 //                       <i className="fas fa-plus" />
 //                     </a>
 //                     <img
 //                       src="assets/images/widgets/gallery4.jpg"
 //                       alt="Gallery"
 //                     />
 //                   </li>
 //                   <li>
 //                     <a href="assets/images/widgets/gallery5.jpg">
 //                       <i className="fas fa-plus" />
 //                     </a>
 //                     <img
 //                       src="assets/images/widgets/gallery5.jpg"
 //                       alt="Gallery"
 //                     />
 //                   </li>
 //                   <li>
 //                     <a href="assets/images/widgets/gallery6.jpg">
 //                       <i className="fas fa-plus" />
 //                     </a>
 //                     <img
 //                       src="assets/images/widgets/gallery6.jpg"
 //                       alt="Gallery"
 //                     />
 //                   </li>
 //                 </ul>
 //               </div>
 //             </div>
 //           </div>
 //         </div>
 //       </div>
 //     </div>
 //     <div className="copyright-area-wrap">
 //       <div className="container-fluid">
 //         <div className="copyright-area pt-25 pb-10">
 //           <p>Copyright © 2022 MunFirm. All Rights Reserved.</p>
 //           <ul className="footer-menu">
 //             <li>
 //               <Link href="/contact">
 //                 <a>Setting &amp; Privacy</a>
 //               </Link>
 //             </li>
 //             <li>
 //               <Link href="/faqs">
 //                 <a>Faqs</a>
 //               </Link>
 //             </li>
 //             <li>
 //               <Link href="/contact">
 //                 <a>Payments</a>
 //               </Link>
 //             </li>
 //           </ul>
 //           {/* Scroll Top Button */}
 //           <button className="scroll-top scroll-to-target" data-target="html">
 //             <span className="fas fa-angle-double-up" />
 //           </button>
 //         </div>
 //       </div>
 //     </div>
 //     <div className="footer-shapes">
 //       <img
 //         className="footer-bg"
 //         src="assets/images/background/footer-bg-shape.png"
 //         alt="Shape"
 //       />
 //       <img
 //         className="shape-one"
 //         src="assets/images/shapes/footer1.png"
 //         alt="Shape"
 //       />
 //       <img
 //         className="shape-two"
 //         src="assets/images/shapes/footer2.png"
 //         alt="Shape"
 //       />
 //       <img
 //         className="shape-three"
 //         src="assets/images/shapes/footer3.png"
 //         alt="Shape"
 //       />
 //       <img
 //         className="shape-four"
 //         src="assets/images/shapes/footer4.png"
 //         alt="Shape"
 //       />
 //     </div>
 //   </footer>
 // );

;// CONCATENATED MODULE: ./src/layout/Menus.js



const Home = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: "Home"
            })
        })
    });
const PagesDasktop = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/about",
                children: "About us"
            })
        })
    });
const PagesMobile = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/about",
                children: "About us"
            })
        })
    });
// export const Portfolio = () => (
//   <Fragment>
//     <li>
//       <Link href="/portfolio-grid">Portfolio grid</Link>
//     </li>
//     <li>
//       <Link href="/portfolio-fluid">Portfolio Fluid</Link>
//     </li>
//     <li>
//       <Link href="/portfolio-details">Portfolio details</Link>
//     </li>
//   </Fragment>
// );
// export const Blog = () => (
//   <Fragment>
//     <li>
//       <Link href="/blog-grid">blog Grid</Link>
//     </li>
//     <li>
//       <Link href="/blog-standard">blog Standard</Link>
//     </li>
//     <li>
//       <Link href="/blog-details">blog details</Link>
//     </li>
//   </Fragment>
// );
const Shop = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/shop-grid",
                    children: "Categpry 1"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/shop-grid",
                    children: "Categpry 2"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Categpry 3"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "",
                                    children: "Categpry 3 Chield 1"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "",
                                    children: "Categpry 3 Chield 2"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-chevron-down"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/shop-grid",
                    children: "Categpry 4"
                })
            })
        ]
    });
const Contact = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/contact",
                children: "Contact"
            })
        })
    });

;// CONCATENATED MODULE: ./src/layout/MobileMenu.js



const MobileMenu = ()=>{
    const { 0: activeMenu , 1: setActiveMenu  } = (0,external_react_.useState)("");
    const activeMenuSet = (value)=>setActiveMenu(activeMenu === value ? "" : value), activeLi = (value)=>value === activeMenu ? {
            display: "block"
        } : {
            display: "none"
        };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "navigation clearfix d-block d-lg-none mobile-header",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        style: activeLi("home"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Home, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("home"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-chevron-down"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "pages"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        style: activeLi("pages"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(PagesMobile, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("pages"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-chevron-down"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "shop"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        style: activeLi("shop"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Shop, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("shop"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-chevron-down"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact, {})
        ]
    });
};
/* harmony default export */ const layout_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./src/layout/Header.js






const Header = ({ header  })=>{
    switch(header){
        case 1:
        // return <Header1 />;
        case 2:
        // return <Header2 />;
        case 3:
        // return <Header3 />;
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(DefaultHeader, {});
    }
};
/* harmony default export */ const layout_Header = (Header);
// const SearchBtn = () => {
//   const [toggle, setToggle] = useState(false);
//   return (
//     <Fragment>
//       <button className="far fa-search" onClick={() => setToggle(!toggle)} />
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         action="#"
//         className={`${toggle ? "" : "hide"}`}
//       >
//         <input
//           type="text"
//           placeholder="Search"
//           className="searchbox"
//           required=""
//         />
//         <button type="submit" className="searchbutton far fa-search" />
//       </form>
//     </Fragment>
//   );
// };
// const DaskTopMenu = () => (
//   <ul className="navigation clearfix d-none d-lg-flex">
//     <li className="dropdown">
//       <a href="#">Home</a>
//       <ul>
//         <Home />
//       </ul>
//       <div className="dropdown-btn">
//         <span className="fas fa-chevron-down" />
//       </div>
//     </li>
//     <li className="dropdown">
//       <a href="#">pages</a>
//       <ul>
//         <PagesDasktop />
//       </ul>
//       <div className="dropdown-btn">
//         <span className="fas fa-chevron-down" />
//       </div>
//     </li>
//     <li className="dropdown">
//       <a href="#">portfolio</a>
//       <ul>
//         <Portfolio />
//       </ul>
//       <div className="dropdown-btn">
//         <span className="fas fa-chevron-down" />
//       </div>
//     </li>
//     <li className="dropdown">
//       <a href="#">blog</a>
//       <ul>
//         <Blog />
//       </ul>
//       <div className="dropdown-btn">
//         <span className="fas fa-chevron-down" />
//       </div>
//     </li>
//     <li className="dropdown">
//       <a href="#">shop</a>
//       <ul>
//         <Shop />
//       </ul>
//       <div className="dropdown-btn">
//         <span className="fas fa-chevron-down" />
//       </div>
//     </li>
//     <Contact />
//   </ul>
// );
const DaskTopMenu = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "navigation clearfix d-none d-lg-flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Home, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Product"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Shop, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-chevron-down"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PagesDasktop, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact, {})
        ]
    });
const Nav = ()=>{
    const { 0: nav , 1: setNav  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "main-menu navbar-expand-lg mobile-nav",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "navbar-header",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mobile-logo my-15",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/logos/logo.png",
                                        alt: "Logo",
                                        title: "Logo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/logos/logo-white.png",
                                        alt: "Logo",
                                        title: "Logo"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        type: "button",
                        className: "navbar-toggle",
                        "data-toggle": "collapse",
                        "data-target": ".navbar-collapse",
                        onClick: ()=>setNav(!nav),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "icon-bar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "icon-bar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "icon-bar"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `navbar-collapse collapse clearfix ${nav ? "show" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DaskTopMenu, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {})
                ]
            })
        ]
    });
};
const DefaultHeader = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "main-header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-top-wrap bg-light-green text-white py-10",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-top",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-7 col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "top-left",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-envelope"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                            children: "Email Us :"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "mailto:support@gmail.com",
                                                            children: "support@gmail.com"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-clock"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                            children: "Working Hours :"
                                                        }),
                                                        " Monday - Friday, 08 am - 05 pm"
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-5 col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "top-right text-lg-right",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "far fa-phone"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                        children: "Call :"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "callto:+012(345)67899",
                                                        children: "+91-7701830599 "
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-upper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid clearfix",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-inner d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-outer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/logos/logo.png",
                                                alt: "Logo",
                                                title: "Logo"
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-outer clearfix",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Nav, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "menu-icons",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "nav-search py-15"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }); // const Header1 = () => (
 //   <header className="main-header menu-absolute">
 //     <div className="header-top-wrap bg-light-green text-white py-10">
 //       <div className="container-fluid">
 //         <div className="header-top">
 //           <div className="row">
 //             <div className="col-xl-7 col-lg-6">
 //               <div className="top-left">
 //                 <ul>
 //                   <li>
 //                     <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
 //                     <a href="mailto:support@gmail.com">support@gmail.com</a>
 //                   </li>
 //                   <li>
 //                     <i className="far fa-clock" /> <b>Working Hours :</b> Monday
 //                     - Friday, 08 am - 05 pm
 //                   </li>
 //                 </ul>
 //               </div>
 //             </div>
 //             <div className="col-xl-5 col-lg-6">
 //               <div className="top-right text-lg-right">
 //                 <ul>
 //                   <li>
 //                     <i className="far fa-phone" /> <b>Call :</b>{" "}
 //                     <a href="callto:+012(345)67899">+012 (345) 678 99</a>
 //                   </li>
 //                   <li>
 //                     <div className="social-style-one">
 //                       <a href="#">
 //                         <i className="fab fa-facebook-f" />
 //                       </a>
 //                       <a href="#">
 //                         <i className="fab fa-twitter" />
 //                       </a>
 //                       <a href="#">
 //                         <i className="fab fa-youtube" />
 //                       </a>
 //                       <a href="#">
 //                         <i className="fab fa-instagram" />
 //                       </a>
 //                     </div>
 //                   </li>
 //                 </ul>
 //               </div>
 //             </div>
 //           </div>
 //         </div>
 //       </div>
 //     </div>
 //     {/*Header-Upper*/}
 //     <div className="header-upper">
 //       <div className="container-fluid clearfix">
 //         <div className="header-inner d-flex align-items-center">
 //           <div className="logo-outer">
 //             <div className="logo">
 //               <Link href="/">
 //                 <a>
 //                   <img
 //                     src="assets/images/logos/logo.png"
 //                     alt="Logo"
 //                     title="Logo"
 //                   />
 //                 </a>
 //               </Link>
 //             </div>
 //           </div>
 //           <div className="nav-outer clearfix">
 //             {/* Main Menu */}
 //             <Nav />
 //             {/* Main Menu End*/}
 //           </div>
 //           {/* Menu Button */}
 //           <div className="menu-icons">
 //             {/* Nav Search */}
 //             <div className="nav-search py-15">
 //               <SearchBtn />
 //             </div>
 //             <button className="cart">
 //               <i className="far fa-shopping-basket" />
 //               <span>5</span>
 //             </button>
 //             <button className="user">
 //               <i className="far fa-user-circle" />
 //             </button>
 //             <Link href="/contact">
 //               <a className="theme-btn">
 //                 Consultations <i className="fas fa-angle-double-right" />
 //               </a>
 //             </Link>
 //             {/* menu sidbar */}
 //             <div className="menu-sidebar" onClick={() => sidebarToggle()}>
 //               <button>
 //                 <i className="far fa-ellipsis-h" />
 //                 <i className="far fa-ellipsis-h" />
 //                 <i className="far fa-ellipsis-h" />
 //               </button>
 //             </div>
 //           </div>
 //         </div>
 //       </div>
 //     </div>
 //     {/*End Header Upper*/}
 //   </header>
 // );
 // const Header2 = () => (
 //   <header className="main-header header-two">
 //     <div className="header-top-wrap">
 //       <div className="container">
 //         <div className="header-top bg-light-green text-white py-10">
 //           <div className="row">
 //             <div className="col-xl-7 col-lg-6">
 //               <div className="top-left">
 //                 <ul>
 //                   <li>
 //                     <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
 //                     <a href="mailto:support@gmail.com">support@gmail.com</a>
 //                   </li>
 //                 </ul>
 //               </div>
 //             </div>
 //             <div className="col-xl-5 col-lg-6">
 //               <div className="top-right text-lg-right">
 //                 <ul>
 //                   <li>
 //                     <i className="far fa-phone" /> <b>Call :</b>{" "}
 //                     <a href="callto:+012(345)67899">+012 (345) 678 99</a>
 //                   </li>
 //                   <li>
 //                     <div className="social-style-one">
 //                       <a href="#">
 //                         <i className="fab fa-facebook-f" />
 //                       </a>
 //                       <a href="#">
 //                         <i className="fab fa-twitter" />
 //                       </a>
 //                       <a href="#">
 //                         <i className="fab fa-youtube" />
 //                       </a>
 //                       <a href="#">
 //                         <i className="fab fa-instagram" />
 //                       </a>
 //                     </div>
 //                   </li>
 //                 </ul>
 //               </div>
 //             </div>
 //           </div>
 //         </div>
 //       </div>
 //     </div>
 //     {/*Header-Upper*/}
 //     <div className="header-upper">
 //       <div className="container rel clearfix">
 //         <div className="header-inner d-flex align-items-center">
 //           <div className="logo-outer">
 //             <div className="logo">
 //               <Link href="/">
 //                 <a>
 //                   <img
 //                     src="assets/images/logos/logo.png"
 //                     alt="Logo"
 //                     title="Logo"
 //                   />
 //                   <img
 //                     src="assets/images/logos/logo-white.png"
 //                     alt="Logo"
 //                     title="Logo"
 //                   />
 //                 </a>
 //               </Link>
 //             </div>
 //           </div>
 //           <div className="nav-outer clearfix">
 //             {/* Main Menu */}
 //             <Nav />
 //             {/* Main Menu End*/}
 //           </div>
 //           {/* Menu Button */}
 //           <div className="menu-icons">
 //             {/* Nav Search */}
 //             <div className="nav-search py-15">
 //               <button className="far fa-search" />
 //               <form
 //                 onSubmit={(e) => e.preventDefault()}
 //                 action="#"
 //                 className="hide"
 //               >
 //                 <input
 //                   type="text"
 //                   placeholder="Search"
 //                   className="searchbox"
 //                   required=""
 //                 />
 //                 <button type="submit" className="searchbutton far fa-search" />
 //               </form>
 //             </div>
 //             <button className="cart">
 //               <i className="far fa-shopping-basket" />
 //             </button>
 //             {/* menu sidbar */}
 //             <div className="menu-sidebar" onClick={() => sidebarToggle()}>
 //               <button>
 //                 <i className="far fa-ellipsis-h" />
 //                 <i className="far fa-ellipsis-h" />
 //                 <i className="far fa-ellipsis-h" />
 //               </button>
 //             </div>
 //           </div>
 //         </div>
 //       </div>
 //     </div>
 //     {/*End Header Upper*/}
 //   </header>
 // );
 // const Header3 = () => (
 //   <header className="main-header header-three menu-absolute">
 //     <div className="header-top-wrap bgc-primary py-10">
 //       <div className="container-fluid">
 //         <div className="header-top px-0">
 //           <ul>
 //             <li>25% OFF Upcoming Product</li>
 //             <li>100% Fresh &amp; natural foods</li>
 //             <li>free shipping over $99</li>
 //             <li>money back guarantee</li>
 //             <li>cash on delivery</li>
 //           </ul>
 //         </div>
 //       </div>
 //     </div>
 //     <div className="header-middle py-15">
 //       <div className="container-fluid">
 //         <div className="header-middle-inner">
 //           <div className="menu-middle-left">
 //             <select name="currentcy" id="currentcy">
 //               <option value="USD">USD</option>
 //               <option value="BDT">BDT</option>
 //               <option value="EURO">EURO</option>
 //             </select>
 //             <select name="language" id="language">
 //               <option value="English">English</option>
 //               <option value="Bengali">Bengali</option>
 //               <option value="Arabic">Arabic</option>
 //             </select>
 //             <div className="follower">
 //               <i className="fab fa-facebook" />
 //               <a href="#">250k+ Followers</a>
 //             </div>
 //           </div>
 //           <div className="logo-outer">
 //             <div className="logo">
 //               <Link href="/">
 //                 <a>
 //                   <img
 //                     src="assets/images/logos/logo-two.png"
 //                     alt="Logo"
 //                     title="Logo"
 //                   />
 //                 </a>
 //               </Link>
 //             </div>
 //           </div>
 //           {/* Menu Button */}
 //           <div className="menu-icons">
 //             {/* Nav Search */}
 //             <form
 //               onSubmit={(e) => e.preventDefault()}
 //               action="#"
 //               className="nav-search"
 //             >
 //               <input
 //                 type="text"
 //                 placeholder="Search here"
 //                 className="searchbox"
 //                 required=""
 //               />
 //               <button type="submit" className="searchbutton far fa-search" />
 //             </form>
 //             <button className="cart">
 //               <i className="far fa-shopping-basket" />
 //               <span>5</span>
 //             </button>
 //             <button className="user">
 //               <i className="far fa-user-circle" />
 //             </button>
 //             <button className="heart">
 //               <i className="far fa-heart" />
 //             </button>
 //           </div>
 //         </div>
 //       </div>
 //     </div>
 //     {/*Header-Upper*/}
 //     <div className="header-upper px-0">
 //       <div className="container-fluid clearfix">
 //         <div className="header-inner d-flex align-items-center">
 //           <div className="nav-outer clearfix">
 //             {/* Main Menu */}
 //             <Nav />
 //             {/* Main Menu End*/}
 //           </div>
 //           {/* menu sidbar */}
 //           <div className="menu-sidebar" onClick={() => sidebarToggle()}>
 //             <button>
 //               <i className="far fa-ellipsis-h" />
 //               <i className="far fa-ellipsis-h" />
 //               <i className="far fa-ellipsis-h" />
 //             </button>
 //           </div>
 //         </div>
 //       </div>
 //     </div>
 //     {/*End Header Upper*/}
 //   </header>
 // );

;// CONCATENATED MODULE: ./src/layout/SideBar.js



const SideBar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "form-back-drop",
                onClick: ()=>(0,utils/* sidebarToggle */.LR)()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "hidden-bar",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "inner-box text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "cross-icon",
                            onClick: ()=>(0,utils/* sidebarToggle */.LR)(),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fa fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "title",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Get Appointment"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "appointment-form",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: (e)=>e.preventDefault(),
                                method: "post",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            name: "text",
                                            defaultValue: "",
                                            placeholder: "Name",
                                            required: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            name: "email",
                                            defaultValue: "",
                                            placeholder: "Email Address",
                                            required: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            placeholder: "Message",
                                            rows: 5,
                                            defaultValue: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            className: "theme-btn",
                                            children: "Submit now"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "social-style-one",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-twitter"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-facebook-f"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-instagram"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-pinterest-p"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const layout_SideBar = (SideBar);

;// CONCATENATED MODULE: ./src/layout/Layout.js









const Layout = ({ header , footer , children  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* stickyNav */.h4)();
        (0,utils/* animation */.oQ)();
        external_react_nice_select_default()();
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (window.location.pathname === "/index3") {
            document.querySelector("body").classList.add("home-three");
        } else {
            document.querySelector("body").classList.remove("home-three");
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_VideoPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ImageView, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "page-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
                        header: header
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_SideBar, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {
                        footer: footer
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LR": () => (/* binding */ sidebarToggle),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "oQ": () => (/* binding */ animation),
/* harmony export */   "ot": () => (/* binding */ getPagination)
/* harmony export */ });
// Animation with wowjs
const animation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};
// Sidebar
const sidebarToggle = ()=>{
    const body = document.querySelector("body");
    body.classList.toggle("side-content-visible");
};
// Sticky nav
const stickyNav_ = ()=>{
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(".main-header");
    for(let i = 0; i < sticky.length; i++){
        const stick = sticky[i];
        if (stick) {
            if (offset > 10) {
                stick.classList.add("fixed-header");
            } else {
                stick.classList.remove("fixed-header");
            }
        }
    }
};
const stickyNav = (stickyClass)=>window.addEventListener("scroll", stickyNav_);
// Pagination
const getPagination = (totalNumber, sort)=>{
    let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx)=>idx + 1);
    return arr;
};
// change pagination and update pagination and content
const pagination = (listClass, sort, active)=>{
    let list = document.querySelectorAll(listClass);
    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if (active === 1) {
            if (i < sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        } else {
            if (i >= (active - 1) * sort && i < active * sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        }
    }
};


/***/ })

};
;