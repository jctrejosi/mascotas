<template>
  <div class="search">
    <label for="user" class="search__label">
      <input
        class="search__input"
        placeholder="Buscar mascotas"
        type="text"
        v-model="search"
        list="cats-list"
        @change="Search_Cat(search)"
      />
      <datalist id="cats-list">
        <option
          v-for="(cat, index) in catsList"
          :key="index"
          :value="cat.name"
        />
      </datalist>
    </label>
    <div class="search__navigator">
      <a
        class="search__navigator--list"
        @click="Show_List_Cats()"
      >
        {{ listName }}
      </a>
      <a
        class="search__navigator--category"
        @click="Show_List_Categories()"
      >
        {{ categoryName }}
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "SearchInput",

  data() {
    return {
      search: ""
    }
  },

  props: {
    listName: {
      default: 'My Cats',
      type: String
    },

    categoryName: {
      default: 'Categories',
      type: String
    }
  },

  computed: {
    ...mapState(['catsList'])
  },

  methods: {
    ...mapActions(['Show_List_Cats', 'Show_List_Categories', 'Search_Cat'])
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;

  &__label {
    padding: 1rem 2rem;
  }

  &__input {
    background-image: url("search.svg");
    background-position: .4rem center;
    background-repeat: no-repeat;
    background-size: 20px;
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
    margin: auto;
    position: absolute;
    right: 1rem;
    top: 0;

    &--list {
      &::after {
        align-items: center;
        background-color: $nearly-dark-color;
        content: '';
        height: 100%;
        right: 55%;
        position: absolute;
        top: 0;
        width: .1rem;
      }
    }

    &--category,
    &--list {
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
