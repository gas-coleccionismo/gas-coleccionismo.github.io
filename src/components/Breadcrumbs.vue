<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ul>
      <li>
        <router-link to="/">Inicio</router-link>
      </li>

      <li v-if="coleccion">
        <span>/ </span>
        <router-link :to="`/coleccion/${coleccion.numero}`">
          {{ coleccion.titulo }}
        </router-link>
      </li>

      <li v-if="item">
        <span>/ </span>
        <span class="current">
          {{ item.titulo }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import data from '../data/colecciones.json'

const route = useRoute()

const coleccion = computed(() => {
  if (!route.params.numero) return null
  return data.colecciones.find(c => c.numero === route.params.numero)
})

const item = computed(() => {
  if (!coleccion.value || !route.params.itemId) return null
  return coleccion.value.items.find(i => i.id === route.params.itemId)
})
</script>

<style scoped>
.breadcrumbs ul {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.85rem;
  color: #666;
}

.breadcrumbs a {
  text-decoration: none;
  color: inherit;
}

.breadcrumbs a:hover {
  text-decoration: underline;
}

.current {
  color: #999;
}
</style>
