<template>
  <Header />
  <SearchInput />
</template>

<script>
import Header from '@/components/Header/Header.vue'
import SearchInput from '@/components/SearchInput/SearchInput.vue'

export default {
  name: 'App',

  components: {
    Header,
    SearchInput
  }
}
</script>

<style>
html, body {
  height: 100vh;
  margin: 0;
  width: 100vw;
}
</style>
