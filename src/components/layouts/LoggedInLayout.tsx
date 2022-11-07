import { ReactNode } from 'react'

type LoggedInLayoutProps = {
  children: ReactNode
}

export default function LoggedInLayout({ children }: LoggedInLayoutProps) {
  return <>{children}</>
}
