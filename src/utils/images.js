const BASE = import.meta.env.BASE_URL

export const DEFAULT_IMAGE = `${BASE}assets/colecciones/default.jpg`

export function resolveImage(src) {
  if (!src) return DEFAULT_IMAGE
  if (src.startsWith('http')) return src
  return `${BASE}${src.replace(/^\//, '')}`
}
