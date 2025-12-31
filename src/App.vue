<template>
  <Header />

  <main class="content">
    <router-view />
  </main>

  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.content {
  padding: 1rem;
}
</style>
