import { AxiosInstance } from 'axios'
import { SessionPostResponse } from 'github-lens-types'

export default class SessionRepository {
  constructor(private readonly instance: AxiosInstance) {}

  async signIn(code: string) {
    const response = await this.instance.post<SessionPostResponse>('/sessions', { code })
    return response.data
  }
}
