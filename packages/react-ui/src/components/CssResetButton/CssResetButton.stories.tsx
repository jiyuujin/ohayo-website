import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { CssResetButton, CssResetButtonProps } from './CssResetButton'
import { action } from '@storybook/addon-actions'

export default {
  component: CssResetButton,
  title: 'CssResetButton',
} as Meta

export const Default: StoryFn<CssResetButtonProps> = (args) => (
  <CssResetButton {...args} onClick={action('clicked')}>
    <div>hoge</div>
  </CssResetButton>
)

export const Disabled: StoryFn<CssResetButtonProps> = (args) => (
  <CssResetButton {...args} disabled>
    <div>hoge</div>
  </CssResetButton>
)
