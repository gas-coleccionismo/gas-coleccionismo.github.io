# Colección de Postales

Este proyecto es un sitio estático publicado con GitHub Pages para mostrar colecciones de postales.

## Estructura del proyecto

```
public/assets/colecciones/ → imágenes
src/data/colecciones.json → TODOS los datos
src/views/ → páginas
````


## Añadir una colección

1. Abre `src/data/colecciones.json`
2. Añade un nuevo objeto dentro de `colecciones`

Campos obligatorios:
- `numero`
- `titulo`
- `pie_foto`
- `items`

## Añadir un ítem

Dentro de `items`:

Campos recomendados:
- `id` (puede ser `5b`, `10c`, etc.)
- `titulo`
- `imagen` (ruta manual)
- `tipo_reverso`

Opcionales:
- `precio_compra`
- `extra` (objeto libre clave:valor)

Ejemplo:

```json
{
  "id": "3",
  "titulo": "Catedral",
  "imagen": "/assets/colecciones/002/002-03.jpg",
  "tipo_reverso": "Dividido",
  "extra": {
    "editor": "XYZ",
    "año": "1912"
  }
}

Publicación
```
npm install
npm run build
git push
```

GitHub Pages debe apuntar a la carpeta dist.

Filosofía del proyecto

Un único archivo de datos

Cero lógica al añadir contenido

Máxima flexibilidad para campos futuros