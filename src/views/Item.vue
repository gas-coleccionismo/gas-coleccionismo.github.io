<template>
  <section v-if="item">
    <img
      :src="resolveImage(item.image)"
      :alt="item.title"
      class="hero"
    />

    <h1>{{ item.title }}</h1>
    <p><strong>ID:</strong> {{ item.id }}</p>
    <p><strong>{{ t('item.type') }}:</strong> {{ item.type }}</p>

    <p v-if="item.price !== undefined">
      <strong>{{ t('item.price') }}:</strong> {{ item.price }} €
    </p>

    <section v-if="item.extra">
      <h2>{{ t('item.additional_info') }}</h2>
      <ul>
        <li v-for="(value, key) in item.extra" :key="key">
          <strong>{{ t(`item.${key}`, key) }}:</strong> {{ value }}
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { resolveImage } from '../utils/images'
import data from '../data/collections.json'

const route = useRoute()
const { t } = useI18n()

const { number, itemId } = route.params

const collection = data.collections.find(c => c.number === number)
const item = collection?.items.find(i => i.id === itemId)
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
