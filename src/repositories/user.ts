import { AxiosRequest } from '@/repositories/request'
import { UserGetResponse } from '@/repositories/types'

export default class UserRepository {
  constructor(private readonly request: AxiosRequest) {}

  async loadMe() {
    const response = await this.request.get<UserGetResponse>('/v1/users/me')
    return response.data
  }
}
