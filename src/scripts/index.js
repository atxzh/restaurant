import createHTML, { HTML_STRING as HTML } from './createHtml.js';
import { orderCart as addOrderEvent } from './order.js'
import checkCompatibility from './compatibility.js'
import addItemsFromList, { items as ListItems } from './item.js'

import '../styles/style.css'
import '../styles/compatibility.css'
import '../styles/style-home.css'
import '../styles/style-menu.css'
import '../styles/style-about.css'

// `use strict`;

createHTML(HTML, document.body);

checkCompatibility();

addItemsFromList(ListItems);

addOrderEvent.addItem(null);