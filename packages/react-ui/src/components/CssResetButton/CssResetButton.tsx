import React from 'react'
import * as styles from './CssResetButton.styles'

export type CssResetButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const CssResetButton = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<CssResetButtonProps>
>(function CssResetButton(props, ref) {
  return (
    <button css={styles.root} ref={ref} {...props}>
      {props.children}
    </button>
  )
})
