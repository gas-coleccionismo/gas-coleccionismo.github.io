<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ul>
      <li>
        <router-link to="/">{{ t('home') }}</router-link>
      </li>

      <li v-if="collection">
        <span>/ </span>
        <router-link :to="`/collection/${collection.number}`">
          {{ collection.title }}
        </router-link>
      </li>

      <li v-if="item">
        <span>/ </span>
        <span class="current">
          {{ item.title }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import data from '../data/collections.json'

const route = useRoute()
const { t } = useI18n()

const collection = computed(() => {
  if (!route.params.number) return null
  return data.collections.find(c => c.number === route.params.number)
})

const item = computed(() => {
  if (!collection.value || !route.params.itemId) return null
  return collection.value.items.find(i => i.id === route.params.itemId)
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
