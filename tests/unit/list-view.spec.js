import { expect, jest, test } from '@jest/globals';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import List from '@/views/ListView'
import Vue from 'vue';
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

const localVue = createLocalVue()
const router = new VueRouter()
localVue.use(Vuex)
localVue.use(VueRouter)

Vue.use(Vuetify)

const mutations = {
  deleteUserName: jest.fn()
}
const state = {
  login: {
    userName: ''
  }
}

const store = new Vuex.Store({ mutations, state })

describe('ListView.vue', () => {
  describe('When the user has logged in', () => {
    const wrapper = shallowMount(List, {
      store,
      localVue,
      router,
      data(){
        return {
          userName: 'Linda'
        }
      }
    })
    test('should show a welcome message with the user name', () => {
      expect(wrapper.find('[data-testid="welcome-message"]').exists()).toBe(true)
    })
    test('should show a "Contact list" title', () => {
      expect(wrapper.vm.$el.querySelector('h3').textContent).toMatch(/Contact list/)
    })
  })
})
