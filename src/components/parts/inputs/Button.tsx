import MuiButton from '@mui/material/Button'
import { ReactNode } from 'react'

import { calcInputSizeToWidth, InputItemProps } from '@/components/parts/inputs/InputBase'

type ButtonProps = {
  type?: 'button' | 'submit'
  href?: string
  children: ReactNode
  onClick?: () => void
} & InputItemProps

export default function Button({ type = 'button', href, size, children, onClick }: ButtonProps) {
  return (
    <MuiButton
      type={type}
      href={href}
      sx={{ width: calcInputSizeToWidth(size) }}
      variant={'contained'}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  )
}
