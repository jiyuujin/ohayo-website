import { mount } from '@vue/test-utils'

import HelloWorld from '@/components/HelloWorld.vue'

test('displays message', async () => {
  const wrapper = await mount(HelloWorld)
  expect(wrapper.find('p').text()).toBe(
    'Edit components/HelloWorld.vue to test hot module replacement.'
  )
  expect(wrapper.find('button').text()).toBe('count is: 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.find('button').text()).toBe('count is: 1')
})
