module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}
Vue.use({
  install (Vue) {
    Vue.prototype.$axios = axios.create({
      // 検証用
      baseURL: './'
      // 本番用
      // baseURL: 'https://example/'
    })
  }
})
