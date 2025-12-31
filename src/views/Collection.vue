<template>
  <section v-if="coleccion">
    <header>
      <h1>{{ coleccion.titulo }}</h1>
      <p>{{ coleccion.pie_foto }}</p>
    </header>

    <main class="grid">
      <article
        v-for="item in coleccion.items"
        :key="item.id"
        class="card"
        @click="goToItem(item.id)"
      >
        
        <img
          :src="resolveImage(item.imagen)"
          :alt="item.titulo"
        />
        <h3>{{ item.id }} — {{ item.titulo }}</h3>
      </article>
    </main>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { resolveImage } from '../utils/images'
import data from '../data/colecciones.json'

const route = useRoute()
const router = useRouter()

const numero = route.params.numero
const coleccion = data.colecciones.find(c => c.numero === numero)

function goToItem(itemId) {
  router.push(`/coleccion/${numero}/item/${itemId}`)
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>
