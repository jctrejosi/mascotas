const serve = process.env.VUE_APP_API

export default {
  listBreeds: serve + '/breeds',
  randomImage: serve + '/images/search'
}