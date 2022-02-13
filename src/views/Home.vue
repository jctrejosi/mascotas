<template>
    <SearchInput />
    <Description />
    <CatsList v-if="viewListCats"/>
    <Modal v-if="viewModal" />
    <ModalSuccess v-if="viewSuccess" />
</template>

<script>
import SearchInput from '@/components/SearchInput/SearchInput.vue'
import Description from '@/components/Description/Description.vue'
import CatsList from '@/components/Lists/CatsList.vue'
import Modal from '@/components/Modal.vue'
import ModalSuccess from '@/components/ModalSuccess.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',

  components: {
    SearchInput,
    Description,
    CatsList,
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
