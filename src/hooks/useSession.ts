import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { SessionActions, SessionSelectors } from '@/stores/session'

export default function useSession() {
  const sessionRepository = useAppSelector(SessionSelectors.sessionRepository)
  const userRepository = useAppSelector(SessionSelectors.userRepository)
  const dispatch = useAppDispatch()
  const signIn = useCallback((code: string) => {
    dispatch(SessionActions.signIn({ code, sessionRepository }))
  }, [])
  const loadUser = useCallback(() => {
    dispatch(SessionActions.loadUser({ userRepository }))
  }, [])
  return {
    signIn,
    loadUser,
  }
}
