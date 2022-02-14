<template>
  <div class="search-category">
    <div class="search-category__navigator">
      <img src="" alt="">
      <a
        class="search-category__navigator--link"
        @click="change_page()"
      >
        {{ link }}
      </a>
    </div>
    <label class="search-category__label">
      <input
        class="search-category__input"
        placeholder="Buscar categoría"
        type="text"
        v-model="search"
        list="categories-list"
        @change="Search_Category(search)"
      />
      <datalist id="categories-list">
        <option
          v-for="(item, index) in categoriesList"
          :key="index"
          :value="item.name"
        />
      </datalist>
    </label>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "SearchCategory",

  data() {
    return {
      search: ""
    }
  },

  props: {
    link: {
      default: '< Home',
      type: String
    },

    route: {
      default: '/',
      type: String
    }
  },

  computed: {
    ...mapState('category', ['categoriesList'])
  },

  methods: {
    ...mapActions('category', ['Search_Category']),

    change_page() {
      return this.$router.push(this.route)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-category {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;

  @media (max-width: $screen-md) {
    flex-wrap: wrap;
  }

  &__label {
    padding: 1rem 2rem;

    @media (max-width: $screen-md) {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }

  &__input {
    background-image: url("search.svg");
    background-position: .4rem center;
    background-repeat: no-repeat;
    background-size: 1rem;
    border-radius: 2rem;
    border: 0.1rem solid $dark-color;
    color: $practically-dark-color;
    font-family: $custom-font;
    font-size: $input-font-size;
    padding: .5rem 2rem;
    width: 20rem;
  }

  &__navigator {
    align-items: center;
    bottom: 0;
    display: flex;
    height: 1rem;
    left: 1rem;
    margin: auto;
    position: absolute;
    top: 0;

    @media (max-width: $screen-md) {
      position: relative;
      order: 1;
      width: 100%;
    }

    &--link {
      cursor: pointer;
      color: $custom-color;
      font-family: $main-font;
      font-size: $link-font-size;
      font-weight: bold;
      margin: 0 .5rem;

      &:hover {
        color: $main-color;
      }
    }
  }
}
</style>
