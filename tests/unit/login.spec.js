import { expect, jest, test } from '@jest/globals';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Login from '@/views/LoginView/LoginView'
import Vue from 'vue';
import Vuetify from 'vuetify'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

Vue.use(Vuetify)

const mutations = {
  setUserName: jest.fn()
}

const store = new Vuex.Store({ mutations })

describe('LoginView.vue', () => {
  describe('When the inputs are not correctly filled', () => {
    test('should show a disabled login button', () => {
      const wrapper = shallowMount(Login, {
        store,
        localVue,
        data(){
          return {
            email: 'linda',
            name: '',
            password: ''
          }
        },
      })
      expect(wrapper.find('[data-testid="login-button"]').attributes('disabled')).toBe('true')
    })
  })
  describe('When the inputs are correctly filled', () => {
      test('should go to contact list view', async() => {
        const wrapper = shallowMount(Login, {
          store,
          localVue,
          data(){
            return {
              email: 'linda@gmail.com',
              name: 'Linda',
              password: 'lovedogs'
            }
          },
        })
        expect(wrapper.find('[data-testid="login-button"]').attributes('disabled')).toBe(undefined)
        
      })
  })
})
