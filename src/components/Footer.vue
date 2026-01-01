<template>
  <footer class="footer">
    <nav>
        <RouterLink to="/inventario">{{ t('catalog') }}</RouterLink>
    </nav>
  </footer>
</template>

<script setup>

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<style scoped>
.footer {
  margin-top: 3rem;
  padding: 1rem 1.5rem;
  font-size: 0.85rem;
  color: #777;
  border-top: 1px solid #e5e5e5;
  background: white;
}
</style>
