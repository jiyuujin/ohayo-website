import { style } from '@vanilla-extract/css'

export const item = style({
  borderRadius: '10px',
  padding: '24px 0',
  textAlign: 'left',
})

export const itemLink = style({
  color: '#2c2e2f',
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  verticalAlign: 'middle',
  ':hover': {
    opacity: 0.6,
  },
})

export const date = style({
  fontSize: '14px',
  fontWeight: 'normal',
  lineHeight: 1,
  padding: 0,
  margin: 0,
  transition: 'color .1s',
})

export const title = style({
  fontSize: '20px',
  fontWeight: 'normal',
  lineHeight: 1.2,
  padding: 0,
  margin: 0,
  marginTop: '10px',
  transition: 'color .1s',
})

export const subtitle = style({
  fontSize: '16px',
  fontWeight: 'normal',
  lineHeight: 1,
  padding: 0,
  margin: 0,
  marginTop: '4px',
  transition: 'color .1s',
})
