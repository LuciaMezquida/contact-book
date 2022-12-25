import { expect, test } from '@jest/globals';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import DialogForm from '@/views/ListView/components/Dialogs/DialogForm'
import Vue from 'vue';
import Vuetify from 'vuetify'

const localVue = createLocalVue()
Vue.use(Vuetify)

describe('DialogForm', () => { 
  describe('When the contact info is received by props', () => {
    const wrapper = shallowMount(DialogForm, {
      localVue,
      propsData: {
        contactInfo: {
          id: '90cf7535-20ea-4aaa-a659-82230b40af36',
          firstName: 'Piggy',
          lastName: 'Pig',
          email: 'peggy@muppets.com',
          phoneNumber: 2412341234
        },
        emailList: [],
        formTitle: 'New contact',
        showDialog: true
      }
    })
    test('should show a title received by props', () => {
      expect(wrapper.vm.$el.querySelector('[data-testid="dialog-form-title"]').textContent).toMatch(/New contact/)
    })
    test('should show a "First name" completed input', () => {
      expect(wrapper.find('[data-testid="dialog-input-first-name"]').attributes('value')).toBe('Piggy')
    })
    test('should show a "Last name" completed input', () => {
      expect(wrapper.find('[data-testid="dialog-input-last-name"]').attributes('value')).toBe('Pig')
    })
    test('should show a "Email" completed input', () => {
      expect(wrapper.find('[data-testid="dialog-input-email"]').attributes('value')).toBe('peggy@muppets.com')
    })
    test('should show a "Phone number" completed input', () => {
      expect(wrapper.find('[data-testid="dialog-input-phone-number"]').attributes('value')).toBe('2412341234')
    })
    test('should show a "Cancel" button', () => {
      expect(wrapper.find('[data-testid="dialog-form-cancel-btn"]').exists()).toBe(true)
    })
    test('should show an "OK" button', () => {
      expect(wrapper.find('[data-testid="dialog-form-save-btn"]').exists()).toBe(true)
    })
  })
  
  describe('When the contact info received is empty', () => {
    const wrapper = shallowMount(DialogForm, {
      localVue,
      propsData: {
        contactInfo: {},
        emailList: [],
        formTitle: 'New contact',
        showDialog: true
      }
    })
    test('should show a disabled "OK" button', () => {
      expect(wrapper.find('[data-testid="dialog-form-save-btn"]').attributes('disabled')).toBe('true')
    })
  })
})
