<template>
  <main class="grid">
    <article
      v-for="collection in collections"
      :key="collection.number"
      class="card"
      @click="goToCollection(collection.number)"
    >
      <img
        :src="resolveImage(collection.items?.[0]?.image)"
        :alt="collection.title"
      />
      <h2>{{ collection.number }} — {{ collection.title }}</h2>
      <p>{{ collection.description }}</p>
    </article>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { resolveImage } from '../utils/images'
import data from '../data/collections.json'

const router = useRouter()
const collections = data.collections

function goToCollection(number) {
  router.push(`/collection/${number}`)
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
