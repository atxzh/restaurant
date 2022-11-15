import Logo from '../asset/img/logo.svg'
import MainPic from '../asset/img-disp/biriyani_1.webp'
import IconSVG from '../asset/icons.sprite.svg';

export var HTML_STRING = [
    {
        element: "section",
        child: [
            {
                element: "header",
                child: [
                    {
                        element: "div",
                        class: "logo",
                        child: [
                            {
                                element: "img",
                                class: "logo-img",
                                src: Logo,
                                alt: "Restaurant logo"
                            },
                            {
                                element: "p",
                                class: "logo-text text-big",
                                child: ["LOTUS"]
                            },
                            {
                                element: "p",
                                class: "logo-text text-small",
                                child: ["An Indian Cusine"]
                            },
                            {
                                element: "p",
                                class: "logo-text text-small",
                                child: ["Restaurant"]
                            }
                        ]
                    },
                    {
                        element: "div",
                        class: "nav-menu",
                        child: [
                            {
                                element: "nav",
                                class: "nav-list navHome",
                                child: [
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "headNav",
                                        id: "navHome",
                                        checked: true
                                    },
                                    {
                                        element: "label",
                                        for: "navHome",
                                        class: "nav-text text-medium",
                                        child: [" Home "]
                                    }
                                ]
                            },
                            {
                                element: "nav",
                                class: "nav-list navMenu",
                                child: [
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "headNav",
                                        id: "navMenu",
                                    },
                                    {
                                        element: "label",
                                        for: "navMenu",
                                        class: "nav-text text-medium",
                                        child: [" Menu "]
                                    }
                                ]
                            },
                            {
                                element: "nav",
                                class: "nav-list navAbout",
                                child: [
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "headNav",
                                        id: "navAbout",
                                    },
                                    {
                                        element: "label",
                                        for: "navAbout",
                                        class: "nav-text text-medium",
                                        child: [" About "]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        element: "div",
                        class: "order-cart",
                        child: [
                            {
                                element: "input",
                                id: "orderCart",
                                type: "checkbox",
                                name: "order-cart"
                            },
                            {
                                element: "label",
                                for: "orderCart",
                                child: [
                                    {
                                        elementNS: "svg",
                                        class: "icon header-icon",
                                        child: [
                                            {
                                                elementNS: "use",
                                                href: `${IconSVG}#basket`
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                element: "div",
                                class: "order-count nodisplay",
                                child: ["0"]
                            }
                        ]
                    },
                    {
                        element: "div",
                        class: "order-detail",
                        child: [
                            {
                                element: "div",
                                class: "no-order",
                                child: [
                                    "Nothing to Place ",
                                    {
                                        element: "br"
                                    },
                                    " Order On."
                                ]
                            },
                            {
                                element: "hr"
                            },
                            {
                                element: "p",
                                class: "order-totalPrice",
                                child: [
                                    {
                                        element: "span",
                                        class: "text-small",
                                        child: ["$"]
                                    },
                                    {
                                        element: "span",
                                        class: "text-medium",
                                        child: ["00"]
                                    },
                                    ".",
                                    {
                                        element: "span",
                                        class: "text-small",
                                        child: ["00"]
                                    }
                                ]
                            },
                            {
                                element: "button",
                                class: "home-button-big button-big button-big-nohi placeOrder nodisplay",
                                child: ["Place Order"]
                            }
                        ]
                    }
                ]
            },
            {
                element: "main",
                class: "home",
                child: [
                    {
                        element: "div",
                        class: "home-left",
                        child: [
                            {
                                element: "p",
                                class: "home-text-big text-big",
                                child: ["Relish the Indian Spices - Spices favoured from all around the world - in your plate - flavoured with Tradition"]
                            },
                            {
                                element: "div",
                                class: "home-request",
                                child: [
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "orderortable",
                                        id: "orderNow"
                                    },
                                    {
                                        element: "label",
                                        for: "orderNow",
                                        class: "home-button-big button-big button-big-hi orderNow",
                                        child: ["Order Now"]
                                    },
                                    {
                                        element: "p",
                                        class: "home-text-small",
                                        child: ["or"]
                                    },
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "orderortable",
                                        id: "tableReserve"
                                    },
                                    {
                                        element: "label",
                                        for: "tableReserve",
                                        class: "home-button-big button-big button-big-nohi reserve",
                                        child: ["Reserve a Table"]
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        element: "div",
                        class: "home-right",
                        child: [
                            {
                                element: "div",
                                class: "request-menu",
                                child: [
                                    {
                                        element: "div",
                                        class: "home-request-text",
                                        child: ["Personal Information"]
                                    },
                                    {
                                        element: "div",
                                        class: "home-request-name",
                                        child: [
                                            {
                                                element: "div",
                                                class: "input-request",
                                                child: [
                                                    {
                                                        element: "label",
                                                        for: "firstName",
                                                        child: ["First Name"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "text",
                                                        name: "firstName",
                                                        id: "fname",
                                                        class: "input-text text-fname",
                                                        required: true
                                                    },
                                                    {
                                                        element: "span"
                                                    }
                                                ]
                                            },
                                            {
                                                element: "div",
                                                class: "input-request",
                                                child: [
                                                    {
                                                        element: "label",
                                                        for: "lastName",
                                                        child: ["Last Name"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "text",
                                                        name: "lastName",
                                                        id: "lname",
                                                        class: "input-text text-lname",
                                                        required: true
                                                    },
                                                    {
                                                        element: "span"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        element: "div",
                                        class: "home-request-text",
                                        child: ["Contact Information"]
                                    },
                                    {
                                        element: "div",
                                        class: "home-request-name",
                                        child: [
                                            {
                                                element: "div",
                                                class: "input-request",
                                                child: [
                                                    {
                                                        element: "label",
                                                        for: "email",
                                                        child: ["E-mail"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "email",
                                                        name: "email",
                                                        id: "email",
                                                        class: "input-text text-email",
                                                        required: true
                                                    },
                                                    {
                                                        element: "span"
                                                    }
                                                ]
                                            },
                                            {
                                                element: "div",
                                                class: "input-request",
                                                child: [
                                                    {
                                                        element: "label",
                                                        for: "phone",
                                                        child: ["Phone Number"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "tel",
                                                        name: "phone",
                                                        id: "pnum",
                                                        class: "input-text text-pnum",
                                                        required: true
                                                    },
                                                    {
                                                        element: "span"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        element: "div",
                                        class: "home-request-text",
                                        child: ["Date & Occasion"]
                                    },
                                    {
                                        element: "div",
                                        class: "home-request-info",
                                        child: [
                                            {
                                                element: "div",
                                                class: "input-request",
                                                child: [
                                                    {
                                                        element: "label",
                                                        for: "date",
                                                        child: ["Date"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "date",
                                                        name: "date",
                                                        id: "date",
                                                        class: "input-text text-date",
                                                        required: true
                                                    },
                                                    {
                                                        element: "span"
                                                    }
                                                ]
                                            },
                                            {
                                                element: "div",
                                                class: "input-request",
                                                child: [
                                                    {
                                                        element: "label",
                                                        for: "occasion",
                                                        child: ["Occasion"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "text",
                                                        name: "occasion",
                                                        id: "dateOccasion",
                                                        class: "input-text text-occasion",
                                                        list: "events",
                                                        required: true
                                                    },
                                                    {
                                                        element: "datalist",
                                                        id: "events",
                                                        child: [
                                                            {
                                                                element: "option",
                                                                value: "Wedding Anniversary"
                                                            },
                                                            {
                                                                element: "option",
                                                                value: "Birthday"
                                                            },
                                                            {
                                                                element: "option",
                                                                value: "Job Promotion"
                                                            },
                                                            {
                                                                element: "option",
                                                                value: "Wedding Function"
                                                            },
                                                            {
                                                                element: "option",
                                                                value: "Business Meeting"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        element: "div",
                                        class: "home-request-text",
                                        child: ["Time Slot"]
                                    },
                                    {
                                        element: "div",
                                        class: "home-request-time",
                                        child: [
                                            {
                                                element: "input",
                                                type: "radio",
                                                name: "time",
                                                id: "morning",
                                                class: "request-time-head",
                                                checked: true
                                            },
                                            {
                                                element: "label",
                                                for: "morning",
                                                child: ["Morning"]
                                            },
                                            {
                                                element: "input",
                                                type: "radio",
                                                name: "time",
                                                id: "afternoon",
                                                class: "request-time-head",
                                                checked: true
                                            },
                                            {
                                                element: "label",
                                                for: "afternoon",
                                                child: ["Afternoon"]
                                            },
                                            {
                                                element: "input",
                                                type: "radio",
                                                name: "time",
                                                id: "night",
                                                class: "request-time-head",
                                                checked: true
                                            },
                                            {
                                                element: "label",
                                                for: "night",
                                                child: ["Night"]
                                            },
                                            {
                                                element: "div",
                                                class: "time-slot time-slot-morning",
                                                child: [
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time0900",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time0900",
                                                        child: ["09:00"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time0930",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time0930",
                                                        child: ["09:30"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time1000",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time1000",
                                                        child: ["10:00"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time1030",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time1030",
                                                        child: ["10:30"]
                                                    }
                                                ]
                                            },
                                            {
                                                element: "div",
                                                class: "time-slot time-slot-afternoon",
                                                child: [
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time1230",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time1230",
                                                        child: ["12:30"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time1300",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time1300",
                                                        child: ["13:00"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time1330",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time1330",
                                                        child: ["13:30"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time1400",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time1400",
                                                        child: ["14:00"]
                                                    }
                                                ]
                                            },
                                            {
                                                element: "div",
                                                class: "time-slot time-slot-night",
                                                child: [
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time1930",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time1930",
                                                        child: ["19:30"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time2000",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time2000",
                                                        child: ["20:00"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time2030",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time2030",
                                                        child: ["20:30"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time2100",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time2100",
                                                        child: ["21:00"]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        element: "button",
                                        class: "button-big button-big-nohi",
                                        type: "submit",
                                        child: ["Submit"]
                                    }
                                ]
                            },
                            {
                                element: "img",
                                class: "home-right image-big",
                                src: MainPic,
                                alt: "Main Pic"
                            }
                        ]
                    }
                ]
            },
            {
                element: "main",
                class: "menu",
                child: [
                    {
                        element: "div",
                        class: "menu-heading",
                        child: [
                            {
                                elementNS: "svg",
                                class: "icon title-icon",
                                child: [
                                    {
                                        elementNS: "use",
                                        href: `${IconSVG}#menu`
                                    }
                                ]
                            },
                            {
                                element: "p",
                                class: "menu-title",
                                child: ["Menu"]
                            }
                        ]
                    },
                    {
                        element: "div",
                        class: "menu-slides",
                        child: [
                            {
                                element: "input",
                                type: "radio",
                                name: "main-nav",
                                id: "appetizer",
                                checked: true
                            },
                            {
                                element: "label",
                                for: "appetizer",
                                class: "tab tab-appetizer",
                                child: ["Appetizer"]
                            },
                            {
                                element: "div",
                                class: "tab-appetizer-window grid-vertical",
                            },
                            {
                                element: "input",
                                type: "radio",
                                name: "main-nav",
                                id: "dish",
                            },
                            {
                                element: "label",
                                for: "dish",
                                class: "tab tab-dish",
                                child: ["Dishes"]
                            },
                            {
                                element: "div",
                                class: "tab-dish-window grid-vertical",
                                child: [
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-dish",
                                        id: "dishVeg",
                                        checked: true
                                    },
                                    {
                                        element: "label",
                                        for: "dishVeg",
                                        class: "tab tab-dishVeg",
                                        child: ["Veg Dishes"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-dishVeg-window grid-horizontal"
                                    },
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-dish",
                                        id: "dishBeef",
                                    },
                                    {
                                        element: "label",
                                        for: "dishBeef",
                                        class: "tab tab-dishBeef",
                                        child: ["Beef Dishes"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-dishBeef-window grid-horizontal"
                                    },
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-dish",
                                        id: "dishLamb",
                                    },
                                    {
                                        element: "label",
                                        for: "dishLamb",
                                        class: "tab tab-dishLamb",
                                        child: ["Lamb Dishes"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-dishLamb-window grid-horizontal"
                                    },
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-dish",
                                        id: "dishSea",
                                    },
                                    {
                                        element: "label",
                                        for: "dishSea",
                                        class: "tab tab-dishSea",
                                        child: ["Sea Food Dishes"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-dishSea-window grid-horizontal"
                                    }
                                ]
                            },
                            {
                                element: "input",
                                type: "radio",
                                name: "main-nav",
                                id: "mc",
                            },
                            {
                                element: "label",
                                for: "mc",
                                class: "tab tab-mc",
                                child: ["Main Course"]
                            },
                            {
                                element: "div",
                                class: "tab-mc-window grid-vertical",
                                child: [
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-mc",
                                        id: "mcBiriyani",
                                        checked: true
                                    },
                                    {
                                        element: "label",
                                        for: "mcBiriyani",
                                        class: "tab tab-mcBiriyani",
                                        child: ["Biriyani"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-mcBiriyani-window grid-horizontal"
                                    },
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-mc",
                                        id: "mcTandoori",
                                    },
                                    {
                                        element: "label",
                                        for: "mcTandoori",
                                        class: "tab tab-mcTandoori",
                                        child: ["Tandoori"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-mcTandoori-window grid-horizontal"
                                    }
                                ]
                            },
                            {
                                element: "input",
                                type: "radio",
                                name: "main-nav",
                                id: "comp",
                            },
                            {
                                element: "label",
                                for: "comp",
                                class: "tab tab-comp",
                                child: ["Complimentary"]
                            },
                            {
                                element: "div",
                                class: "tab-comp-window grid-vertical",
                                child: [
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-comp",
                                        id: "compBread",
                                        checked: true
                                    },
                                    {
                                        element: "label",
                                        for: "compBread",
                                        class: "tab tab-compBread",
                                        child: ["Sides & Breads"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-compBread-window grid-horizontal"
                                    },
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-comp",
                                        id: "compBev",
                                    },
                                    {
                                        element: "label",
                                        for: "compBev",
                                        class: "tab tab-compBev",
                                        child: ["Beverages"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-compBev-window grid-horizontal"
                                    },
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-comp",
                                        id: "compDes",
                                    },
                                    {
                                        element: "label",
                                        for: "compDes",
                                        class: "tab tab-compDes",
                                        child: ["Desserts"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-compDes-window grid-horizontal"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                element: "main",
                class: "about",
                child: [
                    {
                        element: "div",
                        class: "about-heading",
                        child: [
                            {
                                elementNS: "svg",
                                class: "icon title-icon",
                                child: [
                                    {
                                        elementNS: "use",
                                        href: `${IconSVG}#info`
                                    }
                                ]
                            },
                            {
                                element: "p",
                                class: "about-title",
                                child: ["About"]
                            }
                        ]
                    },
                    {
                        element: "div",
                        class: "about-info",
                        child: [
                            {
                                element: "div",
                                class: "about-left",
                                child: [
                                    {
                                        element: "p",
                                        child: ["Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hdarum distinctio error esse alias fugiat accusantium, officia at aut quibusdam aliquam sequi odit temporibus sit saepe facilis fuga voluptatum autem."]
                                    },
                                    {
                                        element: "p",
                                        child: ["Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae harum distinctio error esse alias fugiat accusantium, officia at aut quibusdam aliquam sequi odit temporibus sit saepe facilis fuga voluptatum autem."]
                                    },
                                    {
                                        element: "p",
                                        child: ["Voluptatum autem."]
                                    }
                                ]
                            },
                            {
                                element: "div",
                                class: "about-right",
                                child: [
                                    {
                                        element: "p",
                                        child: ["For More Information or If to Register Any Compliants, Please Contact Us!"]
                                    },
                                    {
                                        element: "p",
                                        child: ["We Value your Feedback."]
                                    },
                                    {
                                        element: "div",
                                        class: "heading-small",
                                        child: ["Contact Information"]
                                    },
                                    {
                                        element: "address",
                                        child: [
                                            {
                                                element: "a",
                                                href: "mailto:helpdesk@lotus.com",
                                                child: ["helpdesk@lotus.com"]
                                            },
                                            {
                                                element: "br"
                                            },
                                            {
                                                element: "a",
                                                href: "tel:+13115552368",
                                                child: ["(311) 555-2368"]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        element: "footer",
        child: [
            "Made with ",
            {
                element: "code",
                child: ['HTML + CSS + JS + \u2665']
            },
            " by Athil ",
            {
                element: "a",
                href: "",
                child: [
                    {
                        elementNS: "svg",
                        class: "icon footer-icon",
                        child: [
                            {
                                elementNS: "use",
                                href: `${IconSVG}#github`
                            }
                        ]
                    }
                ]
            },
            "No Rights Reserved | 2022"
        ]
    }
];

export default function createHTML(elem, parentElem) {

    let children = []

    for (let el of elem) {
        let mainElem;

        if (el.element) {
            mainElem = document.createElement(el.element)

            for (let e in el) {
                if (e == "element") continue;
                if (e == "child") continue;
                mainElem.setAttribute(e, el[e])
            }

            if (el.child)
                createHTML(el.child, mainElem)

            children.push(mainElem)

        } else if (el.elementNS) {
            mainElem = document.createElementNS("http://www.w3.org/2000/svg", el.elementNS)

            for (let e in el) {
                if (e == "elementNS") continue;
                if (e == "child") continue;
                mainElem.setAttribute(e, el[e])
            }

            if (el.child)
                createHTML(el.child, mainElem)

            children.push(mainElem)


        } else {

            children.push(el)
        }

    }

    return parentElem.append(...children)
}

// createHTML(HTML_STRING, document.body)