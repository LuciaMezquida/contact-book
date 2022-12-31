import { selectors } from '../fixtures/selectors.js'
import { LITERALS } from '../fixtures/constants.js'
import { expect, test } from '@jest/globals';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import DialogDeleteContact from '@/views/ListView/components/Dialogs/DialogDeleteContact'
import Vue from 'vue';
import Vuetify from 'vuetify'

const localVue = createLocalVue()
Vue.use(Vuetify)

describe('DialogDeleteContact', () => { 
  const wrapper = shallowMount(DialogDeleteContact, {
    localVue,
    propsData: {
      contactToDelete: {
        id: '90cf7535-20ea-4aaa-a659-82230b40af36',
        firstName: 'Piggy',
        lastName: 'Pig',
        email: 'peggy@muppets.com',
        phoneNumber: 2412341234
      },
      showDialogDelete: true
    }
  })
  test('should show a warning message', () => {
    expect(wrapper.vm.$el.querySelector(selectors.DIALOG_DELETE_CONTACT.MESSAGE).textContent).toMatch(LITERALS.DIALOG_DELETE_CONTACT_MESSAGE)
  })
  test('should show a "Cancel" button', () => {
    expect(wrapper.find(selectors.DIALOG_DELETE_CONTACT.CANCEL_BUTTON).exists()).toBe(true)
  })
  test('should show an "OK" button', () => {
    expect(wrapper.find(selectors.DIALOG_DELETE_CONTACT.SAVE_BUTTON).exists()).toBe(true)
  })
})
