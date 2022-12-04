import colors from 'vuetify/lib/util/colors'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        accent: colors.teal.lighten1,
        warning: colors.orange,
        error: colors.red.lighten1,
        success: colors.green,
      },
    },
  },
})

export default vuetify
