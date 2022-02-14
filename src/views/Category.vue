<template>
  <SearchCategory />
</template>

<script>
import SearchCategory from '@/components/SearchInput/SearchCategory.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Category',

  components: {
    SearchCategory
  },

  methods: {
    ...mapActions('category', ['Get_List_Categories', 'Search_Category'])
  },

  created () {
    this.Get_List_Categories()
    this.Search_Category()
  }
}
</script>
