<template>
  <div class="modal-success">
    <div class="modal-success__content">
      <div class="modal-success__close">
        <button
          @click="Show_Success()"
          class="modal-success__close--button"
        >
          &times;
        </button>
      </div>
      <h1 class="modal-success__mjs">{{ mjs }}</h1>
      <div class="modal-success__ok">
        <button
          @click="Show_Success()"
          class="modal-success__ok--button"
        >
          {{ ok }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ModalSuccess',

  props: {
    mjs: {
      default: 'Kitten added',
      type: String
    },
    ok: {
      default: 'ok',
      type: String
    }
  },

  methods: {
    ...mapActions(['Show_Success'])
  }
}
</script>

<style lang="scss" scoped>
.modal-success {
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

  &__ok {
    margin-bottom: 1rem;
    text-align: center;
    width: 100%;

    &--button {
      background-color: $success-color;
      border-radius: 2rem;
      border: none;
      color: $custom-color;
      cursor: pointer;
      font-family: $custom-font;
      font-size: $success-font-size;
      font-weight: bold;
      padding: .3rem 1rem;
      text-transform: uppercase;

      &:hover {
        background-color: darken($success-color, 5%);
      }
    }
  }
}
</style>
