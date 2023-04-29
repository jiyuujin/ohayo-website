import React, { Fragment } from 'react'
import { css } from '@emotion/react'
import { StoryFn, Meta } from '@storybook/react'
import { Icon, IconProps } from './Icon'

export default {
  component: Icon,
  title: 'Icon',
  args: {
    name: 'arrow-down',
  },
  decorators: [
    (Story) => (
      <div
        css={css`
          padding: 4px;
          display: flex;
          gap: 4px;
        `}
      >
        <Story />
      </div>
    ),
  ],
} as Meta

export const Default: StoryFn<IconProps> = (args) => (
  <Fragment>
    <Icon {...args} />
    <Icon {...args} name="email" />
    <Icon {...args} name="facebook" />
    <Icon {...args} name="github" />
    <Icon {...args} name="linkedin" />
    <Icon {...args} name="map" />
    <Icon {...args} name="person" />
    <Icon {...args} name="phone" />
    <Icon {...args} name="share" />
    <Icon {...args} name="star" />
    <Icon {...args} name="twitter" />
  </Fragment>
)
