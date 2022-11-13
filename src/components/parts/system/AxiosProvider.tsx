import { AxiosRequestConfig } from 'axios'
import { ReactNode, useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import useConfig from '@/hooks/useConfig'
import instance from '@/repositories/axios'
import { sessionToken } from '@/stores/session'

type AxiosProviderProps = {
  children: ReactNode
}

export function AxiosProvider({ children }: AxiosProviderProps) {
  const config = useConfig()
  const token = useRecoilValue(sessionToken)
  useEffect(() => {
    const requestInterceptors = instance.interceptors.request.use(
      (requestConfig: AxiosRequestConfig) => {
        requestConfig.url = config.apiServerBaseUrl + requestConfig.url
        if (requestConfig.headers) {
          if (token) {
            requestConfig.headers.Authorization = `Bearer ${token}`
          }
        }
        return requestConfig
      }
    )
    const responseInterceptor = instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    return () => {
      instance.interceptors.request.eject(requestInterceptors)
      instance.interceptors.response.eject(responseInterceptor)
    }
  }, [config, token])
  return <>{children}</>
}
