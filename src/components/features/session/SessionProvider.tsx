import { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'

import useSession from '@/hooks/useSession'
import { SessionSelectors } from '@/stores/session'

type SessionProviderProps = {
  children: ReactNode
}

export default function SessionProvider({ children }: SessionProviderProps) {
  const { loadUser } = useSession()
  const loggedIn = useSelector(SessionSelectors.loggedIn)
  useEffect(() => {
    if (loggedIn) {
      loadUser()
    }
  }, [loggedIn])
  return <>{children}</>
}
