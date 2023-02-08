"use strict";
(() => {
var exports = {};
exports.id = 188;
exports.ids = [188];
exports.modules = {

/***/ 2242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ faqs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/components/ClientLogoSlider.js
var ClientLogoSlider = __webpack_require__(4473);
// EXTERNAL MODULE: ./src/components/FeedbackTwoSlider.js
var FeedbackTwoSlider = __webpack_require__(5362);
;// CONCATENATED MODULE: ./src/components/MunfirmAccordion.js


const MunfirmAccordion = ({ title , event  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Accordion.Toggle, {
                as: "h5",
                className: "card-header",
                eventKey: event,
                children: [
                    title,
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-chevron-right"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Accordion.Collapse, {
                eventKey: event,
                className: "content",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "card-body",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain cases are perfectly simple"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_MunfirmAccordion = (MunfirmAccordion);

// EXTERNAL MODULE: ./src/components/PageBanner.js
var PageBanner = __webpack_require__(2745);
// EXTERNAL MODULE: ./src/layout/Layout.js + 8 modules
var Layout = __webpack_require__(7079);
;// CONCATENATED MODULE: ./pages/faqs.js








const Faqs = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageBanner/* default */.Z, {
                pageName: "FAQs"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "what-we-want rel z-1 bg-lighter pt-130 rpt-100 pb-95 rpb-65",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-lg-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "what-we-want-content mb-30 rmb-65 wow fadeInUp delay-0-2s",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "section-title mb-20",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "sub-title mb-20",
                                                        children: "What We Want"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: "Know Something About We Want Customers"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "On the other hand we denounce with righteou indignation dislike men who are beguiled and demoralized by the charms"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/services",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "read-more color-secondary",
                                                    children: [
                                                        "Read More ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-angle-double-right"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-lg-7",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "what-we-want-features",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-md-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "about-feature-item style-two wow fadeInUp delay-0-4s",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "flaticon-offer"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/service-details",
                                                                    children: "Discount Options"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Sit amet consectetur adipis cing elit sed eiusmoe"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/about/arrow.png",
                                                                alt: "Arrow"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "feature-bg",
                                                                style: {
                                                                    backgroundImage: "url(assets/images/features/feature-bg.jpg)"
                                                                }
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-md-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "about-feature-item style-two wow fadeInUp delay-0-6s",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "flaticon-return-box"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/service-details",
                                                                    children: "Best Return Policy"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Sit amet consectetur adipis cing elit sed eiusmoe"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/about/arrow.png",
                                                                alt: "Arrow"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "feature-bg",
                                                                style: {
                                                                    backgroundImage: "url(assets/images/features/feature-bg.jpg)"
                                                                }
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "what-we-want-shapes",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "shape-one",
                                src: "assets/images/shapes/www-shape1.png",
                                alt: "Shape"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "shape-two",
                                src: "assets/images/shapes/www-shape2.png",
                                alt: "Shape"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "faq-section rel z-1 pt-130 rpt-100",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section-title text-center mb-60",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sub-title mb-20",
                                        children: "Asked Questions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Have any Questions"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Accordion, {
                                defaultActiveKey: "collapse0",
                                className: "faqs wow fadeInUp delay-0-2s",
                                id: "faqs",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_MunfirmAccordion, {
                                        title: `How Even Small UX Changes Can Result In An Increase In Conversion (A
        Case Study)`,
                                        event: "collapse0"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_MunfirmAccordion, {
                                        title: `Performance Game Changer: Browser Back/Forward Cache`,
                                        event: "collapse1"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_MunfirmAccordion, {
                                        title: `Resilience, Flexibility And Immediacy: Working With Headless
              Systems`,
                                        event: "collapse2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_MunfirmAccordion, {
                                        title: `How Partytown Eliminates Website Bloat From Third-Party Scripts`,
                                        event: "collapse3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_MunfirmAccordion, {
                                        title: `Preventing Bad UX Through Integrated Design Workflows`,
                                        event: "collapse4"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_MunfirmAccordion, {
                                        title: `Designing Better Navigation With Navigation Queries `,
                                        event: "collapse5"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_MunfirmAccordion, {
                                        title: `Productivity Tips And Tools For A More Efficient Workflow `,
                                        event: "collapse6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_MunfirmAccordion, {
                                        title: `The Ultimate Guide To Push Notifications For Developers `,
                                        event: "collapse7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_MunfirmAccordion, {
                                        title: `When And How To Use Freelancers In Your Organization `,
                                        event: "collapse8"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_MunfirmAccordion, {
                                        title: `Boost Resource Loading With fetchpriority, A New Priority Hint `,
                                        event: "collapse10"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "faq-shapes",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "shape-one",
                                src: "assets/images/shapes/faq-shape1.png",
                                alt: "Shape"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "shape-two",
                                src: "assets/images/shapes/faq-shape2.png",
                                alt: "Shape"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "shape-three",
                                src: "assets/images/shapes/faq-shape3.png",
                                alt: "Shape"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "shape-four",
                                src: "assets/images/shapes/faq-shape4.png",
                                alt: "Shape"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "feedback-section pt-110 rpt-80 pb-130 rpb-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section-title text-center mb-60",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sub-title mb-20",
                                    children: "Customer Reviews"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Valuable Customer’s Feedback"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(FeedbackTwoSlider/* default */.Z, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "client-logo-section text-center bg-light-green py-60",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ClientLogoSlider/* default */.Z, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "client-logo-shapes",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "shape-one",
                                src: "assets/images/shapes/cl-shape1.png",
                                alt: "Shape"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "shape-two",
                                src: "assets/images/shapes/cl-shape2.png",
                                alt: "Shape"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "shape-three",
                                src: "assets/images/shapes/cl-shape3.png",
                                alt: "Shape"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "shape-four",
                                src: "assets/images/shapes/cl-shape4.png",
                                alt: "Shape"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "shape-five",
                                src: "assets/images/shapes/cl-shape5.png",
                                alt: "Shape"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "shape-six",
                                src: "assets/images/shapes/cl-shape6.png",
                                alt: "Shape"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const faqs = (Faqs);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 9051:
/***/ ((module) => {

module.exports = require("react-nice-select");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 6882:
/***/ ((module) => {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,79,745,968,473,362], () => (__webpack_exec__(2242)));
module.exports = __webpack_exports__;

})();