
const orderCart = (function () {

    const orderDetail = document.querySelector('div.order-detail')

    function _changeTotal(itemPrice, phase) {
        const totalPrice = document.querySelector('p.order-totalPrice>span.text-medium')

        if (phase == 'add') {
            totalPrice.textContent = Number(totalPrice.textContent) + itemPrice
        } else {
            totalPrice.textContent = Number(totalPrice.textContent) - itemPrice
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

            orderDetail.insertBefore(newElementOrder, hr)

            _buttonEvent(newElementOrder)

        }

        _changeTotal(itemPrice, 'add')
        _changeTotalCount('add')

    }

    function _createNewOrder(itemDetails) {
        const gridItem = document.createElement('div');
        gridItem.classList = 'order-item';
        gridItem.dataset.itemId = itemDetails.itemID;

        // Item Image
        const itemImage = document.createElement('img');
        itemImage.classList = 'order-itemImg'
        itemImage.src = itemDetails.itemImg;

        // Item Title
        const itemTitle = document.createElement('p');
        itemTitle.classList = 'order-itemTitle text-medium';
        itemTitle.textContent = itemDetails.itemTitle;

        // Item Text
        const itemText = document.createElement('p');
        itemText.classList = 'order-itemText text-small';

        const itemTotalQty = document.createElement('span');
        itemTotalQty.classList = 'order-itemTotalQty'
        itemTotalQty.textContent = '1';

        const itemTotalPrice = document.createElement('span');
        itemTotalPrice.classList = 'order-itemTotalPrice text-small'
        itemTotalPrice.textContent = Number(itemDetails.itemPrice).toFixed(2);

        itemText.insertAdjacentHTML('beforeend', 'x')
        itemText.insertAdjacentElement('beforeend', itemTotalQty)
        itemText.insertAdjacentHTML('beforeend', ' - $')
        itemText.insertAdjacentElement('beforeend', itemTotalPrice)

        // Item Buttons
        const itemButtons = document.createElement('div')
        itemButtons.classList = 'order-itemButtons'

        for (svg of ['./asset/icons.sprite.svg#addBox', './asset/icons.sprite.svg#remove']) {
            const button = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            button.classList = 'icon side-icon'

            const svgLink = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'use'
            );
            svgLink.setAttribute('href', svg)

            button.appendChild(svgLink)
            itemButtons.appendChild(button)
        }

        gridItem.append(itemImage, itemTitle, itemText, itemButtons)

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
                orderCount.style.setProperty('display', 'block')
            }

        } else {
            orderCount.textContent = Number(orderCount.textContent) - 1

            if (orderCount.textContent == 0)
                orderCount.style.setProperty('display', 'none')
        }

    }

    addItem = function (itemDetails = null) {

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

orderCart.addItem(null);