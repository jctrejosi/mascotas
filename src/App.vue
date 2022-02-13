<template>
  <div class="main-container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'

export default {
  name: 'App',

  components: {
    Header
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  width: 100%;
}

.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
