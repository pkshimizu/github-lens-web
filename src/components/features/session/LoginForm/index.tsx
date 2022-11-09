import LoginOAuth2 from '@okteto/react-oauth2-login'

export default function LoginForm() {
  return (
    <LoginOAuth2
      className={''}
      clientId={'3f919dfa78937b9bb67e'}
      scope={'code'}
      authorizeUri={'https://github.com/login/oauth/authorize'}
      redirectUri={'http://localhost:5173/oauth_callback'}
      onClick={() => {}}
      onSuccess={() => {}}
      onFailure={() => {}}
    />
  )
}
