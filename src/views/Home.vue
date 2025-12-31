<template>
  <main class="grid">
    <article
      v-for="coleccion in colecciones"
      :key="coleccion.numero"
      class="card"
      @click="goToCollection(coleccion.numero)"
    >
      <img
        :src="resolveImage(coleccion.items?.[0]?.imagen)"
        :alt="coleccion.titulo"
      />
      <h2>{{ coleccion.numero }} — {{ coleccion.titulo }}</h2>
      <p>{{ coleccion.pie_foto }}</p>
    </article>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { resolveImage } from '../utils/images'
import data from '../data/colecciones.json'

const router = useRouter()
const colecciones = data.colecciones

function goToCollection(numero) {
  router.push(`/coleccion/${numero}`)
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
.card {
  cursor: pointer;
}
img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>
