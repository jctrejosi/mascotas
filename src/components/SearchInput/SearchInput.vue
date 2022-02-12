<template>
  <div class="search">
    <label for="user" class="search__label">
      <input
        class="search__input"
        placeholder="Buscar mascotas"
        type="text"
        v-model="search"
        list="cats-list"
      />
      <datalist id="cats-list">
        <option
          v-for="(cat, index) in catList"
          :key="index"
          :value="cat.name"
        />
      </datalist>
    </label>
  </div>
</template>

<script>
export default {
  name: "SearchInput",

  data() {
    return {
      search: "",
      catList: [
        {
          name: "name 1"
        },
        {
          name: "name 2"
        },
        {
          name: "name 3"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  background-color: $nearly-light-color;
  display: flex;
  justify-content: center;
  max-height: 100%;
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
    width: 30rem;
  }
}
</style>
