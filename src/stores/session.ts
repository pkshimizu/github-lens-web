import { atom, selectorFamily, selector } from 'recoil'

import { networkInstance } from '@/repositories/network'
import SessionRepository from '@/repositories/session'

type Session = {
  token?: string
}

export const sessionState = atom<Session>({
  key: 'SessionState',
  default: {
    token: undefined,
  },
})

export const sessionSignIn = selectorFamily<void, { code: string }>({
  key: 'SessionSignIn',
  get:
    (params) =>
    async ({ get }) => {
      const instance = get(networkInstance)
      const repository = new SessionRepository(instance)
      await repository.signIn(params.code)
    },
})

export const sessionToken = selector({
  key: 'SessionToken',
  get: ({ get }) => get(sessionState).token,
})
