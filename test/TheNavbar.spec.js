import { mount } from '@vue/test-utils'
import Logo from '@/components/TheNavbar.vue'

describe('TheNavbar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
