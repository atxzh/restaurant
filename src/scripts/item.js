import createHTML from "./createHtml.js";
import IconSVG from '../asset/icons.sprite.svg';

import appetizer_channa_chat from "../asset/img-disp/aptz-channa-chat.webp";
import appetizer_chicken_pakora from "../asset/img-disp/aptz-chicken-pakora.webp";
import appetizer_dosa from "../asset/img-disp/aptz-dosa.webp";
import appetizer_eggplant_pakora from "../asset/img-disp/aptz-eggplant-pakora.webp";
import appetizer_lamb_samosa from "../asset/img-disp/aptz-lamb-samosa.webp";
import appetizer_masala_dosa from "../asset/img-disp/aptz-masala-dosa.webp";
import appetizer_rawa_dosa from "../asset/img-disp/aptz-rawa-dosa.webp";
import appetizer_samosa_chaat from "../asset/img-disp/aptz-samosa-chaat.webp";
import appetizer_uthapam from "../asset/img-disp/aptz-uthapam.webp";
import appetizer_veg_samosa from "../asset/img-disp/aptz-veg-samosa.webp";
import compBev_indian_coffee from "../asset/img-disp/comp-bev-indian-coffee.webp";
import compBev_lassi from "../asset/img-disp/comp-bev-lassi.webp";
import compBev_mango_lassi from "../asset/img-disp/comp-bev-mango-lassi.webp";
import compBev_masala_chai from "../asset/img-disp/comp-bev-masala-chai.webp";
import compDes_gajar_halwa from "../asset/img-disp/comp-des-gajar-halwa.webp";
import compDes_gulab_jamun from "../asset/img-disp/comp-des-gulab-jamun.webp";
import compDes_kheer from "../asset/img-disp/comp-des-kheer.webp";
import compDes_mango_kulfi from "../asset/img-disp/comp-des-mango-kulfi.webp";
import compDes_mango_pudding from "../asset/img-disp/comp-des-mango-pudding.webp";
import compDes_pistachio_kulfi from "../asset/img-disp/comp-des-pistachio-kulfi.webp";
import compDes_saffron_kulfi from "../asset/img-disp/comp-des-saffron-kulfi.webp";
import compBread_butter_naan from "../asset/img-disp/comp-sb-butter-naan.webp";
import compBread_cheese_naan from "../asset/img-disp/comp-sb-cheese-naan.webp";
import compBread_cucumber_pachadi from "../asset/img-disp/comp-sb-cucumber-pachadi.webp";
import compBread_garlic_naan from "../asset/img-disp/comp-sb-garlic-naan.webp";
import compBread_keema_naan from "../asset/img-disp/comp-sb-keema-naan.webp";
import compBread_onion_kulcha from "../asset/img-disp/comp-sb-onion-kulcha.webp";
import dishBeef_broccoli from "../asset/img-disp/dish-beef-broccoli.webp";
import dishBeef_curry from "../asset/img-disp/dish-beef-curry.webp";
import dishBeef_shahi_korma from "../asset/img-disp/dish-beef-shahi-korma.webp";
import dishBeef_vindaloo from "../asset/img-disp/dish-beef-vindaloo.webp";
import dishLamb_achar from "../asset/img-disp/dish-lamb-achar.webp";
import dishLamb_broccoli from "../asset/img-disp/dish-lamb-broccoli.webp";
import dishLamb_curry from "../asset/img-disp/dish-lamb-curry.webp";
import dishLamb_dhasnk from "../asset/img-disp/dish-lamb-dhasnk.webp";
import dishLamb_kasmiri from "../asset/img-disp/dish-lamb-kasmiri.webp";
import dishSea_shrimp_coconut_curry from "../asset/img-disp/dish-sea-shrimp-coconut-curry.webp";
import dishSea_shrimp_curry from "../asset/img-disp/dish-sea-shrimp-curry.webp";
import dishSea_shrimp_vindaloo from "../asset/img-disp/dish-sea-shrimp-vindaloo.webp";
import dishSea_tikka_masala from "../asset/img-disp/dish-sea-tikka-masala.webp";
import dishVeg_banana_chips from "../asset/img-disp/dish-veg-banana-chips.webp";
import dishVeg_bindhi_masala from "../asset/img-disp/dish-veg-bindhi-masala.webp";
import dishVeg_chole_batura from "../asset/img-disp/dish-veg-chole-batura.webp";
import dishVeg_cury from "../asset/img-disp/dish-veg-cury.webp";
import dishVeg_dal_makhani from "../asset/img-disp/dish-veg-dal-makhani.webp";
import dishVeg_dal_tadka from "../asset/img-disp/dish-veg-dal-tadka.webp";
import dishVeg_eggplant_curry from "../asset/img-disp/dish-veg-eggplant-curry.webp";
import dishVeg_paav_bhaji from "../asset/img-disp/dish-veg-paav-bhaji.webp";
import dishVeg_palak_paneer from "../asset/img-disp/dish-veg-palak-paneer.webp";
import dishVeg_puzhukku from "../asset/img-disp/dish-veg-puzhukku.webp";
import dishVeg_saag_aloo_curry from "../asset/img-disp/dish-veg-saag-aloo-curry.webp";
import dishVeg_saag_paneer_curry from "../asset/img-disp/dish-veg-saag-paneer-curry.webp";
import mcBiriyani_chicken from "../asset/img-disp/mc-biriyani-chicken.webp";
import mcBiriyani_eggplant from "../asset/img-disp/mc-biriyani-eggplant.webp";
import mcBiriyani_lamb from "../asset/img-disp/mc-biriyani-lamb.webp";
import mcBiriyani_paneer from "../asset/img-disp/mc-biriyani-paneer.webp";
import mcBiriyani_scallop from "../asset/img-disp/mc-biriyani-scallop.webp";
import mcBiriyani_veg from "../asset/img-disp/mc-biriyani-veg.webp";
import mcTandoori_beef from "../asset/img-disp/mc-tandoori-beef.webp";
import mcTandoori_chicken from "../asset/img-disp/mc-tandoori-chicken.webp";
import mcTandoori_fish from "../asset/img-disp/mc-tandoori-fish.webp";
import mcTandoori_lamb from "../asset/img-disp/mc-tandoori-lamb.webp";
import mcTandoori_mix_grill from "../asset/img-disp/mc-tandoori-mix-grill.webp";
import mcTandoori_quail from "../asset/img-disp/mc-tandoori-quail.webp";
import mcTandoori_shrimp from "../asset/img-disp/mc-tandoori-shrimp.webp";
import mcTandoori_veg from "../asset/img-disp/mc-tandoori-veg.webp";

export const items = [
    { itemID: "appetizer_channa_chat", itemImg: appetizer_channa_chat, itemTitle: "Channa Chaat", itemPrice: "5.25" },
    { itemID: "appetizer_chicken_pakora", itemImg: appetizer_chicken_pakora, itemTitle: "Chicken Pakora", itemPrice: "5.95" },
    { itemID: "appetizer_dosa", itemImg: appetizer_dosa, itemTitle: "Dosa", itemPrice: "3.25" },
    { itemID: "appetizer_eggplant_pakora", itemImg: appetizer_eggplant_pakora, itemTitle: "Eggplant Pakora", itemPrice: "4.25" },
    { itemID: "appetizer_lamb_samosa", itemImg: appetizer_lamb_samosa, itemTitle: "Lamb Samosa", itemPrice: "5.95" },
    { itemID: "appetizer_masala_dosa", itemImg: appetizer_masala_dosa, itemTitle: "Masala Dosa", itemPrice: "4.95" },
    { itemID: "appetizer_rawa_dosa", itemImg: appetizer_rawa_dosa, itemTitle: "Rawa Dosa", itemPrice: "3.95" },
    { itemID: "appetizer_samosa_chaat", itemImg: appetizer_samosa_chaat, itemTitle: "Samosa Chaat", itemPrice: "5.95" },
    { itemID: "appetizer_uthapam", itemImg: appetizer_uthapam, itemTitle: "Uthappam", itemPrice: "5.95" },
    { itemID: "appetizer_veg_samosa", itemImg: appetizer_veg_samosa, itemTitle: "Vegetable Samosa", itemPrice: "4.35" },
    { itemID: "compBev_indian_coffee", itemImg: compBev_indian_coffee, itemTitle: "Indian Coffee", itemPrice: "1.99" },
    { itemID: "compBev_lassi", itemImg: compBev_lassi, itemTitle: "Lassi", itemPrice: "2.49" },
    { itemID: "compBev_mango_lassi", itemImg: compBev_mango_lassi, itemTitle: "Mango Lassi", itemPrice: "2.99" },
    { itemID: "compBev_masala_chai", itemImg: compBev_masala_chai, itemTitle: "Masala Chai", itemPrice: "1.99" },
    { itemID: "compDes_gajar_halwa", itemImg: compDes_gajar_halwa, itemTitle: "Gajar Halwa", itemPrice: "2.99" },
    { itemID: "compDes_gulab_jamun", itemImg: compDes_gulab_jamun, itemTitle: "Gulab Jamun", itemPrice: "5.95" },
    { itemID: "compDes_kheer", itemImg: compDes_kheer, itemTitle: "Kheer", itemPrice: "3.95" },
    { itemID: "compDes_mango_kulfi", itemImg: compDes_mango_kulfi, itemTitle: "Mango Kulfi", itemPrice: "4.25" },
    { itemID: "compDes_mango_pudding", itemImg: compDes_mango_pudding, itemTitle: "Mango Pudding", itemPrice: "3.95" },
    { itemID: "compDes_pistachio_kulfi", itemImg: compDes_pistachio_kulfi, itemTitle: "Pistachio Kulfi", itemPrice: "4.25" },
    { itemID: "compDes_saffron_kulfi", itemImg: compDes_saffron_kulfi, itemTitle: "Saffron Kulfi", itemPrice: "4.94" },
    { itemID: "compBread_butter_naan", itemImg: compBread_butter_naan, itemTitle: "Butter Naan", itemPrice: "1.99" },
    { itemID: "compBread_cheese_naan", itemImg: compBread_cheese_naan, itemTitle: "Cheese Naan", itemPrice: "3.99" },
    { itemID: "compBread_cucumber_pachadi", itemImg: compBread_cucumber_pachadi, itemTitle: "Cucumber Pachadi", itemPrice: "8.25" },
    { itemID: "compBread_garlic_naan", itemImg: compBread_garlic_naan, itemTitle: "Garlic Naan", itemPrice: "2.99" },
    { itemID: "compBread_keema_naan", itemImg: compBread_keema_naan, itemTitle: "Kheema Naan", itemPrice: "3.99" },
    { itemID: "compBread_onion_kulcha", itemImg: compBread_onion_kulcha, itemTitle: "Onion Kulcha", itemPrice: "5.75" },
    { itemID: "dishBeef_broccoli", itemImg: dishBeef_broccoli, itemTitle: "Beef Broccoli", itemPrice: "13.95" },
    { itemID: "dishBeef_curry", itemImg: dishBeef_curry, itemTitle: "Beef Curry", itemPrice: "13.25" },
    { itemID: "dishBeef_shahi_korma", itemImg: dishBeef_shahi_korma, itemTitle: "Beef Shahi Korma", itemPrice: "14.25" },
    { itemID: "dishBeef_vindaloo", itemImg: dishBeef_vindaloo, itemTitle: "Beef Vindaloo", itemPrice: "14.25" },
    { itemID: "dishLamb_achar", itemImg: dishLamb_achar, itemTitle: "Lamb Achar", itemPrice: "13.95" },
    { itemID: "dishLamb_broccoli", itemImg: dishLamb_broccoli, itemTitle: "Lamb Broccoli", itemPrice: "14.25" },
    { itemID: "dishLamb_curry", itemImg: dishLamb_curry, itemTitle: "Lamb Curry", itemPrice: "14.25" },
    { itemID: "dishLamb_dhasnk", itemImg: dishLamb_dhasnk, itemTitle: "Lamb Dhansk", itemPrice: "15.25" },
    { itemID: "dishLamb_kasmiri", itemImg: dishLamb_kasmiri, itemTitle: "Lamb Kashmiri", itemPrice: "14.25" },
    { itemID: "dishSea_shrimp_coconut_curry", itemImg: dishSea_shrimp_coconut_curry, itemTitle: "Shrimp Coconut Curry", itemPrice: "15.95" },
    { itemID: "dishSea_shrimp_curry", itemImg: dishSea_shrimp_curry, itemTitle: "Shrimp Curry", itemPrice: "14.95" },
    { itemID: "dishSea_shrimp_vindaloo", itemImg: dishSea_shrimp_vindaloo, itemTitle: "Shrimp Vindaloo", itemPrice: "15.95" },
    { itemID: "dishSea_tikka_masala", itemImg: dishSea_tikka_masala, itemTitle: "Shrimp Tikka Masala", itemPrice: "13.99" },
    { itemID: "dishVeg_banana_chips", itemImg: dishVeg_banana_chips, itemTitle: "Banana Chips", itemPrice: "4.25" },
    { itemID: "dishVeg_bindhi_masala", itemImg: dishVeg_bindhi_masala, itemTitle: "Bhindi Masala", itemPrice: "9.99" },
    { itemID: "dishVeg_chole_batura", itemImg: dishVeg_chole_batura, itemTitle: "Chole Batura", itemPrice: "7.99" },
    { itemID: "dishVeg_cury", itemImg: dishVeg_cury, itemTitle: "Vegetable Curry", itemPrice: "8.95" },
    { itemID: "dishVeg_dal_makhani", itemImg: dishVeg_dal_makhani, itemTitle: "Dal Makhani", itemPrice: "9.99" },
    { itemID: "dishVeg_dal_tadka", itemImg: dishVeg_dal_tadka, itemTitle: "Dal Tadka", itemPrice: "9.99" },
    { itemID: "dishVeg_eggplant_curry", itemImg: dishVeg_eggplant_curry, itemTitle: "Eggplant Curry", itemPrice: "9.95" },
    { itemID: "dishVeg_paav_bhaji", itemImg: dishVeg_paav_bhaji, itemTitle: "Paav Bhaji", itemPrice: "6.99" },
    { itemID: "dishVeg_palak_paneer", itemImg: dishVeg_palak_paneer, itemTitle: "Palak Paneer", itemPrice: "10.25" },
    { itemID: "dishVeg_puzhukku", itemImg: dishVeg_puzhukku, itemTitle: "Puzhukku", itemPrice: "12.95" },
    { itemID: "dishVeg_saag_aloo_curry", itemImg: dishVeg_saag_aloo_curry, itemTitle: "Saag Aloo Curry", itemPrice: "8.95" },
    { itemID: "dishVeg_saag_paneer_curry", itemImg: dishVeg_saag_paneer_curry, itemTitle: "Saag Paneer Curry", itemPrice: "9.95" },
    { itemID: "mcBiriyani_chicken", itemImg: mcBiriyani_chicken, itemTitle: "Chicken Biriyani", itemPrice: "9.25" },
    { itemID: "mcBiriyani_eggplant", itemImg: mcBiriyani_eggplant, itemTitle: "Eggplant Biriyani", itemPrice: "9.25" },
    { itemID: "mcBiriyani_lamb", itemImg: mcBiriyani_lamb, itemTitle: "Lamb Biriyani", itemPrice: "12.95" },
    { itemID: "mcBiriyani_paneer", itemImg: mcBiriyani_paneer, itemTitle: "Paneer Biriyani", itemPrice: "9.25" },
    { itemID: "mcBiriyani_scallop", itemImg: mcBiriyani_scallop, itemTitle: "Scallop Shrimp Biriyani", itemPrice: "18.95" },
    { itemID: "mcBiriyani_veg", itemImg: mcBiriyani_veg, itemTitle: "Vegetable Biriyani", itemPrice: "9.25" },
    { itemID: "mcTandoori_beef", itemImg: mcTandoori_beef, itemTitle: "Tandoori Beef", itemPrice: "12.95" },
    { itemID: "mcTandoori_chicken", itemImg: mcTandoori_chicken, itemTitle: "Chicken Tandoori", itemPrice: "12.95" },
    { itemID: "mcTandoori_fish", itemImg: mcTandoori_fish, itemTitle: "Tandoori Fish", itemPrice: "17.95" },
    { itemID: "mcTandoori_lamb", itemImg: mcTandoori_lamb, itemTitle: "Lamb Tandoori", itemPrice: "14.95" },
    { itemID: "mcTandoori_mix_grill", itemImg: mcTandoori_mix_grill, itemTitle: "Tandoor Mix Grill", itemPrice: "15.95" },
    { itemID: "mcTandoori_quail", itemImg: mcTandoori_quail, itemTitle: "Quail Tandoori", itemPrice: "17.95" },
    { itemID: "mcTandoori_shrimp", itemImg: mcTandoori_shrimp, itemTitle: "Tandoori Shrimp", itemPrice: "13.95" },
    { itemID: "mcTandoori_veg", itemImg: mcTandoori_veg, itemTitle: "Begetable Tandoori", itemPrice: "15.99" },
]

export default function createItemMarkup(items) {

    for (let item of items) {
        let itemType = /(.+?)_/.exec(item.itemID)[1]

        let parentElem = document.querySelector(`.tab-${itemType}-window`)


        createHTML([
            {
                element: "div",
                class: "grid-item",
                "data-item-id": `${item.itemID}`,
                child: [
                    {
                        element: "img",
                        src: item.itemImg,
                        alt: `${item.itemTitle}`,
                        class: "item-image"
                    },
                    {
                        element: "div",
                        class: "item-image-fg"
                    },
                    {
                        element: "div",
                        class: "item-sideInfo",
                        child: [
                            {
                                element: "p",
                                class: "item-title",
                                child: [`${item.itemTitle}`]
                            },
                            {
                                element: "p",
                                class: "item-price text-small",
                                child: [`$ ${item.itemPrice}`]
                            }
                        ]
                    },
                    {
                        element: "button",
                        class: "item-button button-small orderNow",
                        child: [
                            {
                                elementNS: "svg",
                                class: "icon icon-button",
                                child: [
                                    {
                                        elementNS: "use",
                                        href: `${IconSVG}#addBox`
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ], parentElem)

    }
}