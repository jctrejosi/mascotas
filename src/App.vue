<template>
  <div class="main-container">
    <Header />
    <SearchInput />
    <Description />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import SearchInput from '@/components/SearchInput/SearchInput.vue'
import Description from '@/components/Description/Description.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',

  components: {
    Header,
    SearchInput,
    Description
  },

  methods: {
    ...mapActions(['Get_List_Cats'])
  },

  created () {
    this.Get_List_Cats()
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
