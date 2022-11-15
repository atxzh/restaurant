import createHTML from "./createHtml.js";
import IconSVG from '../asset/icons.sprite.svg';

import bigDecimal from 'js-big-decimal';


export const orderCart = (function () {

    function _changeTotal(itemPrice, phase) {
        const totalPrice = document.querySelector('p.order-totalPrice>span.text-medium')
        const totalPriceDecimal = document.querySelector('p.order-totalPrice>span.text-small:last-child')

        const CF = 100000000000;

        if (phase == 'add') {
            const priceWithDecimal = Number(totalPrice.textContent + '.' + totalPriceDecimal.textContent) + itemPrice

            totalPrice.textContent = (priceWithDecimal).toString().replace(/\..+$/, '');
            totalPriceDecimal.textContent = (
                Math.floor(
                    (priceWithDecimal * CF) - (Number(totalPrice.textContent) * CF)
                ) / CF
            ).toString()
                .replace('0.', '')

            console.log(priceWithDecimal * CF, Math.floor(priceWithDecimal) * CF,
                ((priceWithDecimal * CF) - (Number(totalPrice.textContent) * CF)),
                ((priceWithDecimal * CF) - (Number(totalPrice.textContent) * CF)) / CF,
                "To Add: " + itemPrice,
                "Final: " +
                Math.floor(priceWithDecimal).toString() + "." +
                (
                    ((priceWithDecimal * CF) - (Math.floor(priceWithDecimal) * CF)) / CF
                ).toString().replace('0.', '').substring(0, 2)
            )


        } else {
            const priceWithDecimal = Number(totalPrice.textContent + '.' + totalPriceDecimal.textContent) - itemPrice

            totalPrice.textContent = (priceWithDecimal).toString().replace(/\..+$/, '');
            totalPriceDecimal.textContent = (
                Math.floor(
                    (priceWithDecimal * CF) - (Number(totalPrice.textContent) * CF)
                ) / CF
            ).toString()
                .replace('0.', '');


            console.log(priceWithDecimal * CF, Math.floor(priceWithDecimal) * CF,
                ((priceWithDecimal * CF) - (Number(totalPrice.textContent) * CF)),
                ((priceWithDecimal * CF) - (Number(totalPrice.textContent) * CF)) / CF,
                "Before: " + Number(totalPrice.textContent + '.' + totalPriceDecimal.textContent),
                "To Remove: " + itemPrice,
                "Final: " +
                Math.floor(priceWithDecimal).toString() + "." +
                (
                    ((priceWithDecimal * CF) - (Math.floor(priceWithDecimal) * CF)) / CF
                ).toString().replace('0.', '').substring(0, 2)
            )
        }
    }

    function _addOrder(itemDetails) {
        // const orderItems = document.querySelectorAll('div.order-item');

        const currentItem = document.querySelector(`div.order-item[data-item-id="${itemDetails.itemID}"]`)

        let itemPrice = Number(itemDetails.itemPrice)

        if (currentItem) {
            let qty = currentItem.querySelector('span.order-itemTotalQty');
            let price = currentItem.querySelector('span.order-itemTotalPrice');

            qty.textContent = Number(qty.textContent) + 1;
            // price.textContent = (itemPrice * Number(qty.textContent)).toFixed(2)

        } else {

            const newElementOrder = _createNewOrder(itemDetails)

            const hr = document.querySelector('div.order-detail>hr')

            document.querySelector('div.order-detail').insertBefore(newElementOrder, hr)

            _buttonEvent(newElementOrder)

        }

        _changeTotal(itemPrice, 'add')
        _changeTotalCount('add')

    }

    function _createNewOrder(itemDetails) {
        const gridItem = document.createElement('div');
        gridItem.classList = 'order-item';
        gridItem.dataset.itemId = itemDetails.itemID;

        const elem = [
            {
                element: "img",
                class: "order-itemImg",
                src: `${itemDetails.itemImg}`
            },
            {
                element: "p",
                class: "order-itemTitle text-medium",
                child: [`${itemDetails.itemTitle}`]
            },
            {
                element: "p",
                class: "order-itemText text-small",
                child: [
                    "x",
                    {
                        element: "span",
                        class: "order-itemTotalQty",
                        child: ["1"]
                    },
                    " - $",
                    {
                        element: "span",
                        class: "order-itemTotalPrice text-small",
                        child: [`${Number(itemDetails.itemPrice).toFixed(2)}`]
                    }
                ]
            },
            {
                element: "div",
                class: "order-itemButtons",
                child: [
                    {
                        elementNS: "svg",
                        class: "icon side-icon",
                        child: [
                            {
                                elementNS: "use",
                                href: `${IconSVG}#addBox`
                            }
                        ]
                    },
                    {
                        elementNS: "svg",
                        class: "icon side-icon",
                        child: [
                            {
                                elementNS: "use",
                                href: `${IconSVG}#remove`
                            }
                        ]
                    }
                ]
            }
        ]

        createHTML(elem, gridItem)

        return gridItem
    }

    function _buttonEvent(item = null) {

        let button;

        if (item) {

            button = item.querySelectorAll('div.order-detail>.order-item>.order-itemButtons')

        } else {

            button = document.querySelectorAll('div.order-detail>.order-item>.order-itemButtons')

        }

        button.forEach(b => {
            b.firstElementChild.addEventListener('click', _changeQty.bind(this, b.closest('div.order-item'), 'add'))

            b.lastElementChild.addEventListener('click', _changeQty.bind(this, b.closest('div.order-item'), 'rem'))
        })
    }

    _buttonEvent();

    function _changeQty(item, phase) {

        var qty = item.querySelector('p.order-itemText>.order-itemTotalQty')
        var price = Number(item.querySelector('p.order-itemText>.order-itemTotalPrice').textContent)

        if (phase == "add") {

            qty.textContent = Number(qty.textContent) + 1
            _changeTotal(price, phase)
            _changeTotalCount(phase)

        } else {

            if (qty.textContent == '1') {

                item.remove()
                _changeTotalCount(phase)
                _changeTotal(price, phase)

            } else {

                qty.textContent = Number(qty.textContent) - 1
                _changeTotal(price, phase)
                _changeTotalCount(phase)

            }

        }
    }

    function _changeTotalCount(phase) {

        const orderCount = document.querySelector('div.order-cart>div.order-count')

        if (phase == 'add') {
            orderCount.textContent = Number(orderCount.textContent) + 1

            if (orderCount.textContent == 1) {
                orderCount.classList.remove('nodisplay')

                document.querySelector('div.order-detail>div.no-order').classList.add('nodisplay')

                document.querySelector('div.order-detail button.placeOrder').classList.remove('nodisplay')
            }

        } else {
            orderCount.textContent = Number(orderCount.textContent) - 1

            if (orderCount.textContent == 0) {
                orderCount.classList.add('nodisplay')

                document.querySelector('div.order-detail div.no-order').classList.remove('nodisplay')

                document.querySelector('div.order-detail button.placeOrder').classList.add('nodisplay')
            }
        }

    }

    const addItem = function (itemDetails = null) {

        if (itemDetails) {

            _addOrder(itemDetails)

        } else {

            const gridItemAdd = document.querySelectorAll('div.grid-item>button.item-button.orderNow')

            gridItemAdd.forEach(itemAdd => itemAdd.addEventListener('click', (e) => {
                const item = e.currentTarget.parentElement;

                const itemDetails = {
                    itemID: item.dataset.itemId,
                    itemImg: item.children[0].src,
                    itemTitle: item.children[2].children[0].textContent,
                    itemPrice: item.children[2].children[1].textContent.replace('$ ', '')
                }

                _addOrder(itemDetails)

            }))
        }
    }

    return { addItem }

})();