<template>
  <div class="header">
    <div class="header__title">{{ title }}</div>
      <img class="header__icon" :src="icon">
  </div>
</template>

<script>
export default {
  name: 'Header',

  props: {
    title: {
      default: "Gatitos",
      type: String
    },

    icon: {
      default: require("../../assets/icons/leaf.svg"),
      type: String
    }
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
    font-size: $main-font-size;
    font-weight: bold;
    text-transform: uppercase;
  }

  &__icon {
    padding: 1rem;
    fill: $custom-color;
  }
}
</style>
