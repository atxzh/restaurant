## CSS

### Images

1. Cropping Images and Positioning Them :
    - `object-fit: cover | contain | none` and
    - `object-positoin: {x}% {y}%`


### Text Direction

1. `text-orientation` and `writing-mode` to change the direction of the texts
    - Additionally adding `transform: rotate(180deg)` does writing on opposite sides

### Grid

1. Grid `auto-fit` or `auto-fill` doesn't scroll.
    - Better to depend on `grid-auto-columns` or `grid-auto-rows`

### Flex

1. Flex's `justify-content:center` messes up with the scroll view

### Parent Selection

1. Parent Selection can be done with CSS `:has` selector providing the path of the children inside it.

## JavaScript

### DOM

1. Creating SVG needs to be created with `.createElementNS(namespaceurl, element)`