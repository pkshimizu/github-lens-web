import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

import { AxiosRequest } from '@/repositories/request'
import SessionRepository from '@/repositories/session'
import { StoreState } from '@/stores/index'

type SessionState = {
  token?: string
}

const sessionState = (state: StoreState) => state.session
const request = createSelector([sessionState], (state) => new AxiosRequest(state.token))
export const SessionSelectors = {
  sessionRepository: createSelector([request], (state) => new SessionRepository(state)),
}

export const SessionInitialState: SessionState = {}

export const SessionActions = {
  signIn: createAsyncThunk(
    'session/signIn',
    async (params: { code: string; sessionRepository: SessionRepository }) => {
      const token = await params.sessionRepository.signIn(params.code)
      return {
        token,
      }
    }
  ),
}

export const SessionSlice = createSlice({
  name: 'session',
  initialState: SessionInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SessionActions.signIn.fulfilled, (state, action) => {
      state.token = action.payload.token
    })
  },
})
