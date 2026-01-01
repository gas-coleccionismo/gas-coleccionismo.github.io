<template>
  <header class="header">
    <div class="nav">
      <Breadcrumbs />
      <LanguageSwitcher />
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumbs from './Breadcrumbs.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

const route = useRoute()
</script>

<style scoped>
.header {
  background: white;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e5e5;
}

.nav {
  display: flex;
  justify-content: space-between;
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
