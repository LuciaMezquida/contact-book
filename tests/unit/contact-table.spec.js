import { expect, test } from '@jest/globals';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ContactTable from '@/views/ListView/components/ContactTable/ContactTable'
import DialogForm from '@/views/ListView/components/Dialogs/DialogForm'
import DialogDeleteContact from '@/views/ListView/components/Dialogs/DialogDeleteContact'
import Vue from 'vue';
import Vuetify from 'vuetify'

const localVue = createLocalVue()
Vue.use(Vuetify)

describe('ContactTable', () => { 
  const wrapper = shallowMount(ContactTable, {
    localVue,
    propsData: {
      contactList: [
        {
          id: '90cf7535-20ea-4aaa-a659-82230b40af36',
          firstName: 'Piggy',
          lastName: 'Pig',
          email: 'peggy@muppets.com',
          phoneNumber: 2412341234
        }
      ]
    }
  })
  test('should show an "Add Contact" button', () => {
    expect(wrapper.find('[data-testid="add-contact-button"]').exists()).toBe(true)
  })
  test(`should render the 'DialogForm' component`, () => {
    expect(wrapper.findComponent(DialogForm).exists()).toBe(true)
  });
  test(`should render the 'DialogForm' component`, () => {
    expect(wrapper.findComponent(DialogDeleteContact).exists()).toBe(true)
  });
})
