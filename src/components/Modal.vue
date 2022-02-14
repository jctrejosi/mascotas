<template>
  <div class="modal-alert">
    <div class="modal-alert__content">
      <div class="modal-alert__close">
        <button
          @click="Show_Modal()"
          class="modal-alert__close--button"
        >
          &times;
        </button>
      </div>
      <h1 class="modal-alert__mjs">{{ mjs }}</h1>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Modal',

  props: {
    mjs: {
      default: "don't buy, adopt",
      type: String
    }
  },

  methods: {
    ...mapActions('home', ['Show_Modal'])
  }
}
</script>

<style lang="scss" scoped>
.modal-alert {
  align-items: center;
  background-color: $background-dark-transparent;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  &__content {
    align-content: center;
    align-items: center;
    background-color: $light-backup;
    border-radius: 1rem;
    display: flex;
    flex-wrap: wrap;
    max-width: 30rem;
  }

  &__close {
    text-align: right;
    width: 100%;

    &--button {
      background-color: transparent;
      border: none;
      color: $custom-color;
      cursor: pointer;
      font-size: $button-close-font-size;
      width: 2rem;

      &:hover {
        color: darken($main-color, 5%);
      }
    }
  }

  &__mjs {
    font-family: $custom-font;
    font-size: $p-font-size;
    font-weight: bold;
    line-height: $p-line-height;
    margin: 2rem;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }
}
</style>
