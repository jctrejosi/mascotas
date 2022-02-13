<template>
  <div class="description">
    <span class="description__name">{{ cat.name }}</span>
    <img class="description__image" :src="url" />
    <div class="description__arrow">
      <img
        class="description__arrow--left"
        src="./arrow.svg"
        @click="Previous()"
      />
      <img
        class="description__arrow--right"
        src="./arrow.svg"
        @click="Next()"
      />
    </div>
    <span class="description__paragraph">
      <p>{{ cat.description }}</p>
    </span>
    <span class="description__other">
      <h3 class="description__other--title">More Information</h3>
      <p class="description__other--content">
        - Lifespan: {{ cat.life_span }} years
        <br>
        - Origin: {{ cat.origin }}
        <br>
        - Dog Friendly: {{ cat.dog_friendly }}
        <br>
        - Adaptability: {{ cat.adaptability }}
        <br>
        - Afection: {{ cat.affection_level }}
        <br>
        - Temperament: {{ cat.temperament }}
      </p>
      <a
        class="description__other--more"
        :href="cat.wikipedia_url"
        target="_blank"
      >
        More information
      </a>
    </span>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Description',

  computed: {
    ...mapState(['cat', 'url'])
  },

  methods: {
    ...mapActions(['Previous', 'Next'])
  }
}
</script>

<style lang="scss" scoped>
.description {
  display: flex;
  flex-wrap: wrap;
  width: 35rem;
  padding: 2rem;
  margin: auto 0;
  justify-content: center;
  position: relative;

  &__name {
    color: $custom-color;
    font-family: $main-font;
    font-size: $title-font-size;
    text-transform: uppercase;
    font-weight: bold;
    width: 100%;
    height: 10%;
    text-align: center;
  }

  &__image {
    width: 100%;
    height: 25rem;
  }

  &__arrow {
    bottom: 15rem;
    display: flex;
    height: 0rem;
    justify-content: space-between;
    margin: auto;
    position: relative;
    width: 100%;

    &--right {
      position: relative;
      transform: scaleX(-1);
      left: 4rem;
    }

    &--left {
      position: relative;
      right: 4rem;
    }

    &--right,
    &--left {
      height: 3rem;
      cursor: pointer;
    }
  }

  &__paragraph {
    color: $custom-color;
    font-family: $custom-font;
    font-size: $p-font-size;
    line-height: $p-line-height;
  }

  &__other {
    text-align: left;
    width: 100%;

    &--title {
      color: $custom-color;
      font-family: $main-font;
      font-size: $subtitle-font-size;
    }

    &--content {
      color: $custom-color;
      font-family: $custom-font;
      font-size: $p-font-size;
      line-height: $p-line-height;
    }

    &--more {
      color: $link-color;
      font-family: $custom-font;
      font-size: $link-font-size;
    }
  }
}
</style>
