import MuiContainer from '@mui/material/Container'
import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <MuiContainer>{children}</MuiContainer>
}
