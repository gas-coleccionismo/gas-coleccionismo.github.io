<template>
  <div class="lang-switcher">
    <button
      v-for="l in langs"
      :key="l"
      :class="['lang-btn', { active: locale.value === l }]"
      @click="setLocale(l)"
    >
      {{ t(`lang.${l}`) }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
const langs = ['es', 'en']
function setLocale(l) {
  locale.value = l
}
</script>

<style scoped>
.lang-switcher {
  display: inline-flex;
  gap: 0.5rem;
}
.lang-btn {
  border: 1px solid transparent;
  background: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 0.85rem;
}
.lang-btn.active {
  border-color: #ddd;
  background: #f5f5f5;
}
</style>
