import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

import { User } from '@/models'
import { AxiosRequest } from '@/repositories/request'
import SessionRepository from '@/repositories/session'
import UserRepository from '@/repositories/user'
import { StoreState } from '@/stores/index'

type SessionState = {
  token?: string
  user?: User
}

const sessionState = (state: StoreState) => state.session
const request = createSelector([sessionState], (state) => new AxiosRequest(state.token))
export const SessionSelectors = {
  sessionRepository: createSelector([request], (state) => new SessionRepository(state)),
  userRepository: createSelector([request], (state) => new UserRepository(state)),
  loggedIn: createSelector([sessionState], (state) => state.token !== undefined),
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
  loadUser: createAsyncThunk(
    'session/loadUser',
    async (params: { userRepository: UserRepository }) => {
      const user = await params.userRepository.loadMe()
      return {
        user,
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
    builder.addCase(SessionActions.loadUser.fulfilled, (state, action) => {
      state.user = action.payload.user
    })
  },
})
