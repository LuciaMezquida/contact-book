import './registerServiceWorker'
import './style.scss'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import colors from 'vuetify/lib/util/colors'
import router from './router'
import store from './store'
import Vue from 'vue'
import Vuetify from 'vuetify';

Vue.config.productionTip = false
Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        accent: colors.teal.lighten1,
        warning: colors.orange,
        danger: colors.red.lighten1,
        success: colors.green,
      },
    },
  },
  options: {
    customProperties: true
  }
})

new Vue({
  name: 'Root',
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
