<template>
  <div class="header">
    <div class="header__title">Mascotitas</div>
    <div class="header__icon">
      <leaf />
    </div>
  </div>
</template>

<script>
import leaf from '@/assets/icons/leaf.vue'

export default {
  name: 'Header',

  components: {
    leaf
  }
}
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  background-color: $main-color;
  display: flex;
  font-family: $main-font;
  height: 2rem;
  justify-content: center;
  left: 0;
  max-width: 100%;
  padding: 1rem 2rem;
  position: relative;
  top: 0;

  &__title {
    color: $custom-color;
    font-size: $main-title-size;
    font-weight: bold;
    text-transform: uppercase;
  }

  &__icon {
    padding: 1rem;
    fill: $custom-color;
  }
}
</style>
