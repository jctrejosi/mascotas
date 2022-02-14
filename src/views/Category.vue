<template>
  <SearchCategory />
  <Cateogires />
</template>

<script>
import SearchCategory from '@/components/SearchInput/SearchCategory.vue'
import Cateogires from '@/components/Categories/Categories.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Category',

  components: {
    SearchCategory,
    Cateogires
  },

  methods: {
    ...mapActions('category', ['Get_List_Categories'])
  },

  created () {
    this.Get_List_Categories()
  }
}
</script>
