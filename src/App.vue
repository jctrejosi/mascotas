<template>
  <div class="main-container">
    <Header />
    <SearchInput />
    <Description />
    <CatsList v-if="viewListCats"/>
    <CategoriesList v-if="viewListCategories"/>
    <Modal v-if="viewModal" />
    <ModalSuccess v-if="viewSuccess" />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import SearchInput from '@/components/SearchInput/SearchInput.vue'
import Description from '@/components/Description/Description.vue'
import CatsList from '@/components/Lists/CatsList.vue'
import CategoriesList from '@/components/Lists/CategoriesList.vue'
import Modal from '@/components/Modal.vue'
import ModalSuccess from '@/components/ModalSuccess.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',

  components: {
    Header,
    SearchInput,
    Description,
    CatsList,
    CategoriesList,
    Modal,
    ModalSuccess
  },

  computed: {
    ...mapState(['viewListCats', 'viewListCategories', 'viewModal', 'viewSuccess'])
  },

  methods: {
    ...mapActions(['Get_List_Cats'])
  },

  created () {
    this.Get_List_Cats()
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  width: 100%;
}

.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
