import { SessionPostResponse } from 'github-lens-types'

import axios from '@/repositories/axios'

export default class SessionRepository {
  async signIn(code: string) {
    const response = await axios.post<SessionPostResponse>('/sessions', { code })
    return response.data
  }
}
