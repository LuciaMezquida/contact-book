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
    expect(wrapper.vm.$el.querySelector('[data-testid="dialog-delete-text"]').textContent).toMatch(/Are you sure you want to delete this contact?/)
  })
  test('should show a "Cancel" button', () => {
    expect(wrapper.find('[data-testid="dialog-delete-cancel-btn"]').exists()).toBe(true)
  })
  test('should show an "OK" button', () => {
    expect(wrapper.find('[data-testid="dialog-delete-save-btn"]').exists()).toBe(true)
  })
})
