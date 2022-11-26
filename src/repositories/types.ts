export type SessionPostResponse = {
  token: string
}

export type UserGetResponse = {
  uid: string
  name: string
  email: string
  githubLoginId: string
  avatarUrl: string
  createdAt: string
  updatedAt: string
}
