import { FormEventHandler, ReactNode } from 'react'

type FormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>
  children: ReactNode
}

export default function Form({ onSubmit, children }: FormProps) {
  return <form onSubmit={onSubmit}>{children}</form>
}
