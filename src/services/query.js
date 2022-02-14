const serve = process.env.VUE_APP_API

export default {
  listBreeds: serve + '/breeds',
  listCategories: serve + '/categories',
  searchCategory: serve + '/images/search'
}