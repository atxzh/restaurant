import createHTML, { HTML_STRING as HTML } from './createHtml.js';
import { orderCart as addOrderEvent } from './order.js'
import checkCompatibility from './compatibility.js'

// `use strict`;

createHTML(HTML, document.body);

addOrderEvent.addItem(null);

checkCompatibility();