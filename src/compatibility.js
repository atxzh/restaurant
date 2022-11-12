
// For FireFox

if (navigator.userAgent.includes('Firefox')) {

    const navigationHome = document.querySelector('div.nav-menu>.nav-list.navHome');

    navigationHome.querySelector('input').checked = true;

    const navigationMenu = document.querySelector('div.nav-menu>.nav-list.navMenu');

    const navigationAbout = document.querySelector('div.nav-menu>.nav-list.navAbout');

    const home = document.querySelector('main.home');
    const menu = document.querySelector('main.menu');
    const about = document.querySelector('main.about');

    // Navigation Bar

    navigationHome.addEventListener('click', () => {
        home.style.setProperty('display', 'flex');
        menu.style.setProperty('display', 'none');
        about.style.setProperty('display', 'none');
    })

    navigationMenu.addEventListener('click', () => {
        home.style.setProperty('display', 'none');
        menu.style.setProperty('display', 'flex');
        about.style.setProperty('display', 'none');
    })

    navigationAbout.addEventListener('click', () => {
        home.style.setProperty('display', 'none');
        menu.style.setProperty('display', 'none');
        about.style.setProperty('display', 'flex');
    })

    const orderCart = document.querySelector('div.order-cart')

    const orderDetail = document.querySelector('div.order-detail')

    // Order Detail on Click

    orderCart.addEventListener('click', (evt) => {
        orderDetail.style.setProperty('display', 'flex')

        document.addEventListener('click', (e) => {

            if (!e.target.closest('div.order-detail') && !e.target.closest('div.order-cart')) {
                orderDetail.style.setProperty('display', 'none')
            }

        })
    })

    // Order Now to Menu

    const orderNow = document.querySelector('main.home div.home-request>input#orderNow')

    orderNow.addEventListener('click', (e) => {
        document.querySelector('header>div.nav-menu>nav.navMenu>input#navMenu').checked = true

        document.querySelector('main.menu').style.setProperty('display', 'flex')

        document.querySelector('main.home').style.setProperty('display', 'none')

        document.querySelector('main.about').style.setProperty('display', 'none')
    })


    // Table Reservation

    const reserveButton = document.querySelector('label.home-button-big.reserve')

    const requestMenu = document.querySelector('div.home-right>div.request-menu')

    reserveButton.addEventListener('click', () => {
        requestMenu.style.setProperty('display', 'flex')

        document.addEventListener('click', (e) => {

            // debugger

            if (!e.target.closest('div.request-menu') && e.target !== reserveButton && !e.target.closest('input')) {
                requestMenu.style.setProperty('display', 'none')
            }

        })
    })

} else {

    // For Chromium

    const orderNow = document.querySelector('main.home div.home-request>input#orderNow')

    orderNow.addEventListener('click', (e) => {
        document.querySelector('header>div.nav-menu>nav.navMenu>input#navMenu').checked = true
    })

}