<template>
  <header class="header">
    <Breadcrumbs />
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumbs from './Breadcrumbs.vue'

const route = useRoute()

const backLink = computed(() => {
  if (route.name === 'item') {
    return `/coleccion/${route.params.numero}`
  }
  if (route.name === 'collection') {
    return '/'
  }
  return null
})

const backLabel = computed(() => {
  if (route.name === 'item') return 'Volver a la colección'
  if (route.name === 'collection') return 'Volver al inicio'
  return ''
})
</script>

<style scoped>
.header {
  background: white;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e5e5;
}

.nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.25rem;
}

.nav-link {
  text-decoration: none;
  font-size: 0.9rem;
  color: #222;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
