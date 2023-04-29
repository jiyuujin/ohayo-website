import { css } from '@emotion/react'

export const root = css`
  display: grid;
  column-gap: 7px;
  grid-template-columns: 1fr auto;
  margin-top: 7px;
  background: linear-gradient(0, #fff 50%, rgba(255, 255, 255, 0.01) 100%);
`

export const input = css`
  display: grid;
  border: 1px solid #2d2d2d;
  padding: 10px;
  position: relative;
  font-weight: 300;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  font-family: inherit;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    box-shadow: #5752e4 0 0 0 2px;
    border-color: #312e81;
    background-color: #fff;
    outline: 0;
  }
`
