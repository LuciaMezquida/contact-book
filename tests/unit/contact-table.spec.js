import { expect, test } from '@jest/globals';
import { mount, createLocalVue } from '@vue/test-utils'
import ContactTable from '@/views/ListView/components/ContactTable/ContactTable'
import DialogForm from '@/views/ListView/components/Dialogs/DialogForm'
import DialogDeleteContact from '@/views/ListView/components/Dialogs/DialogDeleteContact'
import Vue from 'vue';
import Vuetify from 'vuetify'

const vuetify = new Vuetify();
const localVue = createLocalVue()
Vue.use(Vuetify)

describe('ContactTable', () => { 
  const wrapper = mount(ContactTable, {
    localVue,
    vuetify,
    propsData: {
      contactList: [
        {
          id: '90cf7535-20ea-4aaa-a659-82230b40af36',
          firstName: 'Piggy',
          lastName: 'Pig',
          email: 'peggy@muppets.com',
          phoneNumber: 2412341234,
          history: [{date: '2021-05-01T00:00:00.000Z', action: 'created'}]
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
