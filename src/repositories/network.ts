import axios, { AxiosInstance } from 'axios'
import { atom, selector } from 'recoil'

import config from '@/config'

type Network = {
  instance: AxiosInstance
}

const networkState = atom<Network>({
  key: 'NetworkState',
  default: {
    instance: axios.create({
      baseURL: config.apiServerBaseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  },
})

export const networkInstance = selector({
  key: 'NetworkInstance',
  get: ({ get }) => get(networkState).instance,
})
