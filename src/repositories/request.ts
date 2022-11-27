import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import config from '@/config'

export type Params =
  | {
      [key: string]:
        | string
        | string[]
        | number
        | number[]
        | boolean
        | undefined
        | null
        | Params
        | Params[]
    }
  | Params[]

export class AxiosRequest {
  instance: AxiosInstance

  constructor(token?: string) {
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    }
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }
    this.instance = axios.create({
      baseURL: config.apiServerBaseUrl,
      headers,
      responseType: 'json',
    })
  }

  async get<T>(path: string, params?: Params): Promise<AxiosResponse<T>> {
    const config: AxiosRequestConfig = {
      params,
    }
    return await this.instance.get<T>(path, config)
  }

  post<T>(path: string, params?: Params | FormData): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(path, params)
  }

  patch<T>(path: string, params?: Params): Promise<AxiosResponse<T>> {
    return this.instance.patch<T>(path, params)
  }

  put<T>(path: string, params?: Params | FormData): Promise<AxiosResponse<T>> {
    return this.instance.put<T>(path, params)
  }

  delete<T>(path: string): Promise<AxiosResponse> {
    return this.instance.delete<T>(path)
  }
}
