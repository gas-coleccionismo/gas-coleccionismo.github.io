<template>
  <section v-if="item">
    <img
      :src="resolveImage(item.imagen)"
      :alt="item.titulo"
      class="hero"
    />

    <h1>{{ item.titulo }}</h1>
    <p><strong>ID:</strong> {{ item.id }}</p>
    <p><strong>Tipo de reverso:</strong> {{ item.tipo_reverso }}</p>

    <p v-if="item.precio_compra !== undefined">
      <strong>Precio de compra:</strong> {{ item.precio_compra }} €
    </p>

    <section v-if="item.extra">
      <h2>Información adicional</h2>
      <ul>
        <li v-for="(value, key) in item.extra" :key="key">
          <strong>{{ key }}:</strong> {{ value }}
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { resolveImage } from '../utils/images'
import data from '../data/colecciones.json'

const route = useRoute()
const { numero, itemId } = route.params

const coleccion = data.colecciones.find(c => c.numero === numero)
const item = coleccion?.items.find(i => i.id === itemId)
</script>

<style scoped>
.hero {
  width: 100%;
  max-width: 640px;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  background: white;
}
</style>
