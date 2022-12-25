import { expect, test } from '@jest/globals';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ContactTable from '@/views/ListView/components/ContactTable/ContactTable'
import List from '@/views/ListView/ListView'
import Vue from 'vue';
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
const router = new VueRouter()
localVue.use(VueRouter)

Vue.use(Vuetify)

describe('ListView', () => {
  const wrapper = shallowMount(List, {
    localVue,
    router
  })
  test('should show a "Contact list" title', () => {
    expect(wrapper.vm.$el.querySelector('h3').textContent).toMatch(/Contact list/)
  })
  test(`should render the 'ContactTable' component`, () => {
    expect(wrapper.findComponent(ContactTable).exists()).toBe(true)
  });
})
