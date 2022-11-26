import { AxiosRequest } from '@/repositories/request'
import { SessionPostResponse } from '@/repositories/types'

export default class SessionRepository {
  constructor(private readonly request: AxiosRequest) {}

  async signIn(code: string) {
    const response = await this.request.post<SessionPostResponse>('/v1/sessions', { code })
    return response.data.token
  }
}
