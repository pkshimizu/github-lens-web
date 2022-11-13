import { atom, selectorFamily, selector } from 'recoil'

import SessionRepository from '@/repositories/session'

type Session = {
  repository: SessionRepository
  token?: string
}

export const sessionState = atom<Session>({
  key: 'SessionState',
  default: {
    repository: new SessionRepository(),
    token: undefined,
  },
})

export const sessionSignIn = selectorFamily<void, { code: string }>({
  key: 'SessionSignIn',
  get:
    (params) =>
    async ({ get }) => {
      const repository = get(sessionState).repository
      await repository.signIn(params.code)
    },
})

export const sessionToken = selector({
  key: 'SessionToken',
  get: ({ get }) => get(sessionState).token,
})
