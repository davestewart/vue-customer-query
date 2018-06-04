import Vue from 'vue'
import App from './app/App.vue'
import store from './app/state/index'
import VeeValidate from 'vee-validate'

// styles
import 'bulma'

// import core ui
import './core/ui'

// config
Vue.config.productionTip = false
Vue.use(VeeValidate)

// main app
window.app = new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
