<template>
  <section v-if="collection">
    <header>
      <h1>{{ collection.title }}</h1>
      <p>{{ collection.description }}</p>
    </header>

    <main class="grid">
      <article
        v-for="item in collection.items"
        :key="item.id"
        class="card"
        @click="goToItem(item.id)"
      >
        
        <img
          :src="resolveImage(item.image)"
          :alt="item.title"
        />
        <h3>{{ item.id }} — {{ item.title }}</h3>
      </article>
    </main>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { resolveImage } from '../utils/images'
import data from '../data/collections.json'

const route = useRoute()
const router = useRouter()

const number = route.params.number
const collection = data.collections.find(c => c.number === number)

function goToItem(itemId) {
  router.push(`/collection/${number}/item/${itemId}`)
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
