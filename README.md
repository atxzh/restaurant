# Restaurant Page

A Simple Restaurant Page

## Link

Link to Live Project [Here](https://mlksathil.github.io/restaurant/)

## What's There?

- Horizontal / Vertical Accordion
- Order Menu
- Create Order List
- Reserve Table

## Attribution

1. From Google
    - Fonts
        - Maron Rose
        - El Messiri
    - Icons

2. Images are from Random Search Results from Google

## Other

1. Bulk Import Files & Addition with commands: 

```bash

# Create Import Statements
ls | /
awk -F ".webp" /
'{print "import "$1" from \"\.\/"$1"\.webp\";" }' | /
awk 'gsub("-","_",$2)' | /
clip.exe

# Create item Object
ls | /
awk -F ".webp" /
'gsub("-","_"){print "{ itemID: \""$1"\"\, itemImg: "$1", itemTitle: \"\", itemPrice:\"\" },"}' | /
clip.exe

```