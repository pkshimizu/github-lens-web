import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { SessionActions, SessionSelectors } from '@/stores/session'

export default function useSession() {
  const sessionRepository = useAppSelector(SessionSelectors.sessionRepository)
  const dispatch = useAppDispatch()
  const signIn = useCallback((code: string) => {
    dispatch(SessionActions.signIn({ code, sessionRepository }))
  }, [])
  return {
    signIn,
  }
}
