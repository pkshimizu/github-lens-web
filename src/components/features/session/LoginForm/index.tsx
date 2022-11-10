import Button from '@/components/parts/inputs/Button'
import useConfig from '@/hooks/useConfig'

export default function LoginForm() {
  const { siteBaseUrl, githubOauthClientId } = useConfig()
  return (
    <Button
      href={`https://github.com/login/oauth/authorize?client_id=${githubOauthClientId}&scope=repo&redirect_uri=${siteBaseUrl}/oauth_callback`}
    >
      Sign in with GitHub
    </Button>
  )
}
