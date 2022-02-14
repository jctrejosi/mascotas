<template>
  <div class="content-images">
    <img
      class="content-images__image"
      v-for="(image, index) in images"
      :key="index"
      :src="image"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Categories',

  computed: {
    ...mapState('category', ['images'])
  }
}
</script>

<style lang="scss" scoped>
.content-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  width: 40rem;

  &__image {
    width: 9rem;
    padding: .5rem;
  }
}
</style>
