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
  margin: 0 auto;
  justify-content: center;
  width: 70%;

  &__image {
    width: 10rem;
    height: 10rem;
    padding: .5rem;
  }
}
</style>
