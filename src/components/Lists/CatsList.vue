<template>
  <div class="list-cats">
    <div class="list-cats__close">
      <button
        @click="Show_List_Cats()"
        class="list-cats__close--button"
      >
        &times;
      </button>
    </div>
    <div class="list-cats__title">{{ title }}</div>
    <ul class="list-cats__list" v-if="catsBuy">
      <li
        v-for="(item, index) in catsBuy"
        :key="index"
        class="list-cats__item"
      >
        <span class="list-cats__item-name">{{ item. name}}</span>
        <img
          :src="item.image"
          class="list-cats__item-image"
        />
        <img
          @click="Remove_Cat(index)"
          class="list-cats__item-icon"
          src="./bin2.svg"
        />
      </li>
    </ul>
    <div class="list-cats__buy" v-if="catsBuy">
      <button
        @click="Show_Modal()"
        class="list-cats__buy--button"
      >
        {{ buttonBuy }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CatsList',

  props: {
    title: {
      default: 'My Cats',
      type: String
    },

    buttonBuy: {
      default: 'Buy',
      type: String
    }
  },

  computed: {
    ...mapState('home', ['catsBuy'])
  },

  methods: {
    ...mapActions('home', ['Show_List_Cats', 'Show_Modal', 'Remove_Cat'])
  }
}
</script>

<style lang="scss" scoped>
.list-cats {
  align-content: flex-start;
  background-color: $mid-color;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 2rem;
  position: fixed;
  right: 0;
  top: 0;
  width: 20rem;

  &__close {
    display: flex;
    height: 2rem;
    justify-content: right;
    width: 100%;

    &--button {
      background-color: transparent;
      border: none;
      color: $custom-color;
      cursor: pointer;
      font-size: $button-close-font-size;
      height: 100%;
      width: 2rem;

      &:hover {
        color: darken($main-color, 5%);
      }
    }
  }

  &__title {
    color: $custom-color;
    font-family: $custom-font;
    font-size: $subtitle-font-size;
    font-weight: bold;
    margin: 1rem 0;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }

  &__list {
    height: 25rem;
    overflow-y: auto;
    width: 100%;
  }

  &__item {
    align-items: center;
    border-radius: 1rem;
    box-shadow: inset .1rem .1rem 1rem .1rem $mid-dark-color;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 1rem 0;
    width: 100%;

    &-name {
      font-family: $custom-font;
      font-size: $name-font-size;
      margin-top: 1rem;
      text-align: center;
      width: 100%;
    }

    &-image {
      height: 7rem;
      padding: 1rem;
      width: 7rem;
    }

    &-icon {
      cursor: pointer;
      width: 1rem;
    }
  }

  &__buy {
    text-align: center;
    width: 100%;

    &--button {
      background-color: $main-color;
      border-radius: 2rem;
      border: .1rem solid $dark-color;
      color: $custom-color;
      cursor: pointer;
      font-size: $button-buy-font-size;
      padding: .5rem 3rem;
      text-transform: uppercase;

      &:hover {
        background-color: darken($main-color, 5%)
      }
    }
  }
}
</style>
