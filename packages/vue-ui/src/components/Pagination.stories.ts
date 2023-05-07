import { StoryFn } from '@storybook/vue3'
import Pagination from './Pagination.vue'

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    currentPage: 1,
    totalPage: 35,
    perPage: 10,
  },
}

const Template: StoryFn<unknown> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Pagination },
  setup() {
    return { args }
  },
  template: '<Pagination v-bind="args" />',
})

export const Default = Template.bind({})
