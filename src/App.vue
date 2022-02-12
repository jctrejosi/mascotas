<template>
  <Header />
  <SearchInput />
</template>

<script>
import Header from '@/components/Header/Header.vue'
import SearchInput from '@/components/SearchInput/SearchInput.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',

  components: {
    Header,
    SearchInput
  },

  methods: {
    ...mapActions(['Get_List_Cats', 'Random_Cat'])
  },

  created () {
    this.Get_List_Cats()
    this.Random_Cat()
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
