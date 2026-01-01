# Postcard Collection

This project is a static site published with GitHub Pages to showcase postcard collections.

## Project structure

```
public/assets/collections/ → images
src/data/collections.json → collection data
src/views/ → pages / views
```


## Add a collection

1. Open `src/data/collections.json`
2. Add a new object inside `collections`

Required fields:
- `number` (number)
- `title` (title)
- `description` (photo caption)
- `items`

## Add an item

Inside `items`:

Recommended fields:
- `id` (can be `5b`, `10c`, etc.)
- `titulo` (title)
- `imagen` (manual path)
- `tipo_reverso` (back type)

Optional:
- `precio_compra` (purchase price)
- `extra` (free-form object of key:value pairs)

Example:

```json
{
  "id": "3",
  "titulo": "Catedral",
  "imagen": "/assets/collections/002/002-03.jpg",
  "tipo_reverso": "Dividido",
  "extra": {
    "editor": "XYZ",
    "año": "1912"
  }
}
```

Deployment

```bash
npm install
npm run build
git push
```

GitHub Pages should point to the `dist` folder.

Project philosophy

- Single data file
- Zero logic required when adding content
- Maximum flexibility for future fields
```
