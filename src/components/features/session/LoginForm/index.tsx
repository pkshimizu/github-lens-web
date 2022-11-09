import LoginOAuth2 from '@okteto/react-oauth2-login'
import { useCallback } from 'react'

export default function LoginForm() {
  const handleClick = useCallback(() => {
    console.log('Click')
  }, [])
  const handleSuccess = useCallback((response: { code: string }) => {
    console.log(response.code)
  }, [])
  const handleFailure = useCallback((response: { message: string }) => {
    console.log(response.message)
  }, [])
  return (
    <LoginOAuth2
      className={''}
      clientId={'3f919dfa78937b9bb67e'}
      scope={'code'}
      authorizeUri={'https://github.com/login/oauth/authorize'}
      redirectUri={'http://localhost:5173/oauth_callback'}
      onClick={handleClick}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
    />
  )
}
