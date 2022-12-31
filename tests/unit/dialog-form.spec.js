import { selectors } from '../fixtures/selectors.js'
import { LITERALS } from '../fixtures/constants.js'
import { expect, test } from '@jest/globals';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import DialogForm from '@/views/ListView/components/Dialogs/DialogForm'
import Vue from 'vue';
import Vuetify from 'vuetify'

const vuetify = new Vuetify();
const localVue = createLocalVue()
Vue.use(Vuetify)

describe('DialogForm', () => { 
  describe('When the contact info is received by props', () => {
    const wrapper = shallowMount(DialogForm, {
      localVue,
      vuetify,
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
      expect(wrapper.vm.$el.querySelector(selectors.DIALOG_FORM.TITLE).textContent).toMatch(LITERALS.DIALOG_FORM_TITLE)
    })
    test('should show a "First name" completed input', () => {
      expect(wrapper.find(selectors.DIALOG_FORM.FIRST_NAME_INPUT).attributes('value')).toBe('Piggy')
    })
    test('should show a "Last name" completed input', () => {
      expect(wrapper.find(selectors.DIALOG_FORM.LAST_NAME_INPUT).attributes('value')).toBe('Pig')
    })
    test('should show a "Email" completed input', () => {
      expect(wrapper.find(selectors.DIALOG_FORM.EMAIL_INPUT).attributes('value')).toBe('peggy@muppets.com')
    })
    test('should show a "Phone number" completed input', () => {
      expect(wrapper.find(selectors.DIALOG_FORM.PHONE_NUMBER_INPUT).attributes('value')).toBe('2412341234')
    })
    test('should show a "Cancel" button', () => {
      expect(wrapper.find(selectors.DIALOG_FORM.CANCEL_BUTTON).exists()).toBe(true)
    })
    test('should show an "OK" button', () => {
      expect(wrapper.find(selectors.DIALOG_FORM.SAVE_BUTTON).exists()).toBe(true)
    })
  })
  
  describe('When the contact info received is empty', () => {
    const wrapper = shallowMount(DialogForm, {
      localVue,
      vuetify,
      data(){
        return {
          valid: true
        }
      },
      propsData: {
        contactInfo: {},
        emailList: [],
        formTitle: 'New contact',
        showDialog: true
      }
    })
    test('should show a disabled "OK" button', async() => {
      await wrapper.setData({ valid: false })
      expect(wrapper.find(selectors.DIALOG_FORM.SAVE_BUTTON).attributes('disabled')).toBe('true')
    })
  })
})
