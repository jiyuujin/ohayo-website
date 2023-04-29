import React, { Fragment } from 'react'
import { action } from '@storybook/addon-actions'
import { StoryFn, Meta } from '@storybook/react'
import { ChatInput, ChatInputProps } from '../ChatInput/ChatInput'

export default {
  component: ChatInput,
  title: 'ChatInput',
  args: {
    placeholder: 'Shift+Enterで送信、Enterで改行',
    onSend: action('send'),
  },
} as Meta

export const Default: StoryFn<ChatInputProps> = (args) => (
  <Fragment>
    <ChatInput {...args}></ChatInput>
    <ChatInput {...args} id="focus"></ChatInput>
    <ChatInput {...args} value="test"></ChatInput>
  </Fragment>
)
Default.parameters = {
  pseudo: {
    focus: ['#focus'],
  },
}
