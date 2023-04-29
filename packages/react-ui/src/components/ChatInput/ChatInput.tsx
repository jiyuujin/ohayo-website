import { CssResetButton } from '../CssResetButton/CssResetButton'
import { Icon } from '../Icon/Icon'
import * as styles from './ChatInput.styles'
import React from 'react'

type _ChatInputProps = React.HTMLProps<HTMLTextAreaElement>

export type ChatInputProps = Omit<_ChatInputProps, 'ref'>

export const ChatInput = React.forwardRef(
  (props: ChatInputProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
    const { rows = 1, ...rest } = props

    return (
      <div css={styles.root}>
        <textarea {...rest} ref={ref} rows={rows} css={[styles.input]} />
        <CssResetButton>
          <Icon name={'carbon'} />
        </CssResetButton>
      </div>
    )
  },
)
